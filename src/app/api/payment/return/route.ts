import { NextRequest, NextResponse } from 'next/server';
import { parseTariffFromOrderRef, type TariffType } from '@/utils/order';
import { getSiteUrl } from '@/utils/siteUrl';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function resolveTariff(
  orderRef: string,
  explicit: string | null | undefined
): TariffType {
  if (explicit === 'psychologist' || explicit === 'self') return explicit;
  return parseTariffFromOrderRef(orderRef);
}

function isPaymentSuccess(transactionStatus: string, reasonCode: string | number): boolean {
  return (
    transactionStatus === 'Approved' ||
    transactionStatus === 'approved' ||
    reasonCode === '1100' ||
    reasonCode === 1100
  );
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const orderRef = url.searchParams.get('orderRef') || '';
    const tariffType = resolveTariff(orderRef, url.searchParams.get('tariffType'));
    const transactionStatus =
      url.searchParams.get('transactionStatus') || url.searchParams.get('status') || '';
    const reasonCode = url.searchParams.get('reasonCode') || '';

    const origin = getSiteUrl(request);

    if (isPaymentSuccess(transactionStatus, reasonCode)) {
      const queryParams = new URLSearchParams();
      if (orderRef) queryParams.set('orderRef', orderRef);
      queryParams.set('tariffType', tariffType);
      return NextResponse.redirect(
        new URL(`/payment/success/${tariffType}?${queryParams}`, origin).toString(),
        303
      );
    }

    const query = orderRef ? `?orderRef=${encodeURIComponent(orderRef)}` : '';
    return NextResponse.redirect(new URL(`/payment/failure${query}`, origin).toString(), 303);
  } catch (error) {
    console.error('[PAYMENT RETURN] GET Error:', error);
    const origin = getSiteUrl(request);
    return NextResponse.redirect(new URL('/payment/failure', origin).toString(), 303);
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentType = (request.headers.get('content-type') || '').toLowerCase();
    let data: Record<string, unknown> = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (
      contentType.includes('application/x-www-form-urlencoded') ||
      contentType.includes('multipart/form-data')
    ) {
      const form = await request.formData();
      form.forEach((value, key) => {
        data[key] = value;
      });
    } else {
      try {
        const text = await request.text();
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }
    }

    const orderRef = String(
      data.orderRef ||
        data.orderReference ||
        data.order_id ||
        data.order ||
        data.ORDER_ID ||
        ''
    );

    const transactionStatus = String(
      data.transactionStatus || data.status || data.transaction_status || data.STATUS || ''
    );

    const reasonCode = (data.reasonCode ?? data.reason_code ?? data.REASON_CODE ?? '') as
      | string
      | number;

    // Tariff from orderRef (encoded at create) — no database
    const url = new URL(request.url);
    const tariffType = resolveTariff(orderRef, url.searchParams.get('tariffType'));

    const origin = getSiteUrl(request);

    if (isPaymentSuccess(transactionStatus, reasonCode)) {
      const queryParams = new URLSearchParams();
      if (orderRef) queryParams.set('orderRef', orderRef);
      queryParams.set('tariffType', tariffType);
      return NextResponse.redirect(
        new URL(`/payment/success/${tariffType}?${queryParams}`, origin).toString(),
        303
      );
    }

    const query = orderRef ? `?orderRef=${encodeURIComponent(orderRef)}` : '';
    return NextResponse.redirect(new URL(`/payment/failure${query}`, origin).toString(), 303);
  } catch (error) {
    console.error('[PAYMENT RETURN] POST Error:', error);
    const origin = getSiteUrl(request);
    return NextResponse.redirect(new URL('/payment/failure', origin).toString(), 303);
  }
}

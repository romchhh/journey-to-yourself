import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    console.log('[PAYMENT RETURN] Received POST to payment return URL (api/payment/return)');

    const contentType = (request.headers.get('content-type') || '').toLowerCase();
    let data: Record<string, any> = {};

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
      } catch (e) {
        data = {};
      }
    }

    const orderRef =
      data.orderRef || data.orderReference || data.order_id || data.order || '';

    const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`;
    const query = orderRef ? `?orderRef=${encodeURIComponent(String(orderRef))}` : '';
    const redirectUrl = new URL(`/payment/success${query}`, origin).toString();

    console.log('[PAYMENT RETURN] Redirecting to', redirectUrl);

    return NextResponse.redirect(redirectUrl, 303);
  } catch (error) {
    console.error('[PAYMENT RETURN] Error processing return POST:', error);
    return NextResponse.json({ error: 'Failed to process return' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getCurrentPrice } from '@/utils/price';
import { buildOrderReference, type TariffType } from '@/utils/order';
import { getMerchantDomainName, getSiteUrl } from '@/utils/siteUrl';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const crypto = await import('crypto');

    const merchantAccount = process.env.MERCHANT_ACCOUNT;
    const merchantSecretKey = process.env.MERCHANT_SECRET;
    const siteUrl = getSiteUrl(request);
    const merchantDomainName = getMerchantDomainName(siteUrl);

    if (!merchantAccount || !merchantSecretKey) {
      return NextResponse.json(
        { error: 'Merchant credentials not configured' },
        { status: 500 }
      );
    }

    let body: { price?: number; eventTitle?: string; tariffType?: string } = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const customPrice = body?.price ? Number(body.price) : null;
    const eventTitle =
      body?.eventTitle ||
      'Подорож до себе | 7-денний практикум у закритому Telegram-каналі';
    const amount = customPrice || getCurrentPrice();
    const tariffType: TariffType =
      body?.tariffType === 'psychologist' || amount === 5400 ? 'psychologist' : 'self';

    // Tariff is in orderReference — no DB needed on return/callback
    const orderReference = buildOrderReference(tariffType);
    const orderDate = Math.floor(Date.now() / 1000);

    const productNames = [eventTitle];
    const productCounts = [1];
    const productPrices = [amount];
    const amountStr = amount.toFixed(2);

    const signatureParts = [
      String(merchantAccount),
      String(merchantDomainName),
      String(orderReference),
      String(orderDate),
      amountStr,
      'UAH',
      ...productNames.map((name) => String(name)),
      ...productCounts.map((count) => String(count)),
      ...productPrices.map((price) => price.toFixed(2)),
    ];

    const signatureString = signatureParts.join(';');
    const keyBuffer = Buffer.from(merchantSecretKey, 'utf8');
    const dataBuffer = Buffer.from(signatureString, 'utf8');
    const merchantSignature = crypto
      .createHmac('md5', keyBuffer)
      .update(dataBuffer)
      .digest('hex');

    const wayforpayData = {
      merchantAccount,
      merchantAuthType: 'SimpleSignature',
      merchantDomainName,
      merchantSignature,
      orderReference,
      orderDate,
      amount: amountStr,
      currency: 'UAH',
      productName: productNames,
      productCount: productCounts,
      productPrice: productPrices.map((price) => price.toFixed(2)),
      language: 'UA',
      returnUrl: `${siteUrl}/api/payment/return?orderRef=${encodeURIComponent(orderReference)}&tariffType=${tariffType}`,
      serviceUrl: `${siteUrl}/api/payment/callback`,
    };

    return NextResponse.json({
      success: true,
      data: wayforpayData,
      meta: { tariffType, amount },
    });
  } catch (error) {
    console.error('[PAYMENT CREATE] Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to create payment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

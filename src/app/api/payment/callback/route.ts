import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * WayForPay serviceUrl webhook.
 * Stateless: verify signature and acknowledge. No DB — access is via Telegram bot after return redirect.
 */
export async function POST(request: NextRequest) {
  try {
    const crypto = await import('crypto');
    const body = await request.json();

    const {
      merchantAccount,
      orderReference,
      amount,
      currency,
      authCode,
      cardPan,
      transactionStatus,
      reasonCode,
      reason,
      merchantSignature,
    } = body;

    const merchantSecretKey = process.env.MERCHANT_SECRET;

    if (!merchantSecretKey) {
      return NextResponse.json(
        { error: 'Merchant secret key not configured' },
        { status: 500 }
      );
    }

    const signatureString = [
      merchantAccount,
      orderReference,
      transactionStatus,
      reasonCode,
      reason,
      authCode,
      cardPan,
      amount,
      currency,
    ].join(';');

    const keyBuffer = Buffer.from(merchantSecretKey, 'utf8');
    const dataBuffer = Buffer.from(signatureString, 'utf8');
    const calculatedSignature = crypto
      .createHmac('md5', keyBuffer)
      .update(dataBuffer)
      .digest('hex');

    if (calculatedSignature !== merchantSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Stateless OK — no order store. Client + Telegram handle post-payment UX.
    if (transactionStatus === 'Approved') {
      console.log('[PAYMENT CALLBACK] Approved:', orderReference, amount, currency);
    } else {
      console.log('[PAYMENT CALLBACK] Not approved:', transactionStatus, reasonCode);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('[PAYMENT CALLBACK] Error:', error);
    return NextResponse.json(
      {
        error: 'Callback processing failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

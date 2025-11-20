import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const crypto = await import('crypto');
    const body = await request.json();
    
    // WayForPay callback data
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

    // Verify signature
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
      console.error('Invalid signature from WayForPay');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Process successful payment
    if (transactionStatus === 'Approved') {
      console.log('Payment approved:', {
        orderReference,
        amount,
        currency,
        authCode,
      });

      // TODO: Update order status in database
      // TODO: Send confirmation email to user
      // TODO: Grant access to the course
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.json(
      { error: 'Callback processing failed' },
      { status: 500 }
    );
  }
}


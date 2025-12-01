import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    console.log('[PAYMENT CALLBACK] Received callback request');
    
    const crypto = await import('crypto');
    const body = await request.json();
    
    console.log('[PAYMENT CALLBACK] Request body:', body);
    
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

    console.log('[PAYMENT CALLBACK] Extracted data:', {
      merchantAccount,
      orderReference,
      amount,
      currency,
      transactionStatus,
      reasonCode,
      reason,
      hasSignature: !!merchantSignature,
    });

    const merchantSecretKey = process.env.MERCHANT_SECRET;

    console.log('[PAYMENT CALLBACK] Environment check:', {
      hasMerchantSecret: !!merchantSecretKey,
    });

    if (!merchantSecretKey) {
      console.error('[PAYMENT CALLBACK] Merchant secret key not configured');
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

    console.log('[PAYMENT CALLBACK] Signature string:', signatureString);

    try {
    const keyBuffer = Buffer.from(merchantSecretKey, 'utf8');
    const dataBuffer = Buffer.from(signatureString, 'utf8');
      
      console.log('[PAYMENT CALLBACK] Buffer info:', {
        keyBufferLength: keyBuffer.length,
        dataBufferLength: dataBuffer.length,
      });
    
    const calculatedSignature = crypto
      .createHmac('md5', keyBuffer)
      .update(dataBuffer)
      .digest('hex');

      console.log('[PAYMENT CALLBACK] Signature comparison:', {
        calculated: calculatedSignature,
        received: merchantSignature,
        match: calculatedSignature === merchantSignature,
      });

    if (calculatedSignature !== merchantSignature) {
        console.error('[PAYMENT CALLBACK] Invalid signature from WayForPay');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
      }
    } catch (signatureError) {
      console.error('[PAYMENT CALLBACK] Signature verification error:', signatureError);
      throw signatureError;
    }

    // Process successful payment
    if (transactionStatus === 'Approved') {
      console.log('[PAYMENT CALLBACK] Payment approved:', {
        orderReference,
        amount,
        currency,
        authCode,
      });

      // TODO: Update order status in database
      // TODO: Send confirmation email to user
      // TODO: Grant access to the course
    } else {
      console.log('[PAYMENT CALLBACK] Payment not approved:', {
        transactionStatus,
        reasonCode,
        reason,
      });
    }

    console.log('[PAYMENT CALLBACK] Returning success response');
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('[PAYMENT CALLBACK] Error:', error);
    console.error('[PAYMENT CALLBACK] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: 'Callback processing failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}


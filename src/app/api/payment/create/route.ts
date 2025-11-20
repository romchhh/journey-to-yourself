import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Імпортуємо crypto тільки на сервері
    const crypto = await import('crypto');

    // WayForPay credentials
    const merchantAccount = process.env.MERCHANT_ACCOUNT;
    const merchantSecretKey = process.env.MERCHANT_SECRET;
    const merchantDomainName = process.env.NEXT_PUBLIC_SITE_URL || 'https://landscaper.co.ua';

    if (!merchantAccount || !merchantSecretKey) {
      return NextResponse.json(
        { error: 'Merchant credentials not configured' },
        { status: 500 }
      );
    }

    // Product data
    const eventTitle = 'Journey to Self - 7-day practice'; // Латиниця для WayForPay
    const amount = 850;

    // Генеруємо унікальний ID замовлення
    const orderReference = `JOURNEY_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const orderDate = Math.floor(Date.now() / 1000);

    // Параметри для підпису (порядок важливий!)
    const signatureParts = [
      String(merchantAccount),
      String(merchantDomainName),
      String(orderReference),
      String(orderDate),
      String(amount),
      'UAH',
      String(eventTitle),
      '1',
      String(amount)
    ];
    
    const signatureString = signatureParts.join(';');

    // Створюємо HMAC MD5 підпис через Buffer
    const keyBuffer = Buffer.from(merchantSecretKey, 'utf8');
    const dataBuffer = Buffer.from(signatureString, 'utf8');
    
    const merchantSignature = crypto
      .createHmac('md5', keyBuffer)
      .update(dataBuffer)
      .digest('hex');

    // Параметри для WayForPay
    const wayforpayData = {
      merchantAccount,
      merchantAuthType: 'SimpleSignature',
      merchantDomainName,
      merchantSignature,
      orderReference,
      orderDate,
      amount,
      currency: 'UAH',
      productName: [eventTitle],
      productCount: [1],
      productPrice: [amount],
      language: 'UA',
      returnUrl: `${merchantDomainName}/payment/success?orderRef=${orderReference}`,
      serviceUrl: `${merchantDomainName}/api/payment/callback`,
    };

    return NextResponse.json({ success: true, data: wayforpayData });
  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}

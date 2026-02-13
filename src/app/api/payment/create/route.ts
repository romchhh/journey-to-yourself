import { NextRequest, NextResponse } from 'next/server';
import { getCurrentPrice } from '@/utils/price';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    console.log('[PAYMENT CREATE] Starting payment creation...');
    
    // Імпортуємо crypto тільки на сервері
    const crypto = await import('crypto');

    // WayForPay credentials
    const merchantAccount = process.env.MERCHANT_ACCOUNT;
    const merchantSecretKey = process.env.MERCHANT_SECRET;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://journey.anastasiiazavadska.com';
    // WayForPay потребує домен без протоколу для підпису, але з протоколом для URL
    const merchantDomainName = siteUrl.replace(/^https?:\/\//, ''); // Видаляємо http:// або https://

    console.log('[PAYMENT CREATE] Environment check:', {
      hasMerchantAccount: !!merchantAccount,
      hasMerchantSecret: !!merchantSecretKey,
      merchantAccount: merchantAccount ? `${merchantAccount.substring(0, 5)}...` : 'missing',
      siteUrl,
      merchantDomainName, // Без протоколу для підпису
    });

    if (!merchantAccount || !merchantSecretKey) {
      console.error('[PAYMENT CREATE] Missing credentials:', {
        merchantAccount: !!merchantAccount,
        merchantSecretKey: !!merchantSecretKey,
      });
      return NextResponse.json(
        { error: 'Merchant credentials not configured' },
        { status: 500 }
      );
    }

    // Product data
    let body: any = {};
    try {
      body = await request.json();
    } catch (e) {
      // Якщо body порожнє або не JSON, використовуємо дефолтні значення
      body = {};
    }
    const customPrice = body?.price ? Number(body.price) : null;
    const eventTitle = body?.eventTitle || 'Подорож до себе | 7-денний практикум у закритому Telegram-каналі'; // Опис для WayForPay
    const amount = customPrice || getCurrentPrice(); // Використовуємо передану ціну або динамічну ціну
    const tariffType = body?.tariffType || (amount === 5400 ? 'psychologist' : 'self'); // Тип тарифу

    // Генеруємо унікальний ID замовлення
    const orderReference = `JOURNEY_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const orderDate = Math.floor(Date.now() / 1000);

    console.log('[PAYMENT CREATE] Order data:', {
      orderReference,
      orderDate,
      amount: amount.toFixed(2),
      eventTitle,
    });

    // Параметри для підпису згідно з документацією WayForPay
    // Формат: merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;productName[0];...;productName[n];productCount[0];...;productCount[n];productPrice[0];...;productPrice[n]
    // Для одного продукту: merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;productName[0];productCount[0];productPrice[0]
    const productNames = [eventTitle];
    const productCounts = [1];
    const productPrices = [amount];
    
    // Формуємо підпис: спочатку базові параметри, потім всі productName, потім всі productCount, потім всі productPrice
    // Важливо: amount та productPrice мають бути з двома знаками після коми
    const amountStr = amount.toFixed(2);
    const signatureParts = [
      String(merchantAccount),
      String(merchantDomainName),
      String(orderReference),
      String(orderDate),
      amountStr, // З двома знаками після коми
      'UAH',
      // Всі productName
      ...productNames.map(name => String(name)),
      // Всі productCount
      ...productCounts.map(count => String(count)),
      // Всі productPrice (з двома знаками після коми)
      ...productPrices.map(price => price.toFixed(2))
    ];
    
    const signatureString = signatureParts.join(';');
    console.log('[PAYMENT CREATE] Signature string:', signatureString);
    console.log('[PAYMENT CREATE] Signature string length:', signatureString.length);
    console.log('[PAYMENT CREATE] Signature parts:', signatureParts);
    console.log('[PAYMENT CREATE] Signature parts count:', signatureParts.length);

    // Створюємо HMAC MD5 підпис через Buffer
    let merchantSignature: string;
    try {
    const keyBuffer = Buffer.from(merchantSecretKey, 'utf8');
    const dataBuffer = Buffer.from(signatureString, 'utf8');
    
      console.log('[PAYMENT CREATE] Buffer info:', {
        keyBufferLength: keyBuffer.length,
        dataBufferLength: dataBuffer.length,
        keyBufferFirstBytes: Array.from(keyBuffer.slice(0, 5)),
        dataBufferFirstBytes: Array.from(dataBuffer.slice(0, 20)),
      });
      
      // WayForPay використовує MD5 для SimpleSignature
      merchantSignature = crypto
      .createHmac('md5', keyBuffer)
      .update(dataBuffer)
      .digest('hex');
      
      console.log('[PAYMENT CREATE] Generated signature (MD5):', merchantSignature);
      
      // Також генеруємо SHA-1 для перевірки (якщо потрібно)
      const sha1Signature = crypto
        .createHmac('sha1', keyBuffer)
        .update(dataBuffer)
        .digest('hex');
      console.log('[PAYMENT CREATE] Alternative signature (SHA-1):', sha1Signature);
    } catch (signatureError) {
      console.error('[PAYMENT CREATE] Signature generation error:', signatureError);
      throw signatureError;
    }

    // Параметри для WayForPay
    // merchantDomainName в формі має бути без протоколу (як і в підписі)
    // amount та productPrice мають бути з двома знаками після коми
    const wayforpayData = {
      merchantAccount,
      merchantAuthType: 'SimpleSignature',
      merchantDomainName, // Без протоколу
      merchantSignature,
      orderReference,
      orderDate,
      amount: amountStr, // З двома знаками після коми
      currency: 'UAH',
      productName: productNames,
      productCount: productCounts,
      productPrice: productPrices.map(price => price.toFixed(2)), // З двома знаками після коми
      language: 'UA',
      returnUrl: `${siteUrl}/api/payment/return?orderRef=${orderReference}&tariffType=${tariffType}`,
      serviceUrl: `${siteUrl}/api/payment/callback`,
    };
    
    // Додаткова перевірка формату підпису
    console.log('[PAYMENT CREATE] Final signature verification:', {
      signatureString,
      merchantSignature,
      merchantDomainNameInSignature: merchantDomainName,
      merchantDomainNameInForm: wayforpayData.merchantDomainName,
      match: merchantDomainName === wayforpayData.merchantDomainName,
    });

    console.log('[PAYMENT CREATE] WayForPay data prepared:', {
      ...wayforpayData,
      merchantSecretKey: '***hidden***',
    });

    return NextResponse.json({ success: true, data: wayforpayData });
  } catch (error) {
    console.error('[PAYMENT CREATE] Error:', error);
    console.error('[PAYMENT CREATE] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: 'Failed to create payment', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

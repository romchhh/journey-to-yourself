import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    console.log('[PAYMENT RETURN] Received GET to payment return URL');

    // Отримуємо orderRef з query параметрів (якщо він там є)
    const url = new URL(request.url);
    const orderRef = url.searchParams.get('orderRef') || '';

    // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
    const query = orderRef ? `?orderRef=${encodeURIComponent(String(orderRef))}` : '';
    const successUrl = new URL(`/payment/success${query}`, origin).toString();

    console.log('[PAYMENT RETURN] GET redirect to:', successUrl);

    return NextResponse.redirect(successUrl, 303);
  } catch (error) {
    console.error('[PAYMENT RETURN] GET Error:', error);
    // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
    return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('[PAYMENT RETURN] Received POST to payment return URL');

    // Обмежуємо розмір тіла запиту (максимум 10KB)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10240) {
      console.error('[PAYMENT RETURN] Request body too large:', contentLength);
      // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
      return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
    }

    const contentType = (request.headers.get('content-type') || '').toLowerCase();
    let data: Record<string, any> = {};

    // КРИТИЧНО: Блокуємо multipart/form-data (може містити файли)
    if (contentType.includes('multipart/form-data')) {
      console.error('[PAYMENT RETURN] Blocked multipart request - potential file upload attempt');
      // Все одно редіректимо, але не обробляємо файли
      // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
      return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
    }

    // Логуємо деталі запиту
    console.log('[PAYMENT RETURN] Content-Type:', contentType);
    console.log('[PAYMENT RETURN] Headers:', {
      contentType: request.headers.get('content-type'),
      userAgent: request.headers.get('user-agent'),
      host: request.headers.get('host'),
    });

    if (contentType.includes('application/json')) {
      data = await request.json();
      console.log('[PAYMENT RETURN] Parsed JSON data:', data);
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      // Тільки urlencoded, НЕ multipart
      const form = await request.formData();
      form.forEach((value, key) => {
        // Перевірка: чи це не файл
        if (value instanceof File) {
          console.error('[PAYMENT RETURN] Blocked file upload attempt in form data');
          // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
          return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
        }
        data[key] = value;
      });
      console.log('[PAYMENT RETURN] Parsed form data:', data);
    } else {
      try {
        const text = await request.text();
        console.log('[PAYMENT RETURN] Raw text body length:', text?.length || 0);
        // Обмежуємо розмір тіла запиту (максимум 10KB)
        if (text.length > 10240) {
          console.error('[PAYMENT RETURN] Request body too large');
          // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
          return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
        }
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        console.log('[PAYMENT RETURN] Could not parse body as JSON');
        data = {};
      }
    }

    // Шукаємо orderRef у різних можливих полях
    const orderRef =
      data.orderRef ||
      data.orderReference ||
      data.order_id ||
      data.order ||
      data.ORDER_ID ||
      '';

    console.log('[PAYMENT RETURN] Extracted orderRef:', orderRef);

    // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
    const query = orderRef ? `?orderRef=${encodeURIComponent(String(orderRef))}` : '';
    const successUrl = new URL(`/payment/success${query}`, origin).toString();

    console.log('[PAYMENT RETURN] POST redirect to:', successUrl);

    return NextResponse.redirect(successUrl, 303);
  } catch (error) {
    console.error('[PAYMENT RETURN] POST Error:', error);
    console.error('[PAYMENT RETURN] Error details:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Навіть при помилці редіректимо на success сторінку
    // Прибираємо зайвий слеш в кінці URL
    const origin = (process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`).replace(/\/$/, '');
    return NextResponse.redirect(new URL('/payment/success', origin).toString(), 303);
  }
}

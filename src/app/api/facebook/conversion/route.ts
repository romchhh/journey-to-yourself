import { NextRequest, NextResponse } from 'next/server';

const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '1525933522023634';

export async function POST(request: NextRequest) {
  try {
    // КРИТИЧНО: Блокуємо multipart/form-data (може містити файли)
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('multipart/form-data')) {
      console.error('[FB Conversions API] Blocked multipart request - potential file upload attempt');
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Валідація Content-Type
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type. Expected application/json' },
        { status: 400 }
      );
    }

    // Перевірка наявності токену
    if (!FACEBOOK_ACCESS_TOKEN) {
      console.error('[FB Conversions API] Facebook access token not configured');
      return NextResponse.json(
        { error: 'Facebook access token not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    
    // Обмежуємо розмір тіла запиту (максимум 5KB)
    const bodyString = JSON.stringify(body);
    if (bodyString.length > 5120) {
      console.error('[FB Conversions API] Request body too large');
      return NextResponse.json(
        { error: 'Request body too large' },
        { status: 400 }
      );
    }
    const { eventName, orderRef, value, currency } = body;

    console.log('[FB Conversions API] Received request:', { eventName, orderRef, value, currency });

    // Get client IP and user agent from request
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '0.0.0.0';
    const userAgent = request.headers.get('user-agent') || '';

    // Prepare event data for Conversions API
    const eventData = {
      event_name: eventName || 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: request.headers.get('referer') || '',
      user_data: {
        client_ip_address: clientIp.split(',')[0].trim(),
        client_user_agent: userAgent,
      },
      custom_data: {
        content_name: 'Подорож до себе | 7-денний практикум у закритому Telegram-каналі',
        content_category: 'Online Course',
        value: value || 0,
        currency: currency || 'UAH',
        order_id: orderRef || '',
      },
    };

    console.log('[FB Conversions API] Sending event:', JSON.stringify(eventData, null, 2));

    // Send to Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [eventData],
          access_token: FACEBOOK_ACCESS_TOKEN,
        }),
      }
    );

    const result = await response.json();
    console.log('[FB Conversions API] Response status:', response.status);
    console.log('[FB Conversions API] Response:', JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error('[FB Conversions API] Error:', result);
      return NextResponse.json(
        { error: 'Failed to send conversion', details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('[FB Conversions API] Exception:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


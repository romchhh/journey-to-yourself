import { NextRequest, NextResponse } from 'next/server';

const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN || 'EAA8wb4YQ3ZB4BQJQnGdZA6cFMeSZBZAT2UDK3JWM3fE9G6NVjN381uoptcwZBd3ZAMXKZAoJXZAs4sqqmhRZAocy46vyVUP9F2fVZBzAvYZA8OJuZBWhFOrNz6tdpKRiscfMd8L8lvLZBv08qIBkdUtQ4YuroVQrSgZC0QO1EdZA4DxOoFKfFb1bhS8vJbt1uVwFhddXAZDZD';
const PIXEL_ID = '1525933522023634';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, orderRef, value, currency } = body;

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

    if (!response.ok) {
      console.error('Facebook Conversions API error:', result);
      return NextResponse.json(
        { error: 'Failed to send conversion', details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error processing Facebook conversion:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


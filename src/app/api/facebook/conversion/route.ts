import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '1269074031904974';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Facebook access token not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const {
      eventName,
      orderRef,
      value,
      currency,
      eventId,
      fbp,
      fbc,
      eventSourceUrl,
    } = body;

    const clientIp =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0';
    const userAgent = request.headers.get('user-agent') || '';
    const referer = eventSourceUrl || request.headers.get('referer') || '';

    const userData: Record<string, string> = {
      client_ip_address: clientIp.split(',')[0].trim(),
      client_user_agent: userAgent,
    };

    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const eventData: Record<string, unknown> = {
      event_name: eventName || 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: referer,
      user_data: userData,
    };

    if (eventId) {
      eventData.event_id = eventId;
    }

    if (eventName === 'Purchase' || eventName === 'InitiateCheckout') {
      const customData: Record<string, unknown> = {
        content_name: 'Подорож до себе | 7-денний практикум у закритому Telegram-каналі',
        content_category: 'Online Course',
        value: value || 0,
        currency: currency || 'UAH',
      };
      if (eventName === 'Purchase' && orderRef) {
        customData.order_id = orderRef;
      }
      eventData.custom_data = customData;
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [eventData],
          access_token: accessToken,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to send conversion', details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('[FB Conversions API] Exception:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

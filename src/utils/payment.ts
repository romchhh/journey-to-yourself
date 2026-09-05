import { getCurrentPrice } from '@/utils/price';
import { generateEventId, getFbp, getFbc } from '@/utils/facebookTracking';
import { savePendingPayment, type TariffType } from '@/utils/order';

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: {
        content_name?: string;
        content_category?: string;
        value?: number;
        currency?: string;
        eventID?: string;
      }
    ) => void;
  }
}

export const handlePayment = async (customPrice?: number, eventTitle?: string) => {
  try {
    const price = customPrice || getCurrentPrice();
    const title =
      eventTitle || 'Подорож до себе | 7-денний практикум у закритому Telegram-каналі';
    const tariffType: TariffType = price === 5400 ? 'psychologist' : 'self';

    if (typeof window !== 'undefined') {
      const eventId = generateEventId();
      const fbp = getFbp();
      const fbc = getFbc();
      const eventSourceUrl = window.location.href;

      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: title,
          content_category: 'Online Course',
          value: price,
          currency: 'UAH',
          eventID: eventId,
        });
      }

      fetch('/api/facebook/conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName: 'InitiateCheckout',
          eventId,
          value: price,
          currency: 'UAH',
          fbp,
          fbc,
          eventSourceUrl,
        }),
      }).catch(() => {});
    }

    const response = await fetch('/api/payment/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: customPrice,
        eventTitle: title,
        tariffType,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || result.details || 'Помилка при створенні оплати');
    }

    if (!result.success || !result.data) {
      throw new Error('Некоректна відповідь від сервера');
    }

    // Persist pending order in browser only (no server DB)
    savePendingPayment({
      orderReference: String(result.data.orderReference),
      tariffType: (result.meta?.tariffType as TariffType) || tariffType,
      amount: Number(result.meta?.amount ?? price),
      createdAt: Date.now(),
    });

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.target = '_self';

    Object.entries(result.data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `${key}[${index}]`;
          input.value = String(item);
          form.appendChild(input);
        });
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error('[CLIENT] Payment error:', error);
    alert(
      `Помилка при створенні оплати: ${error instanceof Error ? error.message : 'Невідома помилка'}. Спробуйте пізніше.`
    );
  }
};

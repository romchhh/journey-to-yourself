import { getCurrentPrice } from '@/utils/price';

// Declare fbq for TypeScript
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
      }
    ) => void;
  }
}

export const handlePayment = async () => {
  try {
    console.log('[CLIENT] Starting payment process...');
    
    // Track InitiateCheckout event for Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      const price = getCurrentPrice();
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Подорож до себе | 7-денний практикум у закритому Telegram-каналі',
        content_category: 'Online Course',
        value: price,
        currency: 'UAH',
      });
      console.log('[CLIENT] Facebook Pixel: InitiateCheckout event tracked');
    }
    
    const response = await fetch('/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('[CLIENT] Payment API response status:', response.status);
    console.log('[CLIENT] Payment API response ok:', response.ok);

    const result = await response.json();
    console.log('[CLIENT] Payment API result:', result);

    if (!response.ok) {
      console.error('[CLIENT] Payment API error:', result);
      throw new Error(result.error || result.details || 'Помилка при створенні оплати');
    }

    if (!result.success || !result.data) {
      console.error('[CLIENT] Invalid response structure:', result);
      throw new Error('Некоректна відповідь від сервера');
    }

    console.log('[CLIENT] Creating WayForPay form with data:', result.data);

    // Redirect to WayForPay
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.target = '_self'; // Відкриваємо в тому ж вікні

    Object.entries(result.data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // WayForPay очікує формат productName[0], productName[1] тощо
        value.forEach((item, index) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `${key}[${index}]`;
          input.value = String(item);
          form.appendChild(input);
          console.log(`[CLIENT] Added form field: ${key}[${index}] = ${item}`);
        });
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
        console.log(`[CLIENT] Added form field: ${key} = ${value}`);
      }
    });

    // Логуємо всі поля форми перед відправкою
    const formData = new FormData(form);
    console.log('[CLIENT] Form data before submit:');
    for (const [key, value] of formData.entries()) {
      console.log(`  ${key} = ${value}`);
    }

    console.log('[CLIENT] Submitting form to WayForPay...');
    console.log('[CLIENT] Form action:', form.action);
    console.log('[CLIENT] Form method:', form.method);
    
    document.body.appendChild(form);
    
    // Додаємо невелику затримку для логування
    setTimeout(() => {
      console.log('[CLIENT] Form submitted');
      form.submit();
    }, 100);
  } catch (error) {
    console.error('[CLIENT] Payment error:', error);
    console.error('[CLIENT] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    alert(`Помилка при створенні оплати: ${error instanceof Error ? error.message : 'Невідома помилка'}. Спробуйте пізніше.`);
  }
};


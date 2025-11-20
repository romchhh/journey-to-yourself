export const handlePayment = async () => {
  try {
    const response = await fetch('/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Помилка при створенні оплати');
    }

    // Redirect to WayForPay
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';

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
    console.error('Payment error:', error);
    alert('Помилка при створенні оплати. Спробуйте пізніше.');
  }
};


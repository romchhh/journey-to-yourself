"use client";

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { getCurrentPrice } from '@/utils/price';
import { 
  generateEventId, 
  getFbp, 
  getFbc, 
  isPurchaseAlreadySent, 
  markPurchaseAsSent 
} from '@/utils/facebookTracking';
import { clearPendingPayment } from '@/utils/order';

export const dynamic = 'force-dynamic';

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
        eventID?: string;
      }
    ) => void;
  }
}

const PaymentSuccessSelfContent = () => {
  // Посилання на бот для самостійного тарифу
  const telegramBotUrl = 'https://t.me/Workshop_Journey_To_Yourself_Bot?start=self_access';
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('orderRef') || '';

  useEffect(() => {
    clearPendingPayment();

    // Skip if no orderRef
    if (!orderRef) {
      console.warn('[FB Tracking] No orderRef provided, skipping Purchase tracking');
      return;
    }

    // Check if Purchase was already sent for this orderRef
    if (isPurchaseAlreadySent(orderRef)) {
      console.log('[FB Tracking] Purchase already sent for orderRef:', orderRef);
      return;
    }

    try {
      const price = 595; // Ціна для самостійного тарифу
      const eventId = generateEventId();
      const fbp = getFbp();
      const fbc = getFbc();

      console.log('[FB Tracking] Tracking Purchase:', {
        orderRef,
        eventId,
        fbp,
        fbc,
        value: price,
      });

      // Track Purchase event for Meta Pixel with eventID
      if (typeof window !== 'undefined' && window.fbq) {
        const eventData = {
          content_name: 'Подорож до себе | Самостійне проходження',
          content_category: 'Online Course',
          value: price,
          currency: 'UAH',
          eventID: eventId, // For deduplication
        };
        window.fbq('track', 'Purchase', eventData);
        console.log('[FB Pixel] Purchase event tracked:', eventData);
      } else {
        console.warn('[FB Pixel] fbq is not available. Pixel may not be loaded yet.');
      }

      // Send conversion to Conversions API with event_id, fbp, fbc
      fetch('/api/facebook/conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: 'Purchase',
          eventId: eventId,
          orderRef: orderRef,
          value: price,
          currency: 'UAH',
          fbp: fbp,
          fbc: fbc,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Mark as sent only if API call was successful
            markPurchaseAsSent(orderRef);
            console.log('[FB CAPI] Purchase event sent successfully');
          } else {
            console.error('[FB CAPI] Failed to send Purchase event:', response.status);
          }
        })
        .catch((error) => {
          console.error('[FB CAPI] Error sending conversion to Facebook:', error);
        });
    } catch (error) {
      console.error('[FB Tracking] Error in payment success tracking:', error);
    }
  }, [orderRef]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0FDF4' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>
            Дякуємо за оплату!
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#75DEAF' }}></div>
            <p className="text-xl font-semibold mb-8 leading-relaxed" style={{ color: '#2F2F2F' }}>
              Ваше замовлення успішно оформлено. Тепер ви можете пройти практикум через Telegram бот.
          </p>
        </div>

        <div className="p-8 rounded-2xl border-2 shadow-lg mb-8" style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}>
            <h2 className="text-2xl font-black mb-6 uppercase" style={{ color: '#0C5C38' }}>
            Що далі?
          </h2>
            <ul className="text-left space-y-4 mb-8" style={{ color: '#2F2F2F' }}>
            <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#0C5C38' }}>✓</span>
                <span className="font-semibold">Перейдіть до Telegram бота для доступу до практикуму</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#0C5C38' }}>✓</span>
                <span className="font-semibold">Практикум доступний одразу після оплати</span>
            </li>
            <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#0C5C38' }}>✓</span>
                <span className="font-semibold">Доступ до матеріалів буде активний протягом 90 днів</span>
            </li>
          </ul>

            {/* Telegram Bot Button */}
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-14 py-7 rounded-full text-xl font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2 w-full md:w-auto justify-center"
              style={{
                borderColor: '#0C5C38',
                color: '#0C5C38',
                backgroundColor: 'transparent',
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.003 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Перейти до Telegram бота
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
        </div>

        <Link
          href="/"
            className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-xl font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2"
          style={{
              borderColor: '#0C5C38',
              color: '#0C5C38',
              backgroundColor: 'transparent',
          }}
        >
            <span className="relative z-10">Повернутись на головну</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
};

const PaymentSuccessSelfPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-24 px-6 flex items-center justify-center">
          <div className="text-center">
            <p style={{ color: '#2F2F2F' }}>Завантаження...</p>
          </div>
        </div>
      </div>
    }>
      <PaymentSuccessSelfContent />
    </Suspense>
  );
};

export default PaymentSuccessSelfPage;

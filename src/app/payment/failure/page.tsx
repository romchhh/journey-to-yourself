"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

const PaymentFailureContent = () => {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('orderRef') || '';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF2F2' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#DC2626' }}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase" style={{ color: '#DC2626' }}>
              Оплата не пройшла
            </h1>
            <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#FCA5A5' }}></div>
            <p className="text-xl font-semibold mb-8 leading-relaxed" style={{ color: '#2F2F2F' }}>
              На жаль, вашу оплату не вдалося обробити. Будь ласка, спробуйте ще раз або зверніться до підтримки.
            </p>
          </div>

          <div className="p-8 rounded-2xl border-2 shadow-lg mb-8" style={{ backgroundColor: '#F8F9FA', borderColor: '#FCA5A5' }}>
            <h2 className="text-2xl font-black mb-6 uppercase" style={{ color: '#DC2626' }}>
              Що робити далі?
            </h2>
            <ul className="text-left space-y-4 mb-8" style={{ color: '#2F2F2F' }}>
              <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#DC2626' }}>•</span>
                <span className="font-semibold">Перевірте дані вашої картки та баланс</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#DC2626' }}>•</span>
                <span className="font-semibold">Спробуйте використати іншу картку</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#DC2626' }}>•</span>
                <span className="font-semibold">Зв'яжіться з вашим банком, якщо проблема повторюється</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl font-bold" style={{ color: '#DC2626' }}>•</span>
                <span className="font-semibold">Напишіть нам у підтримку, якщо потрібна допомога</span>
              </li>
            </ul>

            {orderRef && (
              <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#FEF2F2' }}>
                <p className="text-sm font-medium" style={{ color: '#991B1B' }}>
                  Номер замовлення: <span className="font-bold">{orderRef}</span>
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/offer"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-xl font-semibold transition-all hover:bg-[#DC2626]/10 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2"
              style={{
                borderColor: '#DC2626',
                color: '#DC2626',
                backgroundColor: 'transparent',
              }}
            >
              <span className="relative z-10">Спробувати ще раз</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-xl font-semibold transition-all hover:bg-[#2F2F2F]/10 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2"
              style={{
                borderColor: '#2F2F2F',
                color: '#2F2F2F',
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
    </div>
  );
};

const PaymentFailurePage = () => {
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
      <PaymentFailureContent />
    </Suspense>
  );
};

export default PaymentFailurePage;


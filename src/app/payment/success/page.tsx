import React from 'react';
import Link from 'next/link';

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0FDF4' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#0C5C38' }}>
            Дякуємо за оплату!
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#75DEAF' }}></div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Ваше замовлення успішно оформлено. Ми надішлемо вам деталі доступу до практикуму на вказану електронну пошту.
          </p>
        </div>

        <div className="p-8 rounded-2xl border-2 shadow-lg mb-8" style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0C5C38' }}>
            Що далі?
          </h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Перевірте свою електронну пошту для отримання деталей доступу</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Практикум стартує 5 січня</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Доступ до матеріалів буде активний протягом 90 днів</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-white text-xl font-bold transition-all hover:opacity-90 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)',
          }}
        >
          <span>Повернутись на головну</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;


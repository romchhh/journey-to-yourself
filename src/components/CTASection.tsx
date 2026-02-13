"use client";

import React from 'react';
import { handlePayment } from '@/utils/payment';

const CTASection = () => {
  const handleSelfPayment = () => {
    handlePayment(595, 'Подорож до себе | Самостійне проходження');
  };

  const handlePsychologistPayment = () => {
    handlePayment(5400, 'Подорож до себе | З підтримкою психолога');
  };

  return (
    <section id="cta-section" className="py-24 px-6 bg-white relative overflow-hidden grain-texture grain-texture-white">
      {/* Декоративні елементи */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(50%, 50%)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase" style={{ color: '#0C5C38' }}>
            якщо хочеш почати зміни не з тиску, а з ясності, і опори – це твій старт
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto grain-texture grain-texture-green" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>

        {/* Два тарифи */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Тариф 1: Самостійне проходження */}
          <div className="p-8 rounded-2xl bg-white border-2 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all grain-texture grain-texture-white" style={{ borderColor: '#E5E5E5' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-center uppercase" style={{ color: '#0C5C38' }}>
                САМОСТІЙНЕ ПРОХОДЖЕННЯ
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>доступ до всіх 7-ми днів практикуму</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>покрокова структура проходження</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>приклади та пояснення до кожного блоку</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>доступ 90 днів</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#E5E5E5', flexShrink: 0, marginTop: '2px' }}>–</span>
                  <p className="text-base md:text-lg font-semibold opacity-60" style={{ color: '#2F2F2F' }}>індивідуальні зідзвони</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#E5E5E5', flexShrink: 0, marginTop: '2px' }}>–</span>
                  <p className="text-base md:text-lg font-semibold opacity-60" style={{ color: '#2F2F2F' }}>персональний розбір запитів</p>
                </div>
              </div>
              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-xl line-through opacity-50" style={{ color: '#2F2F2F' }}>4500 грн</span>
                  <span className="text-4xl md:text-5xl font-black" style={{ color: '#0C5C38' }}>595 грн</span>
                </div>
              </div>
              <button 
                onClick={handleSelfPayment}
                className="w-full px-8 py-6 rounded-full text-lg font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group border-2"
                style={{ 
                  borderColor: '#0C5C38',
                  color: '#0C5C38',
                  backgroundColor: 'transparent',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Обрати тариф
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Тариф 2: З підтримкою психолога */}
          <div className="p-8 rounded-2xl bg-white border-2 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all grain-texture grain-texture-white" style={{ borderColor: '#75DEAF', backgroundColor: '#F0FDF4' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-30%, 30%)' }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-center uppercase" style={{ color: '#0C5C38' }}>
                З ПІДТРИМКОЮ ПСИХОЛОГА
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>доступ до всіх 7-ми днів практикуму</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>покрокова структура проходження</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>приклади та пояснення до кожного блоку</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>доступ 90 днів</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>3 індивідуальні зідзвони</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>персональний розбір твоїх запитів</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#75DEAF', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#2F2F2F' }}>фіксація цілей і результатів</p>
                </div>
              </div>
              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-xl line-through opacity-50" style={{ color: '#2F2F2F' }}>10500 грн</span>
                  <span className="text-4xl md:text-5xl font-black" style={{ color: '#0C5C38' }}>5400 грн</span>
                </div>
              </div>
              <button 
                onClick={handlePsychologistPayment}
                className="w-full px-8 py-6 rounded-full text-lg font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group border-2"
                style={{ 
                  borderColor: '#0C5C38',
                  color: '#0C5C38',
                  backgroundColor: 'transparent',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Обрати тариф
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Основна кнопка */}
        <div className="text-center">
          <button 
            onClick={handleSelfPayment}
            className="px-14 py-7 rounded-full text-xl font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-110 relative overflow-hidden group border-2"
            style={{ 
              borderColor: '#0C5C38',
              color: '#0C5C38',
              backgroundColor: 'transparent',
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Приєднатись до практикуму
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


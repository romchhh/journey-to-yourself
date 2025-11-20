"use client";

import React from 'react';
import Image from 'next/image';
import { handlePayment } from '@/utils/payment';

const HeroSection = () => {
  const keyInfo = [
    { icon: '/Старт.svg', label: 'Старт', value: '5 січня' },
    { icon: '/Формат.svg', label: 'Формат', value: 'Telegram чат-бот' },
    { icon: '/Доступ.svg', label: 'Доступ', value: '90 днів' },
    { icon: '/Графік.svg', label: 'Графік', value: '15–20 хв/день' }
  ];

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(50%, -50%)' }}></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(-50%, 50%)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ліва частина - контент */}
          <div>
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-sm font-bold shadow-md grain-texture grain-texture-green" style={{ backgroundColor: '#75DEAF', color: '#0C5C38' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>7-денний практикум</span>
            </div>

            {/* Заголовок */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tight text-black">
              Подорож до себе
            </h1>
            
            {/* Підзаголовок */}
            <p className="text-2xl md:text-3xl mb-10 leading-relaxed font-medium" style={{ color: '#2F2F2F' }}>
              7–денний практикум внутрішньої роботи, щоб почати новий рік інакше – з ясністю, опорою та розумінням, куди рухатись далі
            </p>

            {/* Ціна */}
            <div className="mb-10 p-8 rounded-2xl border-2 shadow-xl relative overflow-hidden group grain-texture grain-texture-white" style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-2xl line-through opacity-50" style={{ color: '#2F2F2F' }}>4500 грн</span>
                  <span className="text-6xl font-black" style={{ color: '#0C5C38' }}>850 грн</span>
                </div>
                <p className="text-base font-semibold opacity-80" style={{ color: '#2F2F2F' }}>Період: 5–11 січня</p>
              </div>
            </div>

            {/* Ключова інформація */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {keyInfo.map((item, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl border-2 bg-white shadow-md hover:shadow-xl transition-all hover:scale-105 transform relative overflow-hidden group grain-texture grain-texture-white"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#F0FDF4' }}>
                      <img src={item.icon} alt="" className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#0C5C38' }}>
                      {item.label}
                    </span>
                  </div>
                  <p className="text-base font-bold relative z-10" style={{ color: '#2F2F2F' }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Кнопка */}
            <button 
              onClick={() => handlePayment()}
              className="w-full md:w-auto px-14 py-7 rounded-full text-xl font-bold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2"
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
          
          {/* Права частина - фото */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group grain-texture-image">
              <Image 
                src="/0U0A7235.jpg" 
                alt="Подорож до себе" 
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </div>
            {/* Декоративний елемент */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#75DEAF', zIndex: -1 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


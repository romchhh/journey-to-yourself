"use client";

import React from 'react';
import { handlePayment } from '@/utils/payment';

const CTASection = () => {

  return (
    <section id="cta-section" className="py-24 px-6 bg-white relative overflow-hidden grain-texture grain-texture-white">
      {/* Декоративні елементи */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(50%, 50%)' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: '#0C5C38' }}>
            Якщо хочеш почати рік не з тиску й списків "потрібно", а з ясності, опори й відчуття себе – це твій старт.
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto grain-texture grain-texture-green" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <div className="space-y-5 mb-12 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border-2 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all grain-texture grain-texture-white" style={{ borderColor: '#75DEAF', backgroundColor: '#F0FDF4' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-30%, 30%)' }}></div>
            <div className="flex items-center justify-center gap-4 relative z-10">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#75DEAF', opacity: 0.2 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <p className="text-2xl md:text-3xl font-black text-center" style={{ color: '#0C5C38' }}>5 січня – стартуємо разом.</p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-white border-2 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all grain-texture grain-texture-white" style={{ borderColor: '#E5E5E5' }}>
            <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <div className="flex items-center justify-center gap-4 relative z-10">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#F0FDF4' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-center font-bold" style={{ color: '#2F2F2F' }}>7 днів – щоб налаштувати внутрішній компас на весь рік.</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => handlePayment()}
          className="px-14 py-7 rounded-full text-xl font-bold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-110 relative overflow-hidden group border-2"
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
    </section>
  );
};

export default CTASection;


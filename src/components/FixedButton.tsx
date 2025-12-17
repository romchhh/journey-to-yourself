"use client";

import React, { useState, useEffect } from 'react';
import { handlePayment } from '@/utils/payment';

const FixedButton = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 11, 25, 23, 59, 59); // 25 грудня поточного року, 23:59:59
      
      // Якщо 25 грудня вже пройшло, беремо наступний рік
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Плашка з реєстрацією та лічильником - зліва, завжди видима */}
      <div 
        className="fixed left-4 sm:left-6 bottom-4 sm:bottom-6 z-50 px-6 py-4 rounded-2xl shadow-2xl border-3 backdrop-blur-sm animate-pulse-slow"
        style={{ 
          backgroundColor: '#FF4444',
          borderColor: '#FF0000',
          borderWidth: '3px',
          boxShadow: '0 15px 50px rgba(255, 68, 68, 0.5), 0 0 30px rgba(255, 68, 68, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="text-center">
          <p className="text-white font-black text-sm mb-2 uppercase tracking-wide">
            Реєстрація до 25 грудня
          </p>
          <div className="flex items-center justify-center gap-1.5">
            {timeLeft.days > 0 && (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-white font-black text-xl leading-tight">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-white/90 text-xs font-semibold uppercase">дн</span>
                </div>
                <span className="text-white font-black text-xl">:</span>
              </>
            )}
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xl leading-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-white/90 text-xs font-semibold uppercase">год</span>
            </div>
            <span className="text-white font-black text-xl">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xl leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-white/90 text-xs font-semibold uppercase">хв</span>
            </div>
            <span className="text-white font-black text-xl">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-xl leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-white/90 text-xs font-semibold uppercase">сек</span>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка Приєднатись - справа, завжди видима */}
      <button
        onClick={() => handlePayment()}
        className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 px-10 py-5 rounded-full text-lg font-black transition-all hover:bg-[#0C5C38] hover:text-white shadow-2xl hover:shadow-[0_20px_60px_rgba(12,92,56,0.5)] transform hover:scale-110 flex items-center gap-2 animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-[#75DEAF] focus:ring-offset-2 border-3 bg-white backdrop-blur-sm uppercase tracking-wide"
        style={{ 
          borderColor: '#0C5C38',
          color: '#0C5C38',
          borderWidth: '3px',
          boxShadow: '0 15px 50px rgba(12, 92, 56, 0.4), 0 0 30px rgba(12, 92, 56, 0.3), inset 0 0 20px rgba(117, 222, 175, 0.1)',
        }}
        aria-label="Приєднатись до практикуму"
      >
        <span>Приєднатись</span>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
};

export default FixedButton;


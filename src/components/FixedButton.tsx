"use client";

import React, { useState, useEffect } from 'react';
import { handlePayment } from '@/utils/payment';

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => handlePayment()}
      className="fixed right-6 bottom-6 z-50 px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-110 flex items-center gap-2 animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-[#75DEAF] focus:ring-offset-2 border-2 bg-white/95 backdrop-blur-sm"
      style={{ 
        borderColor: '#0C5C38',
        color: '#0C5C38',
      }}
      aria-label="Приєднатись до практикуму"
    >
      <span>Приєднатись</span>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default FixedButton;


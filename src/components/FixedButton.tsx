"use client";

import React from 'react';
import { handlePayment } from '@/utils/payment';

const FixedButton = () => {
  return (
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
  );
};

export default FixedButton;


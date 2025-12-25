"use client";

import React from 'react';
import { handlePayment } from '@/utils/payment';

const Footer = () => {

  return (
    <footer className="py-16 px-6 text-white relative overflow-hidden grain-texture grain-texture-green" style={{ backgroundColor: '#0C5C38' }}>
      {/* Декоративні елементи */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(40%, -40%)' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-40%, 40%)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Section */}
          <div className="space-y-6">
            <button 
              onClick={() => handlePayment()}
              className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 border-2 border-white/30 hover:border-white/50 hover:scale-105 transform shadow-lg flex items-center gap-2 group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span>Приєднатись</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div>
              <img 
                src="/anastasiia zavadska.svg" 
                alt="Anastasiia Zavadska" 
                className="h-7 w-auto mb-4 brightness-0 invert opacity-90"
              />
              <p className="text-sm opacity-80 mb-2 leading-relaxed font-semibold">
                Практикум створено психологом Анастасією Завадською
              </p>
              <p className="text-xs opacity-60 font-semibold">
                © Анастасія Завадська 2025
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <a href="/#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 transform inline-block font-semibold">
                Про Практикум
              </a>
              <a href="/#author" className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 transform inline-block font-semibold">
                Про Авторку
              </a>
              <a href="/offer" className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 transform inline-block font-semibold">
                Публічна Оферта
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/anastasiia__zavadska/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://t.me/anastasia_zavadska" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/anastasiia-zavadska-4226b028" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs opacity-60">
              All rights Reserved
            </p>
          </div>
        </div>
        
        {/* TeleBots Credit */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-70 mb-2">
            Developed by{' '}
            <a 
              href="https://new.telebots.site/?utm_source=journey_website&utm_medium=referral&utm_campaign=footer_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:opacity-100 transition-opacity underline"
            >
              TeleBots
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


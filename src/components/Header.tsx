"use client";

import React, { useState, useEffect } from 'react';
import { handlePayment } from '@/utils/payment';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay - затемнення фону (під header та menu, але над контентом сторінки) */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[45] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <header 
        className={`fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b-2 shadow-md transition-all duration-300 grain-texture grain-texture-white ${
          isScrolled ? 'shadow-lg' : ''
        }`} 
        style={{ borderColor: '#E5E5E5' }}
        role="banner"
      >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo - зліва */}
          <div className="flex items-center relative z-[80]">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2 rounded"
              aria-label="На початок сторінки"
            >
          <img 
            src="/anastasiia zavadska.svg" 
            alt="Anastasiia Zavadska" 
                className="h-5 md:h-7 w-auto"
          />
            </button>
        </div>

        {/* Desktop Navigation - по центру */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-semibold hover:text-[#0C5C38] transition-colors focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2 rounded px-2 py-1"
            style={{ color: '#2F2F2F' }}
          >
            Про практикум
          </button>
          <button
            onClick={() => scrollToSection('author')}
            className="text-sm font-semibold hover:text-[#0C5C38] transition-colors focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2 rounded px-2 py-1"
            style={{ color: '#2F2F2F' }}
          >
            Про авторку
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
        <button 
          onClick={() => handlePayment()}
            className="px-8 py-3 rounded-full text-base font-semibold transition-all hover:bg-[#0C5C38]/10 shadow-xl hover:shadow-2xl transform hover:scale-110 flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-[#75DEAF] focus:ring-offset-2 border-2"
          style={{ 
              borderColor: '#0C5C38',
              color: '#0C5C38',
              backgroundColor: 'transparent',
          }}
            aria-label="Приєднатись до практикуму"
        >
          <span>Приєднатись</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </button>
        </div>

        {/* Mobile Burger Menu Button - справа */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[80] p-2 rounded-lg hover:bg-[#F0FDF4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2"
          aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ backgroundColor: '#0C5C38' }}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ backgroundColor: '#0C5C38' }}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ backgroundColor: '#0C5C38' }}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - повноекранне */}
      <nav
        className={`fixed inset-0 bg-white z-[60] transform transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="flex flex-col h-full w-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-6 py-5 text-2xl font-black uppercase text-white focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2"
            >
              Про практикум
            </button>
            <button
              onClick={() => scrollToSection('author')}
              className="text-left px-6 py-5 text-2xl font-black uppercase text-white focus:outline-none focus:ring-2 focus:ring-[#75DEAF] focus:ring-offset-2"
            >
              Про авторку
            </button>
            <div className="pt-8 border-t-2 border-white/30">
              <button 
                onClick={() => {
                  handlePayment();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-8 py-5 rounded-full text-white text-xl font-semibold transition-all hover:bg-white/10 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 border-2"
                style={{ 
                  borderColor: 'white',
                  backgroundColor: 'transparent',
                }}
                aria-label="Приєднатись до практикуму"
              >
                <span>Приєднатись</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;


"use client";

import React from 'react';
import Link from 'next/link';
import { handlePayment } from '@/utils/payment';

interface VideoPageProps {
  params: {
    id: string;
  };
}

const VideoPage = ({ params }: VideoPageProps) => {
  const videoId = 'm0FYJ3s67hg'; // YouTube video ID
  const videoNumber = params.id;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b-2 shadow-md" style={{ borderColor: '#E5E5E5' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/anastasiia zavadska.svg" 
              alt="Anastasiia Zavadska" 
              className="h-7 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link 
            href="/"
            className="px-8 py-3 rounded-full text-white text-base font-bold transition-all hover:opacity-90 shadow-xl hover:shadow-2xl transform hover:scale-110"
            style={{ 
              background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)',
            }}
          >
            На головну
          </Link>
        </div>
      </header>

      {/* Video Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Декоративні елементи */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(50%, -50%)' }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(-50%, 50%)' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-base font-medium hover:opacity-80 transition-opacity mb-6 px-4 py-2 rounded-lg hover:bg-gray-50"
              style={{ color: '#0C5C38' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Повернутись до практикуму
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F0FDF4' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0C5C38' }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide font-bold opacity-60" style={{ color: '#0C5C38' }}>Відео вправа</div>
                <h1 className="text-4xl md:text-5xl font-black" style={{ color: '#0C5C38' }}>
                  {videoNumber}
                </h1>
              </div>
            </div>
            <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#75DEAF' }}></div>
          </div>

          {/* YouTube Video Embed */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Відео вправа ${videoNumber}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Description */}
          <div className="p-8 rounded-2xl border-2 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <p className="text-lg leading-relaxed font-medium" style={{ color: '#2F2F2F' }}>
                  Це м'який вхід у практикум: коротка вправа з тієї ж логіки, яку ми будемо застосовувати 7 днів.
                </p>
              </div>
              <p className="text-base leading-relaxed opacity-80 ml-9" style={{ color: '#2F2F2F' }}>
                Кілька хвилин практичних завдань – і ти вже з'являється розуміння, більше тиші, присутності та контакту із собою.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => handlePayment()}
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-white text-xl font-bold transition-all hover:opacity-90 shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
              style={{ 
                background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)',
              }}
            >
              <span>Приєднатись до практикуму</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;


"use client";

import React from 'react';
import { aboutItems } from '@/data/constants';
import { handlePayment } from '@/utils/payment';

const AboutSection = () => {

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: '#0C5C38' }}>
      <div className="max-w-4xl mx-auto text-white">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase">Про що цей практикум</h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <p className="text-xl md:text-2xl mb-6 leading-relaxed font-normal uppercase opacity-90">
          Це не курс і не марафон. Це 7–денна м'яка подорож до себе – через короткі тексти, запитання й практики, що повертають живість і внутрішній спокій.
        </p>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed font-normal uppercase opacity-90">
          Кожен день – маленькі кроки всередину себе, які дають ясність, сили й розуміння, куди йти далі.
        </p>
        
        <div className="mb-10">
          <p className="text-xl md:text-2xl font-normal uppercase mb-8">За 7 днів ти:</p>
          <div className="grid md:grid-cols-2 gap-5">
            {aboutItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 transform relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, 20%)' }}></div>
                <div className="w-10 h-10 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 border-2 border-white/40 relative z-10 shadow-sm">
                  <img src="/Пункт.svg" alt="" className="w-6 h-6 brightness-0 invert opacity-90" />
                </div>
                <p className="text-lg leading-relaxed font-semibold relative z-10 flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-white/30 text-center mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#75DEAF', transform: 'translate(-20%, -20%)' }}></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#75DEAF', transform: 'translate(20%, 20%)' }}></div>
          <div className="relative z-10">
            <p className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase">
              Це не про те, щоб бути найкращою версією себе.
            </p>
            <p className="text-3xl md:text-4xl font-black leading-tight uppercase">
              Це про те, щоб жити своїм життям, а не очікуваннями інших.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => handlePayment()}
            className="px-12 py-6 rounded-full text-white text-xl font-semibold transition-all hover:bg-white/10 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3 mx-auto group border-2"
            style={{ 
              borderColor: 'white',
              backgroundColor: 'transparent',
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
  );
};

export default AboutSection;


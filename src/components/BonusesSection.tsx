"use client";

import React from 'react';
import { handlePayment } from '@/utils/payment';

const BonusesSection = () => {
  const handlePsychologistPayment = () => {
    handlePayment(5400, 'Подорож до себе | Формат з психологом');
  };

  const bonusItems = [
    { title: 'Формат', description: 'проходження з психологом' },
    { title: 'Темп', description: 'індивідуальний графік зідзвонів' },
    { title: 'Цінність', description: '10500 5400 грн', hasStrikethrough: true },
    { title: 'Зідзвон на старті', description: 'для визначення й усвідомлення цілей' },
    { title: 'Зідзвон на екваторі', description: 'щоб не відступити, коли почне розхитувати' },
    { title: 'Зідзвон у фіналі', description: 'щоб зафіксувати новий план і втримати результат' },
  ];

  return (
    <section className="py-24 px-6 grain-texture grain-texture-green" style={{ backgroundColor: '#00A45A' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight">ЯК ПІДВИЩИТИ СВОЇ ШАНСИ НА УСПІХ</h2>
          <div className="w-24 h-1 rounded-full mx-auto bg-white/30"></div>
        </div>
        <p className="text-xl md:text-2xl mb-12 text-center max-w-3xl mx-auto font-normal uppercase">
          ЩОБ НЕ "ВЗЯТИ І ЗАБУТИ", А ПРОЙТИ І ЗАСТОСУВАТИ
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {bonusItems.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-center hover:bg-white/20 transition-all hover:scale-110 transform shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, -30%)' }}></div>
              <h3 className="text-xl md:text-2xl font-black mb-3 relative z-10 uppercase">{item.title}</h3>
              <p className="opacity-90 text-lg relative z-10 font-semibold">
                {item.hasStrikethrough ? (
                  <>
                    <span className="line-through opacity-60 mr-2">10500</span>
                    <span>5400 грн</span>
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={handlePsychologistPayment}
            className="px-16 py-8 rounded-full text-2xl font-black transition-all hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group border-2 border-white bg-white"
            style={{ color: '#0C5C38' }}
          >
            <span className="relative z-10 flex items-center gap-3 justify-center">
              Придбати формат з психологом
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;


import React from 'react';
import { forWhomItems } from '@/data/constants';

const ForWhomSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Для кого
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <p className="text-xl md:text-2xl mb-10 text-center leading-relaxed max-w-3xl mx-auto" style={{ color: '#2F2F2F' }}>
          Для жінок, які хочуть почати рік без хаосу і виснаження – із ясністю та відчуттям себе.
        </p>
        <div className="p-10 rounded-3xl max-w-5xl mx-auto border-2 shadow-xl relative overflow-hidden grain-texture grain-texture-white" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-30%, -30%)' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, 30%)' }}></div>
          <div className="relative z-10">
            <div className="text-center mb-10 p-6 bg-white rounded-2xl border-2 shadow-sm grain-texture grain-texture-white" style={{ borderColor: '#75DEAF' }}>
              <p className="text-2xl md:text-3xl font-black" style={{ color: '#0C5C38' }}>
                Це практикум для тебе, якщо:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {forWhomItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 shadow-md hover:shadow-xl transition-all hover:scale-105 transform relative overflow-hidden group grain-texture grain-texture-white"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
                  <div className="w-10 h-10 mt-1 flex-shrink-0 flex items-center justify-center rounded-full relative z-10 shadow-sm" style={{ backgroundColor: '#F0FDF4', border: '2px solid #75DEAF' }}>
                    <img src="/Пункт.svg" alt="" className="w-6 h-6" />
                  </div>
                  <p className="text-base md:text-lg leading-relaxed font-semibold relative z-10" style={{ color: '#2F2F2F' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;


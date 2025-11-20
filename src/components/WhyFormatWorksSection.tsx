import React from 'react';
import { whyFormatWorks } from '@/data/constants';

const WhyFormatWorksSection = () => {
  return (
    <section className="py-24 px-6 grain-texture grain-texture-white" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Чому формат працює
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto grain-texture grain-texture-green" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {whyFormatWorks.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-7 bg-white rounded-2xl border-2 shadow-md hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden group grain-texture grain-texture-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, 20%)' }}></div>
              <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center relative z-10 shadow-lg" style={{ backgroundColor: '#F0FDF4', border: '3px solid #00A45A' }}>
                <span className="text-xl font-black" style={{ color: '#00A45A' }}>✔</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed pt-1 relative z-10 font-semibold flex-1" style={{ color: '#2F2F2F' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFormatWorksSection;


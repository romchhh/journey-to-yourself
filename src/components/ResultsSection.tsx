import React from 'react';
import { resultsItems } from '@/data/constants';

const ResultsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Результат
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <p className="text-xl md:text-2xl mb-12 text-center font-normal uppercase" style={{ color: '#0C5C38' }}>
          Після практикуму ти:
        </p>
        
        <div className="grid md:grid-cols-2 gap-5 mb-20 max-w-5xl mx-auto">
          {resultsItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 rounded-2xl border-2 shadow-md hover:shadow-xl transition-all hover:scale-105 bg-white relative overflow-hidden group"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="mt-1 flex-shrink-0 relative z-10">
                <img src="/Пункт.svg" alt="" className="w-6 h-6" />
              </div>
              <p className="text-base md:text-lg leading-normal font-semibold relative z-10" style={{ color: '#2F2F2F' }}>{item}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl border-2 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}>
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, -20%)' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(20%, 20%)' }}></div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>
              Ти не станеш іншою. Ти станеш – собою.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold" style={{ color: '#2F2F2F' }}>
              Це буде не ідеальна версія тебе, а справжня ти – зі здоровими бажаннями, кордонами і силами рухатись.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;


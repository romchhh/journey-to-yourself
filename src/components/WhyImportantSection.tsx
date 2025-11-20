import React from 'react';
import { whyImportantItems } from '@/data/constants';

const WhyImportantSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Чому це важливо саме зараз
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-5 mb-20">
          <div className="p-8 rounded-2xl bg-white border-2 shadow-md hover:shadow-lg transition-all relative overflow-hidden group" style={{ borderColor: '#E5E5E5' }}>
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(-30%, -30%)' }}></div>
            <p className="text-xl md:text-2xl leading-relaxed text-center relative z-10 font-medium" style={{ color: '#2F2F2F' }}>
              Більшість починають рік зі списку цілей і вимог до себе.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border-2 shadow-md hover:shadow-lg transition-all relative overflow-hidden group" style={{ borderColor: '#E5E5E5' }}>
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
            <p className="text-xl md:text-2xl leading-relaxed text-center relative z-10 font-medium" style={{ color: '#2F2F2F' }}>
              Але коли всередині немає ясності – плани не працюють.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group" style={{ backgroundColor: '#F0FDF4', borderColor: '#75DEAF' }}>
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(-25%, -25%)' }}></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(25%, 25%)' }}></div>
            <p className="text-xl md:text-2xl leading-relaxed text-center font-bold relative z-10" style={{ color: '#0C5C38' }}>
              Починати рік із виснаження – це продовжувати минулий сценарій.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group" style={{ backgroundColor: '#F0FDF4', borderColor: '#75DEAF' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(25%, -25%)' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-25%, 25%)' }}></div>
            <p className="text-xl md:text-2xl leading-relaxed text-center font-bold relative z-10" style={{ color: '#0C5C38' }}>
              Починати з ясності – це створювати новий.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16 p-10 rounded-3xl border-2 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}>
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, -20%)' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(20%, 20%)' }}></div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-black mb-4 text-center" style={{ color: '#0C5C38' }}>
              У цьому практикумі спочатку буде ясність → а потім план.
            </p>
            <p className="text-xl md:text-2xl text-center font-semibold" style={{ color: '#2F2F2F' }}>
              Не навпаки.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-10 rounded-3xl border-2 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-30%, -30%)' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, 30%)' }}></div>
          <div className="relative z-10">
            <div className="text-center mb-10 p-6 bg-white rounded-2xl border-2 shadow-sm" style={{ borderColor: '#75DEAF' }}>
              <h3 className="text-2xl md:text-3xl font-black" style={{ color: '#0C5C38' }}>
                За 7 днів ти отримаєш власну карту року:
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {whyImportantItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 shadow-md hover:shadow-xl transition-all hover:scale-105 transform relative overflow-hidden group" style={{ borderColor: '#E5E5E5' }}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
                  <div className="w-10 h-10 mt-1 flex-shrink-0 flex items-center justify-center rounded-full relative z-10 shadow-sm" style={{ backgroundColor: '#F0FDF4', border: '2px solid #75DEAF' }}>
                    <img src="/Пункт.svg" alt="" className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-semibold relative z-10 leading-relaxed" style={{ color: '#2F2F2F' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportantSection;


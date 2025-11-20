import React from 'react';
import { days, dailyItems } from '@/data/constants';

const JourneySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Як це працює
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        <p className="text-xl md:text-2xl mb-16 text-center font-medium" style={{ color: '#2F2F2F' }}>
          Щодня відкривається новий етап подорожі:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto">
          {days.map((day) => (
            <div 
              key={day.number} 
              className="flex items-start gap-5 p-8 rounded-2xl border-2 transition-all hover:shadow-2xl hover:scale-105 hover:border-green-300 bg-white group relative overflow-hidden"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, 20%)' }}></div>
              <div 
                className="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl group-hover:scale-110 transition-transform relative z-10 border-4 border-white"
                style={{ background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)' }}
              >
                {day.number}
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-black mb-3 group-hover:text-green-600 transition-colors" style={{ color: '#0C5C38' }}>
                  {day.title}
                </h3>
                <p className="text-base leading-relaxed opacity-80 font-medium" style={{ color: '#2F2F2F' }}>{day.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto p-12 rounded-3xl border-2 shadow-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(-30%, 30%)' }}></div>
          <div className="relative z-10">
            <div className="text-center mb-10 p-6 bg-white rounded-2xl border-2 shadow-sm" style={{ borderColor: '#75DEAF' }}>
              <h3 className="text-2xl md:text-3xl font-black" style={{ color: '#0C5C38' }}>Кожен день:</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {dailyItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-white rounded-xl border-2 shadow-sm hover:shadow-lg transition-all hover:scale-105 transform group" style={{ borderColor: '#E5E5E5' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F0FDF4' }}>
                    <span className="text-xl font-bold" style={{ color: '#75DEAF' }}>→</span>
                  </div>
                  <p className="text-base font-semibold flex-1" style={{ color: '#2F2F2F' }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 shadow-md" style={{ borderColor: '#75DEAF', backgroundColor: '#F0FDF4' }}>
              <p className="text-xl font-black" style={{ color: '#0C5C38' }}>
                15–20 хвилин на день, але ефект накопичується.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;


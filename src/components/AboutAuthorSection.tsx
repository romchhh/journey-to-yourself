import React from 'react';
import Image from 'next/image';

const AboutAuthorSection = () => {
  return (
    <section id="author" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            Про авторку
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image 
                src="/0U0A7200.jpg" 
                alt="Анастасія Завадська" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Декоративний елемент */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#75DEAF', zIndex: -1 }}></div>
          </div>
          
          <div className="space-y-6 p-6 rounded-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, -30%)' }}></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-30%, 30%)' }}></div>
            
            <div className="p-5 bg-white rounded-xl border-2 shadow-sm relative z-10" style={{ borderColor: '#E5E5E5' }}>
              <div className="flex items-center gap-2 mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <p className="text-lg md:text-xl leading-relaxed font-semibold" style={{ color: '#2F2F2F' }}>
                  Практикум створено психологом <strong style={{ color: '#0C5C38' }}>Анастасією Завадською</strong>
                </p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 shadow-sm relative z-10" style={{ borderColor: '#E5E5E5' }}>
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  <circle cx="12" cy="12" r="5"/>
                </svg>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#2F2F2F' }}>
                  Працюю з темами: внутрішня опора, виснаження, переоцінка цілей, повернення до себе.
                </p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 shadow-md relative z-10" style={{ borderColor: '#75DEAF', backgroundColor: '#F0FDF4' }}>
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <p className="text-lg md:text-xl leading-relaxed font-semibold" style={{ color: '#0C5C38' }}>
                  Формат практик побудований так, щоб не вимагати сили й дисципліни – результат приходить через м'які, посильні кроки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;


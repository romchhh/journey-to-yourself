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
                src="/author-photo.jpg" 
                alt="Анастасія Завадська" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                quality={85}
              />
            </div>
            {/* Декоративний елемент */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#75DEAF', zIndex: -1 }}></div>
          </div>
          
          <div className="space-y-6 p-6 rounded-xl relative overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, -30%)' }}></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-30%, 30%)' }}></div>
            
            <div className="p-5 bg-white rounded-xl border-2 shadow-sm relative z-10" style={{ borderColor: '#E5E5E5' }}>
              <p className="text-lg md:text-xl leading-normal font-semibold" style={{ color: '#2F2F2F' }}>
                Практикум створено психологом <strong className="font-black uppercase" style={{ color: '#0C5C38' }}>Анастасією Завадською</strong>
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 shadow-sm relative z-10" style={{ borderColor: '#E5E5E5' }}>
              <p className="text-lg md:text-xl leading-normal font-semibold" style={{ color: '#2F2F2F' }}>
                Працюю з темами: внутрішня опора, виснаження, переоцінка цілей, повернення до себе.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 shadow-md relative z-10" style={{ borderColor: '#75DEAF', backgroundColor: '#F0FDF4' }}>
              <p className="text-lg md:text-xl leading-normal font-semibold" style={{ color: '#0C5C38' }}>
                Формат практик побудований так, щоб не вимагати сили й дисципліни – результат приходить через м'які, посильні кроки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;


import React from 'react';

const BonusesSection = () => {
  return (
    <section className="py-24 px-6 grain-texture grain-texture-green" style={{ backgroundColor: '#75DEAF' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight">Що буде додатково</h2>
          <div className="w-24 h-1 rounded-full mx-auto bg-white/30"></div>
        </div>
        <p className="text-xl md:text-2xl mb-12 text-center max-w-3xl mx-auto font-normal uppercase">
          Щоб не "взяти і забути", а взяти і застосувати:
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-center hover:bg-white/20 transition-all hover:scale-110 transform shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, -30%)' }}></div>
            <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20 border-2 border-white/40 relative z-10 group-hover:scale-110 transition-transform">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 relative z-10 uppercase">Чат підтримки</h3>
            <p className="opacity-90 text-lg relative z-10 font-semibold">з іншими учасницями</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-center hover:bg-white/20 transition-all hover:scale-110 transform shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-30%, -30%)' }}></div>
            <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20 border-2 border-white/40 relative z-10 group-hover:scale-110 transition-transform">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 relative z-10 uppercase">Зідзвон на старті</h3>
            <p className="opacity-90 text-lg relative z-10 font-semibold">для визначення та усвідомлення цілей</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-center hover:bg-white/20 transition-all hover:scale-110 transform shadow-lg relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(30%, 30%)' }}></div>
            <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20 border-2 border-white/40 relative z-10 group-hover:scale-110 transition-transform">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-3 relative z-10 uppercase">Зідзвон у фіналі</h3>
            <p className="opacity-90 text-lg relative z-10 font-semibold">відповіді на питання + ефір "як втримати результат і не злити початок року"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;


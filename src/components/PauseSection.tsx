import React from 'react';

const PauseSection = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0C5C38' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight">
            Зупинись, щоб відновитись
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto bg-white/30"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-6 text-center leading-relaxed max-w-4xl mx-auto">
          Це м'який вхід у практикум: короткі вправи з тієї ж логіки, яку ми будемо застосовувати 7 днів.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-center leading-relaxed max-w-3xl mx-auto opacity-90">
          Кілька хвилин практичних завдань – і ти вже з'являється розуміння, більше тиші, присутності та контакту із собою.
        </p>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-bold">
              Обери будь–яку вправу і спробуй – це вже початок твоєї подорожі.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <a
                key={num}
                href={`/video/${num}`}
                className="px-5 py-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all text-center font-bold border-2 border-white/30 hover:border-white/60 hover:scale-110 transform relative overflow-hidden group shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-18 h-18 rounded-xl bg-white/20 flex items-center justify-center border-2 border-white/40 relative z-10 group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-md">
                    {/* Play button icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    {/* Video camera icon overlay */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-0 right-0 opacity-80">
                      <path d="M23 7l-7 5 7 5V7z"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs uppercase tracking-wide opacity-90 font-semibold">Відео</span>
                    <span className="text-2xl font-black">{num}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PauseSection;


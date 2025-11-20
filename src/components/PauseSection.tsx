import React from 'react';

const PauseSection = () => {
  const videos = [
    { id: 1, shortcode: 'DQogZgGjP1o', available: true },
    { id: 2, shortcode: 'DQtj0KRjCsQ', available: true },
    { id: 3, shortcode: 'DRPJOr8DJY0', available: true },
    { id: 4, shortcode: '', available: false },
    { id: 5, shortcode: '', available: false },
    { id: 6, shortcode: '', available: false },
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0C5C38' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight">
            Зупинись, щоб відновитись
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto bg-white/30"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-6 text-center leading-relaxed max-w-4xl mx-auto font-normal uppercase">
          Це м'який вхід у практикум: короткі вправи з тієї ж логіки, яку ми будемо застосовувати 7 днів.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-center leading-relaxed max-w-3xl mx-auto opacity-90 font-semibold">
          Кілька хвилин практичних завдань – і ти вже з'являється розуміння, більше тиші, присутності та контакту із собою.
        </p>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-black uppercase">
              Обери будь–яку вправу і спробуй – це вже початок твоєї подорожі.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 max-w-3xl mx-auto">
            {videos.map((video) => (
              video.available ? (
                <a
                  key={video.id}
                  href={`/video/${video.id}`}
                  className="px-5 py-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all text-center font-semibold border-2 border-white/30 hover:border-white/60 hover:scale-110 transform relative overflow-hidden group shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-18 h-18 rounded-xl bg-white/20 flex items-center justify-center border-2 border-white/40 relative z-10 group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-md">
                      {/* Instagram icon */}
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs uppercase tracking-wide opacity-90 font-semibold">Відео</span>
                      <span className="text-2xl font-black">{video.id}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={video.id}
                  className="px-5 py-6 rounded-2xl bg-white/5 backdrop-blur-sm text-center font-semibold border-2 border-white/10 relative overflow-hidden opacity-50 cursor-not-allowed"
                >
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-18 h-18 rounded-xl bg-white/10 flex items-center justify-center border-2 border-white/20">
                      {/* Lock icon */}
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs uppercase tracking-wide opacity-50 font-semibold">Скоро</span>
                      <span className="text-2xl font-black opacity-50">{video.id}</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PauseSection;


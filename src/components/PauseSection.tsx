import React from 'react';
import Image from 'next/image';

const PauseSection = () => {
  const videos = [
    { id: 1, shortcode: 'DQogZgGjP1o', available: true, thumbnail: '/001.png' },
    { id: 2, shortcode: 'DQtj0KRjCsQ', available: true, thumbnail: '/002.png' },
    { id: 3, shortcode: 'DRPJOr8DJY0', available: true, thumbnail: '/003.png' },
    { id: 4, shortcode: '', available: false, thumbnail: '/004.png' },
    { id: 5, shortcode: '', available: false, thumbnail: '/005.png' },
    { id: 6, shortcode: '', available: false, thumbnail: '/006.png' },
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
          Це м'який вхід у практикум: короткі вправи, які поступово привчають звертати увагу на свої внутрішні процеси.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-center leading-relaxed max-w-3xl mx-auto opacity-90 font-semibold">
          Кілька хвилин простих завдань – і вже з'являється більше тиші всередині, присутності й контакту із собою.
        </p>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-black uppercase">
              Обери будь–яку вправу і спробуй – це вже початок твоєї подорожі
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video) => (
              video.available ? (
              <a
                  key={video.id}
                  href={`/video/${video.id}`}
                  className="group relative overflow-hidden rounded-3xl border-2 border-white/30 hover:border-white/60 transition-all hover:scale-105 transform shadow-2xl hover:shadow-3xl cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image 
                      src={video.thumbnail} 
                      alt={`Відео ${video.id}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    
                    {/* Instagram icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:bg-white/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white drop-shadow-lg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    </div>
                    
                    {/* Video number badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs uppercase tracking-wide opacity-90 font-semibold text-white block mb-1">Відео</span>
                            <span className="text-3xl font-black text-white">{video.id}</span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={video.id}
                  className="relative overflow-hidden rounded-3xl border-2 border-white/10 opacity-60 cursor-not-allowed"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image 
                      src={video.thumbnail} 
                      alt={`Відео ${video.id}`}
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                    
                    {/* Lock icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-70">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video number badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/5 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs uppercase tracking-wide opacity-50 font-semibold text-white block mb-1">Скоро</span>
                            <span className="text-3xl font-black text-white opacity-50">{video.id}</span>
                          </div>
                        </div>
                      </div>
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


import React from 'react';

const StatsSection = () => {
  const IconCalendar = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );

  const IconUnlock = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );

  const IconClock = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const IconMessage = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const stats = [
    { number: '7', label: 'днів практичної роботи', icon: <IconCalendar /> },
    { number: '90', label: 'днів доступу до матеріалів', icon: <IconUnlock /> },
    { number: '15-20', label: 'хвилин на день', icon: <IconClock /> },
    { number: '2', label: 'Zoom-зустрічі', icon: <IconMessage /> }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden grain-texture grain-texture-white" style={{ backgroundColor: '#F8F9FA' }}>
      {/* Декоративні елементи */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#75DEAF', transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#0C5C38', transform: 'translate(50%, 50%)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-white border-2 shadow-lg hover:shadow-2xl transition-all hover:scale-110 transform relative overflow-hidden group grain-texture grain-texture-white"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-25%, 25%)' }}></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#F0FDF4' }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ color: '#0C5C38' }}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold leading-relaxed" style={{ color: '#2F2F2F' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


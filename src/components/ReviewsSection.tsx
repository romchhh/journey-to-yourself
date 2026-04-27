"use client";

import React, { useState, useRef, useEffect } from 'react';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      text: "Анастасія, дуже дякую за практикум ! Все було зрозуміло, дійсно без напруги, я проходила з задоволенням, якось все було дуже послідовно , багато інсайтів, та мій результат в кінці мене прям радує і запалює !"
    },
    {
      text: "З'явилась легкість і навіть натхнення! І якось ви мені так зрозуміло розклали все по поличках,що мені і наче вже не так і страшно ,чесне слово! Дуже класний формат і сам практикум ! 🔥🧡🧡🧡"
    },
    {
      text: "Вау, дуже дякую! Дуже лягає 🙌🏻\nЧесно кажучи, залишок дня був набагато спокійніший. Наче якийсь шмат тривоги пішов.\nПрям для мене супер відкриття 🔥 Дякую 👍🏻"
    },
    {
      text: "Всім привіт ✨\nЯ була вражена тим, що насправді багато з того, чого мені хотілося б у своєму ідеальному дні – вже є або можна втілити.\nІ ще я згадала про речі, які завжди були для мене ресурсом. Схоже, пора знов впровадити їх у своє життя.\nДуже гармонійні відчуття. Привід задуматись 🙂"
    },
    {
      text: "Доброго вечора.\nЯ виконала завдання й дозволила собі помріяти – і це було приємно. Водночас з'явилися непрості відчуття й сум поряд із цими думками. Зрозуміла, що в мені багато ностальгії та роздумів про зміни.\nНе знаю, чи це \"радісний\" відгук, але для мене це важливі усвідомлення."
    },
    {
      text: "Добрий день 🌷\nСьогодні справді занурилась у роздуми.\nЯ побачила, що в мене вже є багато ресурсів і якостей – просто раніше я ставилась до них як до чогось звичайного.\nСпробувала присвоїти це собі 🙌🏻\nДякую 🙏🏻🧡"
    },
    {
      text: "Доброго вечора.\nПісля завдання відчула несподіване натхнення та внутрішню силу – ніби побачила, що я все ж таки молодець 🫣💪\nЯ по-іншому подивилась на деякі свої риси.\nБуло непросто, місцями навіть \"скрипів мозок\" 🤯\nАле це дало дуже цінні усвідомлення."
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetCard = container.querySelector(`div[data-review-index="${index}"]`) as HTMLElement;
      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
        setCurrentIndex(index);
      }
    }
  };

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : reviews.length - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex < reviews.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cards = Array.from(container.querySelectorAll('div[data-review-index]')) as HTMLElement[];
        
        // Знаходимо картку, яка найбільше видима
        let maxVisible = 0;
        let maxVisibleIndex = 0;
        
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
          
          if (visibleWidth > maxVisible) {
            maxVisible = visibleWidth;
            maxVisibleIndex = index;
          }
        });
        
        setCurrentIndex(maxVisibleIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Викликаємо один раз для встановлення початкового індексу
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [reviews.length]);

  return (
    <section className="py-24 px-6 grain-texture grain-texture-white" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-tight" style={{ color: '#0C5C38' }}>
            ЖИВІ УСВІДОМЛЕННЯ ТА ВІДГУКИ УЧАСНИЦЬ
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: '#75DEAF' }}></div>
        </div>
        
        <div className="relative">
          {/* Кнопка вліво */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border-2 bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:flex items-center justify-center flex-shrink-0"
            style={{ borderColor: '#75DEAF', color: '#0C5C38' }}
            aria-label="Попередній відгук"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Контейнер з відгуками */}
          <div 
            ref={scrollContainerRef}
            className="flex items-start gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-0 md:px-14"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index}
                data-review-index={index}
                className="flex flex-col flex-shrink-0 w-[calc(100%-8px)] min-w-0 max-w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 sm:p-8 rounded-2xl bg-white border-2 shadow-md hover:shadow-xl transition-all relative overflow-hidden group grain-texture grain-texture-white"
                style={{ borderColor: '#E5E5E5', minWidth: '0', height: 'auto' }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#0C5C38', transform: 'translate(-20%, 20%)' }}></div>
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="mb-4 flex items-center gap-3 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0" style={{ backgroundColor: '#F0FDF4', border: '2px solid #75DEAF' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0C5C38' }}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#0C5C38' }}>Учасниця практикуму</p>
                    </div>
                  </div>
                  <div className="text-base md:text-lg leading-relaxed font-normal flex-grow" style={{ color: '#2F2F2F' }}>
                    {review.text.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? "mt-3" : ""}>
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка вправо */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border-2 bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:flex items-center justify-center flex-shrink-0"
            style={{ borderColor: '#75DEAF', color: '#0C5C38' }}
            aria-label="Наступний відгук"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Індикатори */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8' : 'opacity-50'
              }`}
              style={{ backgroundColor: index === currentIndex ? '#0C5C38' : '#75DEAF' }}
              aria-label={`Перейти до відгуку ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

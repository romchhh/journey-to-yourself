"use client";

import React from 'react';
import Image from 'next/image';
import { handlePayment } from '@/utils/payment';

const HERO_KEY_INFO = [
  { icon: '/Старт.svg', label: 'Старт', value: 'одразу після оплати' },
  { icon: '/Формат.svg', label: 'Формат', value: 'Telegram чат-бот' },
  { icon: '/Графік.svg', label: 'Ритм', value: '15-20 хвилин на день' },
  { icon: '/Доступ.svg', label: 'Доступ', value: '90 днів' },
] as const;

function HeroKeyInfoRow({
  mode,
  className = '',
}: {
  mode: 'mobile' | 'desktop';
  className?: string;
}) {
  const isMobile = mode === 'mobile';

  return (
    <div
      className={`grid min-w-0 ${
        isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10'
      } ${className}`}
      role="list"
    >
      {HERO_KEY_INFO.map((item, index) => (
        <div
          key={index}
          role="listitem"
          className={`group grain-texture grain-texture-white relative flex min-w-0 flex-col items-center justify-center overflow-hidden border-2 bg-white text-center shadow-md transition-all hover:shadow-xl ${
            isMobile
              ? 'transform rounded-xl p-5 hover:scale-105'
              : 'rounded-xl p-5 sm:rounded-2xl sm:p-6 lg:p-8 lg:hover:scale-[1.02]'
          }`}
          style={{ borderColor: '#E5E5E5' }}
        >
          <div
            className="absolute top-0 right-0 h-16 w-16 rounded-full opacity-5 transition-opacity group-hover:opacity-10"
            style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}
          />
          <div className={`relative z-10 shrink-0 ${isMobile ? 'mb-3' : 'mb-3 sm:mb-4'}`}>
            <img
              src={item.icon}
              alt=""
              className={`mx-auto ${isMobile ? 'h-12 w-12' : 'h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14'}`}
            />
          </div>
          {item.label && (
            <span
              className={`relative z-10 font-semibold uppercase tracking-wide ${
                isMobile
                  ? 'mb-1 text-sm'
                  : 'mb-1 text-sm tracking-wide sm:mb-2 sm:text-base lg:text-lg'
              }`}
              style={{ color: '#0C5C38' }}
            >
              {item.label}
            </span>
          )}
          <p
            className={`relative z-10 break-words font-semibold hyphens-auto ${
              isMobile ? 'text-lg leading-snug' : 'text-sm leading-snug sm:text-base lg:text-lg xl:text-xl'
            }`}
            style={{ color: '#2F2F2F' }}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative touch-pan-y pt-32 pb-24 px-4 sm:px-6">
      {/* Декоративні елементи */}
      <div
        className="absolute top-20 right-10 hidden h-64 w-64 rounded-full opacity-5 lg:block"
        style={{ backgroundColor: '#75DEAF', transform: 'translate(50%, -50%)' }}
      />
      <div
        className="absolute bottom-20 left-10 hidden h-48 w-48 rounded-full opacity-5 lg:block"
        style={{ backgroundColor: '#0C5C38', transform: 'translate(-50%, 50%)' }}
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:items-start">
          {/* Ліва частина — до цін (кнопка окремим рядком сітки, під ключами на моб) */}
          <div className="min-w-0 w-full max-w-full lg:col-start-1 lg:row-start-1">
            {/* Бейдж */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow-md"
              style={{ backgroundColor: '#75DEAF', color: '#0C5C38' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>7-денний практикум</span>
            </div>

            {/* Заголовок */}
            <h1
              className="mb-6 max-w-full min-w-0 hyphens-auto text-balance break-words text-4xl font-black leading-[1.05] tracking-tight uppercase [overflow-wrap:anywhere] min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: '#0C5C38' }}
            >
              Подорож до себе
            </h1>

            {/* Підзаголовок */}
            <p
              className="mb-10 max-w-full min-w-0 hyphens-auto text-balance break-words text-xl font-normal uppercase leading-relaxed [overflow-wrap:anywhere] min-[380px]:text-2xl md:text-3xl"
              style={{ color: '#0C5C38' }}
            >
              7-денний практикум внутрішньої роботи, щоб почати змінювати життя, яке більше не влаштовує –{' '}
              <span className="font-black">навіть якщо зараз відчувається виснаження і сил на зміни немає</span>
            </p>

            {/* Ціни */}
            <div className="mb-10 max-w-full min-w-0 space-y-4 max-lg:text-center">
              <div
                className="group grain-texture grain-texture-white relative max-w-full min-w-0 overflow-hidden rounded-2xl border-2 p-5 shadow-xl sm:p-8"
                style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}
              >
                <div
                  className="absolute top-0 right-0 h-32 w-32 rounded-full opacity-10 transition-opacity group-hover:opacity-15"
                  style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}
                />
                <div className="relative z-10 min-w-0 lg:text-left">
                  <div className="mb-2 flex min-w-0 max-w-full flex-wrap items-baseline justify-center gap-2 sm:gap-3 md:gap-4 lg:justify-start">
                    <span className="shrink-0 text-xl line-through opacity-50 md:text-2xl" style={{ color: '#2F2F2F' }}>
                      4500
                    </span>
                    <span className="text-3xl font-black break-words text-balance sm:text-5xl md:text-6xl" style={{ color: '#0C5C38' }}>
                      595 грн
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium opacity-70" style={{ color: '#2F2F2F' }}>
                      формат: самостійний
                    </p>
                    <p className="text-sm font-medium opacity-70" style={{ color: '#2F2F2F' }}>
                      початок: будь-коли
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="group grain-texture grain-texture-white relative max-w-full min-w-0 overflow-hidden rounded-2xl border-2 p-5 shadow-xl sm:p-8"
                style={{ backgroundColor: '#F8F9FA', borderColor: '#75DEAF' }}
              >
                <div
                  className="absolute top-0 right-0 h-32 w-32 rounded-full opacity-10 transition-opacity group-hover:opacity-15"
                  style={{ backgroundColor: '#75DEAF', transform: 'translate(30%, -30%)' }}
                />
                <div className="relative z-10 min-w-0 lg:text-left">
                  <div className="mb-2 flex min-w-0 max-w-full flex-wrap items-baseline justify-center gap-2 sm:gap-3 md:gap-4 lg:justify-start">
                    <span className="shrink-0 text-xl line-through opacity-50 md:text-2xl" style={{ color: '#2F2F2F' }}>
                      10500
                    </span>
                    <span className="text-3xl font-black break-words text-balance sm:text-5xl md:text-6xl" style={{ color: '#0C5C38' }}>
                      5400 грн
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium opacity-70" style={{ color: '#2F2F2F' }}>
                      формат: з психологом
                    </p>
                    <p className="text-sm font-medium opacity-70" style={{ color: '#2F2F2F' }}>
                      початок: будь-коли
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Права частина - фото */}
          <div className="relative min-w-0 w-full max-w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start lg:mt-12 xl:mt-14">
            <div className="grain-texture-image group relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/0U0A7235.jpg"
                alt="Подорож до себе"
                width={800}
                height={1000}
                className="relative z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                quality={90}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div
              className="absolute -right-6 -bottom-6 hidden h-32 w-32 rounded-full opacity-20 lg:block"
              style={{ backgroundColor: '#75DEAF', zIndex: -1 }}
            />
          </div>

          {/* Моб / планшет: під фото, два рядки по дві картки */}
          <HeroKeyInfoRow mode="mobile" className="max-lg:mb-0 lg:hidden" />

          {/* Кнопка — на моб після ключів; на lg залишається в першій колонці */}
          <div className="min-w-0 w-full max-w-full lg:col-start-1 lg:row-start-2">
            <button
              onClick={() => handlePayment()}
              className="group relative w-full transform overflow-hidden rounded-full border-2 px-14 py-7 text-xl font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#0C5C38]/10 md:w-auto"
              style={{
                borderColor: '#0C5C38',
                color: '#0C5C38',
                backgroundColor: 'transparent',
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Приєднатись до практикуму
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Десктоп: один ряд на всю ширину вікна */}
      <div
        className="relative z-10 mt-10 hidden min-w-0 lg:block w-screen max-w-[100vw] left-1/2 -translate-x-1/2 px-4 sm:px-8 lg:px-12 xl:px-16"
        aria-label="Ключові умови практикуму"
      >
        <HeroKeyInfoRow mode="desktop" />
      </div>
    </section>
  );
};

export default HeroSection;

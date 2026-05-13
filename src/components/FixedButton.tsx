"use client";

import React, { useEffect, useState } from 'react';
import { handlePayment } from '@/utils/payment';

const STORAGE_KEY = 'journey_fixed_cta_deadline_ms';
const DURATION_MS = 15 * 60 * 1000;

const joinButtonClassName =
  'items-center gap-2 overflow-hidden rounded-full border-[3px] border-[#0C5C38] bg-white/95 px-4 py-3.5 text-sm font-black uppercase tracking-wide text-[#0C5C38] shadow-2xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#0C5C38] hover:!text-white focus:outline-none focus:ring-4 focus:ring-[#75DEAF] focus:ring-offset-2 sm:px-10 sm:py-5 sm:text-lg flex transform animate-fade-in-up animate-pulse-slow group shrink-0';

function formatMmSs(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function OfferCountdownCard({
  display,
  className = '',
  stacked = false,
}: {
  display: string;
  className?: string;
  /** Мобільна: плашка над кнопкою — компактний вертикальний стек */
  stacked?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-red-200 bg-white/95 shadow-xl backdrop-blur-sm ${
        stacked
          ? 'w-full min-w-0 px-2.5 py-2'
          : 'max-w-sm px-4 py-3'
      } ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {stacked ? (
        <div className="flex flex-col items-center justify-center gap-0.5 text-center">
          <p className="w-full text-balance text-xs font-black uppercase leading-tight tracking-tight text-red-600 min-[380px]:text-sm">
            Спецпропозиція
          </p>
          <p
            className="font-black tabular-nums text-lg leading-none tracking-tight text-[#0C5C38] min-[380px]:text-xl"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {display}
          </p>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between gap-3 text-left">
          <p className="max-w-[12rem] text-left text-lg font-black uppercase leading-tight tracking-tight text-red-600">
            Спецпропозиція
          </p>
          <p
            className="shrink-0 text-right text-2xl font-black tabular-nums leading-none tracking-tight text-[#0C5C38]"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {display}
          </p>
        </div>
      )}
    </div>
  );
}

function JoinCtaButton({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => handlePayment()}
      className={`${joinButtonClassName} ${className}`}
      style={{
        borderRadius: '9999px',
        boxShadow:
          '0 15px 50px rgba(12, 92, 56, 0.4), 0 0 30px rgba(12, 92, 56, 0.3), inset 0 0 20px rgba(117, 222, 175, 0.1)',
      }}
      aria-label="Приєднатись до практикуму"
    >
      <span className="whitespace-nowrap transition-colors group-hover:text-white">Приєднатись</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        className="transition-transform group-hover:translate-x-1 group-hover:text-white"
        aria-hidden="true"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const FixedButton = () => {
  const [remainingSec, setRemainingSec] = useState<number | null>(null);

  useEffect(() => {
    // При кожному завантаженні / оновленні сторінки — нові 15 хв
    const deadline = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, String(deadline));

    const tick = () => {
      setRemainingSec(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const display = remainingSec === null ? '—' : formatMmSs(remainingSec);

  return (
    <>
      {/* Мобільна: плашка над кнопкою, вирівняно вправо внизу */}
      <div
        className="pointer-events-none fixed bottom-4 left-3 right-3 z-50 flex min-w-0 justify-end md:hidden"
        aria-label="Швидке приєднання та таймер пропозиції"
      >
        <div className="pointer-events-auto grid w-max max-w-[min(100%,calc(100vw-1.5rem))] min-w-0 grid-cols-1 gap-2">
          <OfferCountdownCard display={display} stacked className="min-w-0" />
          <JoinCtaButton className="w-full justify-center" />
        </div>
      </div>

      {/* Десктоп: таймер — лівий нижній кут; кнопка — правий нижній */}
      <OfferCountdownCard
        display={display}
        className="pointer-events-auto fixed bottom-6 left-6 z-50 hidden md:block"
      />
      <JoinCtaButton className="pointer-events-auto fixed bottom-6 right-6 z-50 hidden max-w-[calc(100vw-2rem)] md:flex" />
    </>
  );
};

export default FixedButton;

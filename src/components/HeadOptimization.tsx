"use client";

import { useEffect } from 'react';

export default function HeadOptimization() {
  useEffect(() => {
    // Preload critical fonts
    const fonts = [
      { href: '/fonts/font/Mont-Black.woff2', type: 'font/woff2' },
      { href: '/fonts/font/Mont-Regular.woff2', type: 'font/woff2' },
      { href: '/fonts/font/Mont-SemiBold.woff2', type: 'font/woff2' },
    ];

    fonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = 'font';
      link.type = font.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external resources
    const dnsPrefetch = [
      'https://connect.facebook.net',
      'https://www.facebook.com',
      'https://secure.wayforpay.com',
    ];

    dnsPrefetch.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}


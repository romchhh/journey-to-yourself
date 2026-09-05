import type { NextRequest } from 'next/server';

/**
 * Public site origin for WayForPay return/service URLs.
 * Prefer NEXT_PUBLIC_SITE_URL; on Vercel fall back to VERCEL_URL / Host header.
 * No database — resolved per request only.
 */
export function getSiteUrl(request?: NextRequest): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, '');
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, '');
    return `https://${host}`;
  }

  if (request) {
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
    if (host) {
      const proto = request.headers.get('x-forwarded-proto') || 'https';
      return `${proto}://${host}`.replace(/\/$/, '');
    }
  }

  return 'https://journey.anastasiiazavadska.com';
}

export function getMerchantDomainName(siteUrl: string): string {
  return siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

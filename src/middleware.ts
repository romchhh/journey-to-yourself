import { NextRequest, NextResponse } from 'next/server';

// Простий rate limiting (в production використовуйте Redis або подібне)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 хвилина
const RATE_LIMIT_MAX_REQUESTS = 30; // максимум запитів за хвилину

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    // Очищаємо старі записи при додаванні нового
    if (rateLimitMap.size > 1000) {
      for (const [key, value] of rateLimitMap.entries()) {
        if (now > value.resetTime) {
          rateLimitMap.delete(key);
        }
      }
    }
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
             request.headers.get('x-real-ip') || 
             'unknown';

  // Rate limiting для API endpoints
  if (pathname.startsWith('/api/')) {
    if (!checkRateLimit(ip)) {
      console.error('[MIDDLEWARE] Rate limit exceeded for IP:', ip, 'path:', pathname);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
  }

  // Блокуємо підозрілі User-Agent (бот-майнери та скрапери)
  const suspiciousUserAgents = [
    /miner/i,
    /coin/i,
    /crypto/i,
    /stratum/i,
    /pool/i,
    /scraper/i,
    /bot/i,
    /crawler/i,
    /spider/i,
  ];

  // Але дозволяємо легальні боти (Google, Facebook тощо)
  const allowedBots = [
    /googlebot/i,
    /bingbot/i,
    /facebookexternalhit/i,
    /slurp/i,
    /duckduckbot/i,
  ];

  if (suspiciousUserAgents.some(pattern => pattern.test(userAgent)) &&
      !allowedBots.some(pattern => pattern.test(userAgent))) {
    console.error('[MIDDLEWARE] Blocked suspicious User-Agent:', userAgent, 'from IP:', ip);
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  // Блокуємо підозрілі query параметри (можуть містити ін'єкції)
  const suspiciousQueryPatterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onload=/i,
    /eval\(/i,
    /\.\.\//i,
    /\.\.\\/i,
  ];

  const queryString = searchParams.toString();
  if (suspiciousQueryPatterns.some(pattern => pattern.test(queryString))) {
    console.error('[MIDDLEWARE] Blocked suspicious query parameters from IP:', ip);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }

  // Блокуємо спроби завантаження підозрілих файлів через API
  if (pathname.startsWith('/api/')) {
    // Блокуємо підозрілі файли з випадковими назвами
    const suspiciousPatterns = [
      /[a-z0-9]{20,}\.(html|sh|php|py|exe|bat|cmd|ps1|jar|war)$/i,
      /\.(sh|php|py|exe|bat|cmd|ps1|jar|war)$/i,
    ];

    // Перевірка на підозрілі шляхи в API
    if (suspiciousPatterns.some(pattern => pattern.test(pathname))) {
      console.error('[MIDDLEWARE] Blocked suspicious API request:', pathname);
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    // Блокуємо POST запити до неіснуючих API endpoints
    if (request.method === 'POST' && !isValidApiEndpoint(pathname)) {
      console.error('[MIDDLEWARE] Blocked POST to invalid endpoint:', pathname, 'from', request.headers.get('x-forwarded-for') || 'unknown');
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    // Блокуємо PUT, PATCH, DELETE методи (не потрібні для нашого API)
    if (['PUT', 'PATCH', 'DELETE'].includes(request.method) && !isValidApiEndpoint(pathname)) {
      console.error('[MIDDLEWARE] Blocked', request.method, 'to endpoint:', pathname);
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Перевірка Content-Type для POST запитів
    if (request.method === 'POST') {
      const contentType = request.headers.get('content-type') || '';
      
      // Блокуємо multipart/form-data (може містити файли)
      if (contentType.includes('multipart/form-data')) {
        console.error('[MIDDLEWARE] Blocked multipart request to API:', pathname);
        return NextResponse.json(
          { error: 'File uploads not allowed' },
          { status: 403 }
        );
      }

      // Блокуємо підозрілі Content-Type
      const suspiciousContentTypes = [
        /application\/x-sh/i,
        /application\/x-php/i,
        /application\/x-python/i,
        /application\/octet-stream/i,
      ];

      if (suspiciousContentTypes.some(pattern => pattern.test(contentType))) {
        console.error('[MIDDLEWARE] Blocked suspicious Content-Type:', contentType, 'to', pathname);
        return NextResponse.json(
          { error: 'Invalid content type' },
          { status: 400 }
        );
      }
    }
  }

  // Блокуємо прямі запити до підозрілих файлів у public
  const suspiciousFilePatterns = [
    /\/[a-z0-9]{20,}\.(html|sh|php|py|exe|bat|cmd|ps1|jar|war)$/i,
    /\/[a-z0-9]{15,}\.js$/i, // Підозрілі JS файли з випадковими назвами
  ];

  if (suspiciousFilePatterns.some(pattern => pattern.test(pathname))) {
    console.error('[MIDDLEWARE] Blocked suspicious file request:', pathname);
    return NextResponse.json(
      { error: 'Not Found' },
      { status: 404 }
    );
  }

  // Блокуємо path traversal атаки та інші підозрілі шляхи
  const dangerousPathPatterns = [
    /\.\./,
    /\/\//,
    /\/\./,
    /\.\.%2f/i,
    /\.\.%5c/i,
    /%2e%2e/i,
    /%2f%2e%2e/i,
    /\/etc\//i,
    /\/proc\//i,
    /\/sys\//i,
    /\/dev\//i,
    /\/root\//i,
    /\/bin\//i,
    /\/usr\//i,
    /\/var\//i,
    /\/tmp\//i,
    /\/home\//i,
  ];

  if (dangerousPathPatterns.some(pattern => pattern.test(pathname))) {
    console.error('[MIDDLEWARE] Blocked dangerous path:', pathname, 'from IP:', ip);
    return NextResponse.json(
      { error: 'Invalid path' },
      { status: 400 }
    );
  }

  // Блокуємо занадто довгі URL (може бути атака)
  if (pathname.length > 2048 || request.url.length > 4096) {
    console.error('[MIDDLEWARE] Blocked overly long URL from IP:', ip);
    return NextResponse.json(
      { error: 'URL too long' },
      { status: 414 }
    );
  }

  // Додаємо security headers
  const response = NextResponse.next();
  
  // Content Security Policy - блокуємо підозрілі скрипти та майнери
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.facebook.com https://secure.wayforpay.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://connect.facebook.net https://graph.facebook.com https://secure.wayforpay.com",
    "frame-src 'self' https://www.instagram.com https://secure.wayforpay.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://secure.wayforpay.com", // Дозволяємо відправку форм на WayForPay
    "frame-ancestors 'none'",
    "worker-src 'none'", // Блокуємо Web Workers (використовуються майнерами)
    "child-src 'none'", // Блокуємо iframe та інші дочірні контексти
    "manifest-src 'self'",
    "media-src 'self'",
    "prefetch-src 'self'",
    "navigate-to 'self' https://secure.wayforpay.com", // Дозволяємо навігацію на WayForPay
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), serial=(), bluetooth=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  
  // Додаткова захист від майнерів
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');

  return response;
}

// Список дозволених API endpoints
function isValidApiEndpoint(pathname: string): boolean {
  const allowedEndpoints = [
    '/api/payment/create',
    '/api/payment/callback',
    '/api/payment/return',
    '/api/facebook/conversion',
  ];

  return allowedEndpoints.some(endpoint => pathname === endpoint);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
};


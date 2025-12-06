import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
      console.error('[MIDDLEWARE] Blocked POST to invalid endpoint:', pathname);
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }
  }

  // Блокуємо прямі запити до підозрілих файлів у public
  const suspiciousFilePatterns = [
    /\/[a-z0-9]{20,}\.(html|sh|php|py|exe|bat|cmd|ps1|jar|war)$/i,
  ];

  if (suspiciousFilePatterns.some(pattern => pattern.test(pathname))) {
    console.error('[MIDDLEWARE] Blocked suspicious file request:', pathname);
    return NextResponse.json(
      { error: 'Not Found' },
      { status: 404 }
    );
  }

  // Додаємо security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

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


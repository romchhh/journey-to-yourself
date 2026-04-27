import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getCurrentPrice } from "@/utils/price";
import HeadOptimization from "@/components/HeadOptimization";
import FacebookPageView from "@/components/FacebookPageView";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Подорож до себе | 7-денний практикум внутрішньої роботи | Анастасія Завадська",
  description: "7-денний практикум внутрішньої роботи для жінок. Почати новий рік з ясністю, опорою та розумінням, куди рухатись далі. Практикум від психолога Анастасії Завадської. Старт 5 січня.",
  keywords: "практикум внутрішньої роботи, психологія, саморозвиток, жінки, ясність, опора, Анастасія Завадська, практикум 2025",
  authors: [{ name: "Анастасія Завадська" }],
  openGraph: {
    title: "Подорож до себе | 7-денний практикум внутрішньої роботи",
    description: "7-денний практикум внутрішньої роботи для жінок. Почати новий рік з ясністю, опорою та розумінням.",
    type: "website",
    locale: "uk_UA",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://journey.anastasiiazavadska.com",
    siteName: "Подорож до себе",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://journey.anastasiiazavadska.com"}/0U0A7235.jpg`,
        width: 1200,
        height: 630,
        alt: "Подорож до себе - 7-денний практикум",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Подорож до себе | 7-денний практикум внутрішньої роботи",
    description: "7-денний практикум внутрішньої роботи для жінок. Почати новий рік з ясністю, опорою та розумінням.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  other: {
    "facebook-domain-verification": "mv6hfy64ws14g|6rq15mem8if2f2jx",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://journey.anastasiiazavadska.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPrice = getCurrentPrice();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Подорож до себе - 7-денний практикум внутрішньої роботи",
    "description": "7-денний практикум внутрішньої роботи для жінок. Почати новий рік з ясністю, опорою та розумінням, куди рухатись далі.",
    "provider": {
      "@type": "Person",
      "name": "Анастасія Завадська",
      "jobTitle": "Психолог"
    },
    "courseMode": "online",
    "inLanguage": "uk",
    "offers": {
      "@type": "Offer",
      "price": String(currentPrice),
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock"
    },
    "startDate": "2025-01-05"
  };

  return (
    <html lang="uk" className="overflow-x-hidden">
      <head>
        {/* Google Tag Manager — якомога ближче до відкриваючого <head> */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KM3V35V5');`,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased overflow-x-hidden`}
        style={{ fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      >
        {/* Google Tag Manager (noscript) — одразу після <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM3V35V5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <HeadOptimization />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Facebook Domain Verification - Must be in <head> */}
        <Script
          id="facebook-domain-verification"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (document.querySelector('meta[name="facebook-domain-verification"]')) return;
                var meta = document.createElement('meta');
                meta.name = 'facebook-domain-verification';
                meta.content = 'mv6hfy64ws14g|6rq15mem8if2f2jx';
                document.head.appendChild(meta);
              })();
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1269074031904974');
              console.log('[FB Pixel] Initialized');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1269074031904974&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <FacebookPageView />
        {children}
      </body>
    </html>
  );
}

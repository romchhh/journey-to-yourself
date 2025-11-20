import type { Metadata } from "next";
import "./globals.css";

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
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://landscaper.co.ua",
    siteName: "Подорож до себе",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://landscaper.co.ua"}/0U0A7235.jpg`,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      "price": "850",
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock"
    },
    "startDate": "2025-01-05"
  };

  return (
    <html lang="uk">
      <body
        className="antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

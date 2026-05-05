import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "buddy Cool Barber Shop | ร้านตัดผม พหลโยธิน 53 บางเขน",
  description:
    "ร้านตัดผมชาย buddy Cool Barber Shop พหลโยธิน 53 แยก 16 บางเขน ใกล้ BTS หมอชิต อนุสาวรีย์ชัย บริการตัดผม สระ ดัดผม ทำสี โกนหนวด เปิดทุกวัน 11:00-22:00 น.",
  keywords: [
    "ร้านตัดผม พหลโยธิน 53",
    "ร้านตัดผม บางเขน",
    "barber shop พหลโยธิน",
    "ร้านตัดผมใกล้ BTS หมอชิต",
    "ร้านตัดผมอนุสาวรีย์ชัย",
    "ร้านตัดผมใกล้มอศรีปทุม",
    "buddy Cool Barber",
    "ตัดผมชาย กรุงเทพ",
  ],
  authors: [{ name: "buddy Cool Barber Shop" }],
  creator: "buddy Cool Barber Shop",
  publisher: "buddy Cool Barber Shop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://buddy-cool.vercel.app",
    siteName: "buddy Cool Barber Shop",
    title: "buddy Cool Barber Shop | ร้านตัดผม พหลโยธิน 53 บางเขน",
    description:
      "ร้านตัดผมชาย พหลโยธิน 53 แยก 16 บางเขน ใกล้ BTS หมอชิต บริการตัดผม สระ ดัดผม ทำสี เปิดทุกวัน 11:00-22:00 น.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "buddy Cool Barber Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "buddy Cool Barber Shop | ร้านตัดผม พหลโยธิน 53",
    description:
      "ร้านตัดผมชาย พหลโยธิน 53 แยก 16 บางเขน บริการตัดผม สระ ดัดผม ทำสี",
    images: ["/logo.jpg"],
  },
  // verification: {
  //   google: "ใส่โค้ดจาก Google Search Console ตรงนี้",
  // },
  alternates: {
    canonical: "https://buddy-cool.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://buddy-cool.vercel.app",
    name: "buddy Cool Barber Shop",
    alternateName: "buddy Cool",
    description:
      "ร้านตัดผมชาย บริการตัดผม สระ ดัดผม ทำสี โกนหนวด พหลโยธิน 53 แยก 16 บางเขน",
    url: "https://buddy-cool.vercel.app",
    telephone: "+66614187946",
    priceRange: "฿50-฿2,500",
    image: "https://buddy-cool.vercel.app/logo.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "พหลโยธิน 53 แยก 16",
      addressLocality: "บางเขน",
      addressRegion: "กรุงเทพมหานคร",
      postalCode: "10220",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.8403,
      longitude: 100.6144,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://web.facebook.com/ByTaeBarber",
      "https://line.me/R/ti/p/@778kpgjf",
    ],
    hasMap: "https://maps.app.goo.gl/JR9Fh1ufw5fufvr7A",
    areaServed: {
      "@type": "City",
      name: "Bangkok",
    },
    paymentAccepted: "Cash, Mobile Banking",
    currenciesAccepted: "THB",
  };

  return (
    <html lang="th" className={kanit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
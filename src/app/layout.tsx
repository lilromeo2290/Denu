import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Denu Nugoryiyi Za (Zordede Vava) | Premier Cultural Festival of Denu, Ghana",
  description:
    "The Denu Nugoryiyi Za Festival (Zordede Vava) is the premier cultural celebration of the people of Denu in the Volta Region of Ghana. Celebrating heritage, unity, community development, tourism, investment, and traditional leadership.",
  keywords: [
    "Denu Nugoryiyi Za",
    "Zordede Vava",
    "Denu Festival",
    "Ghana Cultural Festival",
    "Volta Region Festival",
    "Ewe Festival",
    "Ghana Tourism",
    "African Cultural Festival",
    "Denu Ghana",
    "Grand Durbar",
  ],
  authors: [{ name: "Denu Nugoryiyi Za Festival Secretariat" }],
  creator: "Some Traditional Area",
  publisher: "Denu Nugoryiyi Za Festival Secretariat",
  metadataBase: new URL("https://denunugoryiyiza.gh"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/logo-favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/logo-square.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo-square.png", sizes: "512x512", type: "image/png" }],
    shortcut: ["/logo-favicon.png"],
  },
  openGraph: {
    title: "Denu Nugoryiyi Za (Zordede Vava) — Premier Cultural Festival of Denu, Ghana",
    description:
      "Celebrating Heritage • Inspiring Development • Connecting Generations. Discover the grand durbar, cultural heritage, development projects, tourism, and investment opportunities of Denu.",
    url: "https://denunugoryiyiza.gh",
    siteName: "Denu Nugoryiyi Za Festival",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Denu Nugoryiyi Za Festival logo — sun, palm trees and traditional branding",
      },
      {
        url: "/og-image-square.jpg",
        width: 512,
        height: 512,
        alt: "Denu Nugoryiyi Za Festival logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denu Nugoryiyi Za (Zordede Vava)",
    description:
      "Celebrating Heritage • Inspiring Development • Connecting Generations. The premier cultural festival of Denu, Ghana.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "culture",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Festival",
  name: "Denu Nugoryiyi Za (Zordede Vava)",
  description:
    "Annual cultural festival of the people of Denu, Volta Region, Ghana, celebrating heritage, unity, community development, tourism, investment, and traditional leadership.",
  image: [
    "https://denunugoryiyiza.gh/og-image.jpg",
    "https://denunugoryiyiza.gh/og-image-square.jpg",
    "https://denunugoryiyiza.gh/logo-full.png",
  ],
  logo: "https://denunugoryiyiza.gh/logo-full.png",
  url: "https://denunugoryiyiza.gh",
  location: {
    "@type": "Place",
    name: "Denu, Volta Region, Ghana",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denu",
      addressRegion: "Volta",
      addressCountry: "GH",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Some Traditional Area",
    url: "https://denunugoryiyiza.gh",
    logo: "https://denunugoryiyiza.gh/logo-full.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-festival.jpg"
          fetchPriority="high"
        />
        {/* Explicit OpenGraph + Twitter meta tags for maximum social scraper compatibility */}
        <meta property="og:title" content="Denu Nugoryiyi Za (Zordede Vava) — Premier Cultural Festival of Denu, Ghana" />
        <meta property="og:description" content="Celebrating Heritage • Inspiring Development • Connecting Generations. Discover the grand durbar, cultural heritage, development projects, tourism, and investment opportunities of Denu." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Denu Nugoryiyi Za Festival" />
        <meta property="og:locale" content="en_GH" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:secure_url" content="/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Denu Nugoryiyi Za Festival logo — sun, palm trees and traditional branding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Denu Nugoryiyi Za (Zordede Vava)" />
        <meta name="twitter:description" content="Celebrating Heritage • Inspiring Development • Connecting Generations. The premier cultural festival of Denu, Ghana." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:image:alt" content="Denu Nugoryiyi Za Festival logo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

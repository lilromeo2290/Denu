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
        url: "/hero-festival.jpg",
        width: 1920,
        height: 1080,
        alt: "Aerial night view of the Denu Nugoryiyi Za Festival with crowds, illuminated tents and stage lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denu Nugoryiyi Za (Zordede Vava)",
    description:
      "Celebrating Heritage • Inspiring Development • Connecting Generations. The premier cultural festival of Denu, Ghana.",
    images: ["/hero-festival.jpg"],
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

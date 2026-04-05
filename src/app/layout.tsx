import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWA } from "@/components/ui/FloatingWA";
import { ScrollObserver } from "@/components/ui/ScrollObserver";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webcraft.aty0.com"),
  title: {
    default: "WebCraft — Jasa Pembuatan Website & Aplikasi Mobile Kediri",
    template: "%s | WebCraft Kediri",
  },
  description:
    "Studio pembuatan website & aplikasi mobile profesional di Kediri. Melayani pembuatan landing page, e-commerce, aplikasi Android & iOS dengan desain modern dan performa tinggi.",
  keywords: [
    "jasa pembuatan website kediri",
    "jasa aplikasi mobile kediri",
    "jasa android ios",
    "bikin website murah",
    "jasa landing page kediri",
    "pembuatan toko online",
    "software house kediri",
    "web developer jawa timur",
    "jasa seo website",
    "buat aplikasi android"
  ],
  authors: [{ name: "WebCraft", url: "https://webcraft.aty0.com" }],
  creator: "WebCraft",
  publisher: "WebCraft Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webcraft.aty0.com",
    siteName: "ATY0",
    title: "ATY0 — Jasa Pembuatan Website & Aplikasi Mobile",
    description:
      "Solusi digital untuk bisnis Anda. Jasa pembuatan website perusahaan, toko online, dan aplikasi mobile Android & iOS di Kediri, Jawa Timur.",
    images: [
      { 
        url: "/og-image.svg", 
        width: 1200, 
        height: 630,
        alt: "WebCraft - Jasa Pembuatan Website dan Aplikasi"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATY0 — Jasa Pembuatan Website & Aplikasi Mobile",
    description: "Tingkatkan bisnis Anda dengan website & aplikasi mobile profesional dari ATY0.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "AFrOaSILAsqxXwrBaPB1SpWXFNu1q_q_6kaEI3jliv8",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" }
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  },
  alternates: {
    canonical: "https://webcraft.aty0.com",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        <ScrollObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}

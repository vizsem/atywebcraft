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
  metadataBase: new URL("https://aty0.id"),
  title: {
    default: "aty0 | WebCraft — Jasa Pembuatan Website & Aplikasi Mobile",
    template: "%s | aty0 WebCraft",
  },
  description:
    "Studio pembuatan website & aplikasi mobile profesional. Website, Android, iOS, Flutter — desain modern, performa tinggi, siap 7–21 hari.",
  keywords: [
    "jasa pembuatan website",
    "jasa aplikasi mobile",
    "jasa android ios",
    "flutter developer indonesia",
    "web developer madiun",
    "next.js developer",
    "toko online murah",
  ],
  authors: [{ name: "aty0 WebCraft", url: "https://aty0.id" }],
  creator: "aty0 WebCraft",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aty0.id",
    siteName: "aty0 WebCraft",
    title: "aty0 | WebCraft — Jasa Pembuatan Website & Aplikasi Mobile",
    description:
      "Studio pembuatan website & aplikasi mobile profesional di Indonesia.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "aty0 | WebCraft",
    description: "Jasa Pembuatan Website & Aplikasi Mobile Profesional",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
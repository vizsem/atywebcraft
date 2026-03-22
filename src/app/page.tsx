import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MobileAppSection } from "@/components/sections/MobileAppSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimoniSection } from "@/components/sections/TestimoniSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Mobile Kediri | WebCraft",
  description:
    "WebCraft adalah software house di Kediri yang melayani jasa pembuatan website perusahaan, toko online, dan aplikasi mobile (Android & iOS). Konsultasi gratis sekarang!",
  alternates: {
    canonical: "https://webcraft.aty0.com",
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <MobileAppSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimoniSection />
      <CtaSection />
    </>
  );
}
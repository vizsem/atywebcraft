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
  title: "aty0 | WebCraft — Jasa Pembuatan Website & Aplikasi Mobile",
  description:
    "Studio pembuatan website profesional & aplikasi mobile Android iOS. Desain modern, cepat, SEO-ready. Konsultasi gratis, siap 7–21 hari.",
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
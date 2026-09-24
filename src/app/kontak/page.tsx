import { CtaSection } from "@/components/sections/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak ATY0",
  description: "Hubungi ATY0 untuk konsultasi pembuatan website, aplikasi mobile, dan solusi digital untuk bisnis Anda.",
  alternates: {
    canonical: "https://www.aty0.com/kontak",
  },
};

export default function KontakPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-4">
        <h1 className="text-5xl font-bold font-display mb-6">Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Berdiskusi</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Punya ide luar biasa? Jangan ragu untuk menghubungi kami. Kami siap mendengarkan dan membantu mewujudkannya.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <a className="nav-cta" href="https://wa.me/6285790565666">WhatsApp: +62 857-9056-5666</a>
          <a className="btn-ghost" href="mailto:halo@webcraft.id">halo@webcraft.id</a>
        </div>
      </div>
      <CtaSection />
    </div>
  );
}

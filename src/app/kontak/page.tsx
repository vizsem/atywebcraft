import { CtaSection } from "@/components/sections/CtaSection";

export default function KontakPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-4">
        <h1 className="text-5xl font-bold font-syne mb-6">Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Berdiskusi</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Punya ide luar biasa? Jangan ragu untuk menghubungi kami. Kami siap mendengarkan dan membantu mewujudkannya.
        </p>
      </div>
      <CtaSection />
    </div>
  );
}

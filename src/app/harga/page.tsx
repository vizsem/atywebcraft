import { PricingSection } from "@/components/sections/PricingSection";

export default function HargaPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-4">
        <h1 className="text-5xl font-bold font-syne mb-6">Investasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital Anda</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Harga transparan tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan fase pertumbuhan bisnis Anda saat ini.
        </p>
      </div>
      <PricingSection />
    </div>
  );
}

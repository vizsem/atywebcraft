import { ServicesSection } from "@/components/sections/ServicesSection";

export default function LayananPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-12">
        <h1 className="text-5xl font-bold font-syne mb-6">Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital Kami</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Dari konsep hingga peluncuran, kami menyediakan layanan end-to-end untuk memastikan bisnis Anda sukses di dunia digital.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}

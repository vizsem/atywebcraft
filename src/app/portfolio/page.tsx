import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-4">
        <h1 className="text-5xl font-bold font-syne mb-6">Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Terbaik Kami</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Lihat bagaimana kami membantu berbagai industri bertransformasi melalui solusi digital yang cerdas dan desain yang menawan.
        </p>
      </div>
      <PortfolioSection />
    </div>
  );
}

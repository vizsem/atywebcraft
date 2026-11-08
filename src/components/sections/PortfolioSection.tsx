"use client";

import { useState } from "react";
import { ExternalLink, Layers } from "lucide-react";

interface Project {
  name: string;
  title: string;
  description: string;
  category: "Website" | "Aplikasi Mobile" | "Sistem & POS";
  tags: string[];
  url: string;
  color: string;
}

const projects: Project[] = [
  {
    name: "iCentral",
    title: "Servis iPhone Kediri",
    description: "Website layanan servis iPhone dengan katalog perbaikan, estimasi harga, dan konsultasi WhatsApp terintegrasi.",
    category: "Website",
    tags: ["Next.js", "Tailwind CSS", "SEO", "WhatsApp API"],
    url: "https://icentral.aty0.com",
    color: "linear-gradient(135deg,#111827,#2563eb)",
  },
  {
    name: "Laundrix",
    title: "Sistem Manajemen Laundry",
    description: "Platform operasional laundry cerdas dengan POS kasir, tracking pakaian, inventori, laporan laba-rugi, dan multi-outlet.",
    category: "Sistem & POS",
    tags: ["React", "Node.js", "POS Kasir", "Multi-Cabang"],
    url: "https://laundrix.aty0.com",
    color: "linear-gradient(135deg,#0f766e,#22c55e)",
  },
  {
    name: "Silsila+",
    title: "Platform Silsilah Keluarga",
    description: "Aplikasi cross-platform untuk menyusun pohon keluarga digital, absensi pertemuan tahunan, dan arsip riwayat anggota.",
    category: "Aplikasi Mobile",
    tags: ["Flutter", "Android & iOS", "Cloud Storage"],
    url: "https://silsila.aty0.com",
    color: "linear-gradient(135deg,#7c3aed,#ec4899)",
  },
  {
    name: "CulinaryOS",
    title: "Operating System Bisnis Kuliner",
    description: "Sistem restoran all-in-one dengan QR order meja, POS kasir, Kitchen Display System (KDS), dan analitik menu terlaris.",
    category: "Sistem & POS",
    tags: ["Next.js", "QR Order", "Kitchen Display", "POS"],
    url: "https://culineryos.aty0.com",
    color: "linear-gradient(135deg,#ea580c,#facc15)",
  },
  {
    name: "ServixPro",
    title: "Manajemen Toko Servis Elektronik",
    description: "Platform digital untuk mengelola nota servis, stok sparepart, cabang, komisi teknisi, katalog, dan tracking progres perbaikan.",
    category: "Sistem & POS",
    tags: ["React", "Inventory", "Nota Digital", "Tracking"],
    url: "https://servixpro.aty0.com",
    color: "linear-gradient(135deg,#0f172a,#0e7490)",
  },
  {
    name: "AtayaToko",
    title: "Grosir Sembako Online",
    description: "Toko online sembako dengan harga grosir kompetitif, katalog produk realtime, keranjang belanja, dan sistem kurir lokal.",
    category: "Website",
    tags: ["E-Commerce", "Katalog Online", "Payment"],
    url: "https://atayatoko.aty0.com",
    color: "linear-gradient(135deg,#b45309,#f97316)",
  },
];

const categories = ["Semua", "Website", "Aplikasi Mobile", "Sistem & POS"] as const;

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Semua") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20">
      <div className="section-tag centered inline-flex items-center gap-1.5 justify-center">
        <Layers className="w-3.5 h-3.5" /> Hasil Karya
      </div>
      <div className="section-title centered text-3xl sm:text-4xl font-bold font-display mt-2 mb-4">
        Solusi Digital yang <span className="text-gradient">Telah Beroperasi</span>
      </div>
      <p className="section-desc centered mx-auto text-muted max-w-2xl mb-8">
        Beberapa karya terpilih kami yang telah membantu bisnis klien bertransformasi, meningkatkan penjualan, dan mengotomasi alur operasional.
      </p>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === category
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-surface border border-border text-muted hover:text-text hover:border-primary/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <a
            className="portfolio-item group"
            href={project.url}
            key={project.name}
            rel="noreferrer"
            target="_blank"
          >
            <div className="portfolio-mock">
              <div className="mock-bar">
                <div className="mock-dot" style={{ background: "#ff5f57" }} />
                <div className="mock-dot" style={{ background: "#ffbd2e" }} />
                <div className="mock-dot" style={{ background: "#28c840" }} />
                <span className="text-[10px] text-muted/60 ml-2 font-mono">{project.url.replace("https://", "")}</span>
              </div>
              <div className="mock-body">
                <div className="mock-hero-block" style={{ background: project.color }}>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-black/30 text-white/90 mb-2 inline-block">
                    {project.category}
                  </span>
                  <h4>{project.name}</h4>
                </div>
                <div className="mock-row">
                  <div className="mock-col" />
                  <div className="mock-col" />
                  <div className="mock-col" />
                </div>
              </div>
            </div>

            {/* Tech Tags preview on bottom */}
            <div className="p-4 bg-surface/80 border-t border-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-card border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                Buka <ExternalLink className="w-3 h-3" />
              </span>
            </div>

            <div className="portfolio-overlay">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent3 mb-1">
                {project.category}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3 mb-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white mt-2">
                Kunjungi Web Demo <ExternalLink className="w-4 h-4 ml-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

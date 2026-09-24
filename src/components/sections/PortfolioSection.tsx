const projects = [
  {
    name: "iCentral",
    title: "Servis iPhone Kediri",
    description: "Website layanan servis iPhone dengan katalog perbaikan, estimasi harga, dan konsultasi WhatsApp.",
    url: "https://icentral.aty0.com",
    color: "linear-gradient(135deg,#111827,#2563eb)",
  },
  {
    name: "Laundrix",
    title: "Sistem Manajemen Laundry",
    description: "Platform operasional laundry dengan POS, tracking pakaian, inventori, laporan keuangan, dan multi-outlet.",
    url: "https://laundrix.aty0.com",
    color: "linear-gradient(135deg,#0f766e,#22c55e)",
  },
  {
    name: "Silsila+",
    title: "Platform Silsilah Keluarga",
    description: "Aplikasi untuk menyusun pohon keluarga, absensi tahunan, riwayat anggota, dan arsip keluarga.",
    url: "https://silsila.aty0.com",
    color: "linear-gradient(135deg,#7c3aed,#ec4899)",
  },
  {
    name: "CulinaryOS",
    title: "Operating System Bisnis Kuliner",
    description: "Sistem restoran terintegrasi dengan QR order, POS, kitchen display, inventori, analitik, dan loyalty.",
    url: "https://culineryos.aty0.com",
    color: "linear-gradient(135deg,#ea580c,#facc15)",
  },
  {
    name: "ServixPro",
    title: "Manajemen Toko Servis",
    description: "Platform untuk mengelola nota, stok sparepart, cabang, komisi teknisi, katalog, dan tracking servis.",
    url: "https://servixpro.aty0.com",
    color: "linear-gradient(135deg,#0f172a,#0e7490)",
  },
  {
    name: "AtayaToko",
    title: "Grosir Sembako Online",
    description: "Toko online sembako dengan harga grosir, katalog produk, keranjang belanja, dan pengiriman Kediri.",
    url: "https://atayatoko.aty0.com",
    color: "linear-gradient(135deg,#b45309,#f97316)",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="section-tag centered">Hasil Karya</div>
      <div className="section-title centered">Proyek Terbaru Kami</div>
      <p className="section-desc centered">
        Beberapa hasil karya terbaik kami yang telah membantu klien meningkatkan bisnis mereka di era digital.
      </p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <a
            className="portfolio-item"
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
              </div>
              <div className="mock-body">
                <div className="mock-hero-block" style={{ background: project.color }}>
                  <h4>{project.name}</h4>
                </div>
                <div className="mock-row">
                  <div className="mock-col" />
                  <div className="mock-col" />
                  <div className="mock-col" />
                </div>
              </div>
            </div>
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>Lihat proyek ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

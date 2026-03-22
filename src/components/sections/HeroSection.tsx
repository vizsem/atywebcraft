import Link from "next/link";

export function HeroSection() {
  return (
    <>
      {/*  HERO  */}
<section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-grid"></div>
  <div className="hero-content">
    <div className="hero-badge"><span></span> Inovasi Digital untuk Bisnis Anda</div>
    <h1>Solusi Website & Aplikasi<br/><span className="grad">Berkualitas Tinggi</span></h1>
    <p className="hero-sub">Kami membantu mewujudkan ide Anda menjadi produk digital yang menarik, responsif, dan siap bersaing di pasar modern. Dari web company profile hingga aplikasi mobile kompleks.</p>
    <div className="hero-actions">
      <Link href="/#kontak" className="btn-primary">🚀 Mulai Konsultasi</Link>
      <Link href="/#portfolio" className="btn-ghost">Lihat Karya Kami →</Link>
    </div>
    <div className="hero-stats">
      <div className="stat"><div className="stat-num">50<span>+</span></div><div className="stat-label">Klien Percaya</div></div>
      <div className="stat"><div className="stat-num">100<span>%</span></div><div className="stat-label">Fokus Kualitas</div></div>
      <div className="stat"><div className="stat-num">24<span>/7</span></div><div className="stat-label">Dukungan Teknis</div></div>
      <div className="stat"><div className="stat-num">5<span>+</span></div><div className="stat-label">Tahun Pengalaman</div></div>
    </div>
  </div>
</section>
    </>
  );
}

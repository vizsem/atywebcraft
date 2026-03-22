export function ServicesSection() {
  return (
    <>
      {/*  LAYANAN  */}
<section id="layanan">
  <div className="section-tag centered">Layanan Utama</div>
  <div className="section-title centered">Apa yang Kami Tawarkan?</div>
  <p className="section-desc centered">Solusi digital menyeluruh yang dirancang khusus untuk meningkatkan nilai dan performa bisnis Anda.</p>

  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">💻</div>
      <h3>Pengembangan Website</h3>
      <p>Website company profile, landing page, atau portal berita dengan desain modern, responsif, dan dioptimasi untuk SEO.</p>
    </div>
    <div className="service-card">
      <div className="service-icon">🛒</div>
      <h3>Toko Online (E-Commerce)</h3>
      <p>Platform e-commerce dengan sistem manajemen stok, keranjang belanja, dan integrasi payment gateway lokal.</p>
    </div>
    <div className="service-card">
      <div className="service-icon">📱</div>
      <h3>Aplikasi Android & iOS</h3>
      <p>Aplikasi mobile lintas platform dengan performa tinggi, UI/UX intuitif, dan siap rilis di Play Store maupun App Store.</p>
    </div>
    <div className="service-card">
      <div className="service-icon">🎨</div>
      <h3>UI/UX Design</h3>
      <p>Perancangan antarmuka pengguna yang estetik dan pengalaman pengguna yang nyaman untuk produk digital Anda.</p>
    </div>
    <div className="service-card">
      <div className="service-icon">⚙️</div>
      <h3>Custom Web Apps</h3>
      <p>Sistem informasi berbasis web seperti ERP, CRM, atau sistem kasir yang disesuaikan dengan alur kerja perusahaan.</p>
    </div>
    <div className="service-card">
      <div className="service-icon">🚀</div>
      <h3>Maintenance & SEO</h3>
      <p>Layanan pemeliharaan server berkala dan optimasi mesin pencari agar website Anda selalu aman dan mudah ditemukan.</p>
    </div>
  </div>
</section>
    </>
  );
}

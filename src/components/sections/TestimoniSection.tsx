export function TestimoniSection() {
  return (
    <>
      {/*  TESTIMONI  */}
<section id="testimoni" style={{ background: 'var(--surface)' }}>
  <div className="section-tag centered">Testimoni Klien</div>
  <div className="section-title centered">Apa Kata Mereka?</div>
  <p className="section-desc centered">Kisah sukses klien kami setelah mempercayakan pengembangan produk digitalnya kepada tim WebCraft.</p>

  <div className="testi-grid">
    <div className="testi-card">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">"Sangat puas dengan hasilnya! Aplikasi kasir yang dibuat sangat mudah digunakan oleh staf kami, dan laporan keuangannya sangat akurat."</p>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}>AR</div>
        <div>
          <div className="author-name">Andi Rizky</div>
          <div className="author-role">Owner Restoran Sedap Malam</div>
        </div>
      </div>
    </div>
    <div className="testi-card">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">"Pengerjaan website e-commerce kami selesai lebih cepat dari target. Desainnya modern dan integrasi pembayarannya sangat mulus."</p>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#11998e,#38ef7d)' }}>DH</div>
        <div>
          <div className="author-name">Dina Halim</div>
          <div className="author-role">CEO ButikKita</div>
        </div>
      </div>
    </div>
    <div className="testi-card">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">"Luar biasa! Setelah menggunakan jasa pembuatan company profile dari WebCraft, kredibilitas perusahaan kami meningkat drastis di mata klien."</p>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#f7971e,#ffd200)' }}>BP</div>
        <div>
          <div className="author-name">Budi Pratama</div>
          <div className="author-role">Direktur BinaKarya Group</div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

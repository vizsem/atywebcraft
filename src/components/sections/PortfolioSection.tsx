export function PortfolioSection() {
  return (
    <>
      {/*  PORTFOLIO  */}
<section id="portfolio">
  <div className="section-tag centered">Hasil Karya</div>
  <div className="section-title centered">Proyek Terbaru Kami</div>
  <p className="section-desc centered">Beberapa hasil karya terbaik kami yang telah membantu klien meningkatkan bisnis mereka di era digital.</p>

  <div className="portfolio-grid">
    {/* Card 1 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}>
            <h4>Toko Online<br/>Fashion</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>ButikKita E-Commerce</h3>
        <p>Website e-commerce fashion dengan integrasi payment gateway dan sistem manajemen stok otomatis.</p>
      </div>
    </div>
    {/* Card 2 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#11998e,#38ef7d)' }}>
            <h4>Aplikasi Kasir<br/>(POS)</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>SmartPOS App</h3>
        <p>Aplikasi kasir berbasis cloud untuk jaringan restoran dengan laporan penjualan real-time.</p>
      </div>
    </div>
    {/* Card 3 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#f7971e,#ffd200)' }}>
            <h4>Portal Berita<br/>Lokal</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>KediriNews.com</h3>
        <p>Portal berita daerah dengan traffic tinggi, dioptimasi penuh untuk Google News dan SEO.</p>
      </div>
    </div>
    {/* Card 4 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#fc5c7d,#6a3093)' }}>
            <h4>Company Profile<br/>Kontraktor</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>BinaKarya Group</h3>
        <p>Website company profile profesional untuk perusahaan kontraktor dengan galeri proyek interaktif.</p>
      </div>
    </div>
    {/* Card 5 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)' }}>
            <h4>Aplikasi Mobile<br/>Booking Klinik</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>SehatSelalu App (iOS & Android)</h3>
        <p>Aplikasi reservasi jadwal dokter dengan fitur pengingat jadwal dan riwayat rekam medis.</p>
      </div>
    </div>
    {/* Card 6 */}
    <div className="portfolio-item">
      <div className="portfolio-mock">
        <div className="mock-bar">
          <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
          <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
          <div className="mock-dot" style={{ background: '#28c840' }}></div>
        </div>
        <div className="mock-body">
          <div className="mock-hero-block" style={{ background: 'linear-gradient(135deg,#2c3e50,#4ca1af)' }}>
            <h4>Landing Page<br/>Sekolah</h4>
          </div>
          <div className="mock-row">
            <div className="mock-col"></div><div className="mock-col"></div>
          </div>
        </div>
      </div>
      <div className="portfolio-overlay">
        <h3>PPDB Online SMA</h3>
        <p>Sistem Pendaftaran Peserta Didik Baru (PPDB) online dengan dashboard seleksi berkas.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

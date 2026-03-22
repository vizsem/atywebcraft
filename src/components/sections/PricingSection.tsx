"use client";

import { useState } from "react";
import Link from "next/link";

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'web' | 'app'>('web');

  return (
    <>
      {/*  HARGA  */}
      <section id="harga">
        <div className="section-tag centered">Paket Harga</div>
        <div className="section-title centered">Transparan, Tanpa<br/>Biaya Tersembunyi</div>
        <p className="section-desc centered">Pilih paket website atau aplikasi mobile sesuai kebutuhan bisnis Anda.</p>

        {/*  Tab toggle  */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2.5rem 0 1rem' }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.3rem', display: 'inline-flex', gap: '0.2rem' }}>
            <button 
              onClick={() => setActiveTab('web')} 
              style={{ padding: '0.55rem 1.6rem', borderRadius: '50px', border: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', background: activeTab === 'web' ? 'var(--accent)' : 'transparent', color: activeTab === 'web' ? '#fff' : 'var(--muted)', transition: 'all .2s' }}
            >
              🌐 Website
            </button>
            <button 
              onClick={() => setActiveTab('app')} 
              style={{ padding: '0.55rem 1.6rem', borderRadius: '50px', border: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', background: activeTab === 'app' ? 'var(--accent)' : 'transparent', color: activeTab === 'app' ? '#fff' : 'var(--muted)', transition: 'all .2s' }}
            >
              📱 Aplikasi Mobile
            </button>
          </div>
        </div>

        {/*  Website Pricing  */}
        {activeTab === 'web' && (
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Landing Page</div>
              <div className="plan-price">Rp 1,5 Jt<sub>/proyek</sub></div>
              <div className="plan-desc">Cocok untuk UMKM, promosi produk, atau portofolio personal.</div>
              <ul className="plan-features">
                <li>Landing page 1 halaman (Scroll)</li>
                <li>Desain responsif & modern</li>
                <li>Integrasi tombol WhatsApp</li>
                <li>Domain .com gratis 1 tahun</li>
                <li>Hosting standar 1 tahun</li>
                <li>Revisi desain hingga 2x</li>
                <li className="off">Blog / Sistem Artikel</li>
                <li className="off">Sistem Keranjang Belanja</li>
                <li className="off">Panel Admin Custom</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-ghost">Pilih Landing Page</Link>
            </div>
            <div className="pricing-card featured">
              <div className="badge-pop">⚡ TERPOPULER</div>
              <div className="plan-name">Company Profile</div>
              <div className="plan-price">Rp 3,5 Jt<sub>/proyek</sub></div>
              <div className="plan-desc">Ideal untuk perusahaan yang membutuhkan kredibilitas digital.</div>
              <ul className="plan-features">
                <li>Website multi-halaman (hingga 8 hal)</li>
                <li>Desain custom sesuai branding</li>
                <li>Fitur Blog / Berita</li>
                <li>Optimasi SEO dasar</li>
                <li>Domain + Hosting gratis 1 tahun</li>
                <li>Revisi desain hingga 4x</li>
                <li>Integrasi Google Analytics & Maps</li>
                <li>Pelatihan cara update konten</li>
                <li className="off">Sistem Keranjang Belanja</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-primary">Pilih Company Profile</Link>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Toko Online / Custom</div>
              <div className="plan-price">Rp 7 Jt<sub>/proyek</sub></div>
              <div className="plan-desc">Solusi lengkap untuk bisnis retail atau sistem aplikasi web khusus.</div>
              <ul className="plan-features">
                <li>Sistem E-Commerce lengkap</li>
                <li>Manajemen produk, stok, & pesanan</li>
                <li>Integrasi Payment Gateway lokal</li>
                <li>Kalkulasi ongkos kirim otomatis</li>
                <li>Dashboard Admin interaktif</li>
                <li>Revisi desain hingga 7x</li>
                <li>Priority support 3 bulan pertama</li>
                <li>Laporan penjualan otomatis</li>
                <li>Setup Facebook Pixel / Tiktok Pixel</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-ghost">Pilih Toko Online</Link>
            </div>
          </div>
        )}

        {/*  App Pricing  */}
        {activeTab === 'app' && (
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">App Basic</div>
              <div className="plan-price">Rp 8 Jt<sub>/proyek</sub></div>
              <div className="plan-desc">Aplikasi MVP (Minimum Viable Product) untuk validasi ide bisnis.</div>
              <ul className="plan-features">
                <li>Pilih salah satu: Android / iOS</li>
                <li>Hingga 5 halaman utama</li>
                <li>Fitur Login & Registrasi user</li>
                <li>Koneksi REST API dasar</li>
                <li>Notifikasi Push dasar</li>
                <li>Bantuan publish ke App Store / Play Store</li>
                <li>Revisi desain hingga 3x</li>
                <li className="off">Cross-platform (Android + iOS)</li>
                <li className="off">Admin Dashboard Web</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-ghost">Pilih App Basic</Link>
            </div>
            <div className="pricing-card featured">
              <div className="badge-pop">🔥 PALING DIMINATI</div>
              <div className="plan-name">App Standard</div>
              <div className="plan-price">Rp 18 Jt<sub>/proyek</sub></div>
              <div className="plan-desc">Aplikasi fungsional lengkap yang bisa diakses di Android & iOS.</div>
              <ul className="plan-features">
                <li>Cross-platform (Android + iOS) dengan Flutter</li>
                <li>Hingga 15 halaman utama</li>
                <li>Desain UI/UX Custom & Premium</li>
                <li>Integrasi API pihak ketiga (Maps, dsb)</li>
                <li>Push notification & Fitur Chat</li>
                <li>Publish ke Play Store & App Store</li>
                <li>Revisi desain hingga 5x</li>
                <li>Admin Dashboard Web sederhana</li>
                <li className="off">Payment Gateway Terintegrasi</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-primary">Pilih App Standard</Link>
            </div>
            <div className="pricing-card">
              <div className="plan-name">App Enterprise</div>
              <div className="plan-price">Mulai Rp 35 Jt</div>
              <div className="plan-desc">Sistem aplikasi kompleks yang dirancang khusus untuk skala besar.</div>
              <ul className="plan-features">
                <li>Cross-platform (Android + iOS)</li>
                <li>Jumlah halaman & fitur disesuaikan</li>
                <li>Integrasi Payment Gateway & E-Wallet</li>
                <li>Fitur kompleks: Real-time tracking, IoT</li>
                <li>Publish VIP ke kedua platform</li>
                <li>Admin Dashboard Web komprehensif</li>
                <li>Revisi prioritas selama masa dev</li>
                <li>Priority support & Maintenance kontrak</li>
                <li>Penyerahan Source Code penuh</li>
              </ul>
              <Link href="/#kontak" className="btn-plan btn-plan-ghost">Pilih App Enterprise</Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

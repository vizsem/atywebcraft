import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo flex items-center gap-3">
            <Image src="/aty0-logo.svg" alt="ATY0" width={48} height={48} />
            <div>
              <div className="font-semibold">ATY0<span style={{ color: "var(--accent3)" }}>.</span></div>
              <p className="mt-2">Studio pembuatan website & aplikasi mobile profesional. Kami membantu bisnis hadir dan berkembang di dunia digital.</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h4>Layanan</h4>
          <ul>
            <li><Link href="/#layanan">Landing Page</Link></li>
            <li><Link href="/#layanan">Website Perusahaan</Link></li>
            <li><Link href="/#layanan">Toko Online</Link></li>
            <li><Link href="/#mobile-app">Aplikasi Android</Link></li>
            <li><Link href="/#mobile-app">Aplikasi iOS</Link></li>
            <li><Link href="/#layanan">SEO & Optimasi</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><Link href="/#mobile-app">Aplikasi Mobile</Link></li>
            <li><Link href="/#proses">Cara Kerja</Link></li>
            <li><Link href="/#portfolio">Portfolio</Link></li>
            <li><Link href="/#harga">Paket Harga</Link></li>
            <li><Link href="/#testimoni">Testimoni</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Kontak</h4>
          <ul>
            <li><Link href="https://wa.me/6285790565666">📱 +62 857-9056-5666</Link></li>
            <li><Link href="#">✉️ halo@webcraft.id</Link></li>
            <li><Link href="#">📍 Kediri, Jawa Timur</Link></li>
            <li><Link href="#">🕐 Senin–Sabtu, 08–17 WIB</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WebCraft Studio. All rights reserved.</p>
        <div className="footer-socials">
          <Link className="social-link" href="#" title="Instagram">IG</Link>
          <Link className="social-link" href="#" title="WhatsApp">WA</Link>
          <Link className="social-link" href="#" title="Facebook">FB</Link>
          <Link className="social-link" href="#" title="LinkedIn">LI</Link>
        </div>
      </div>
    </footer>
  );
}

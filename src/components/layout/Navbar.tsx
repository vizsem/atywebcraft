import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">WebCraft<span style={{ color: "var(--accent3)" }}>.</span></Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/#layanan">Layanan</Link></li>
        <li><Link href="/#mobile-app">Aplikasi Mobile</Link></li>
        <li><Link href="/#proses">Proses</Link></li>
        <li><Link href="/#portfolio">Portfolio</Link></li>
        <li><Link href="/#harga">Harga</Link></li>
        <li><Link href="/#testimoni">Testimoni</Link></li>
      </ul>
      <Link href="/#kontak" className="nav-cta">
        Mulai Proyek
      </Link>
    </nav>
  );
}

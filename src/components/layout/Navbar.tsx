import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ATY0" width={42} height={42} priority className="rounded-lg" />
          <span className="font-semibold text-xl">ATY0<span style={{ color: "var(--accent3)" }}>.</span></span>
        </Link>
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

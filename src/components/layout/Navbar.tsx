"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const preferredTheme = savedTheme ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

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
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
        title={theme === "dark" ? "Mode terang" : "Mode gelap"}
      >
        {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </button>
      <Link href="/#kontak" className="nav-cta">
        Mulai Proyek
      </Link>
    </nav>
  );
}

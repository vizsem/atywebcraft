"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/#layanan", label: "Layanan" },
    { href: "/#mobile-app", label: "Aplikasi Mobile" },
    { href: "/#proses", label: "Proses" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#harga", label: "Harga" },
    { href: "/#testimoni", label: "Testimoni" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav>
        <div className="logo">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="ATY0" width={42} height={42} priority className="rounded-lg" />
            <span className="font-semibold text-xl">ATY0<span style={{ color: "var(--accent3)" }}>.</span></span>
          </Link>
        </div>
        <ul className="nav-links">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/blog"
                ? pathname.startsWith("/blog")
                : item.href.startsWith("/#")
                ? false // anchor links: never mark active
                : pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={isActive ? { color: "var(--accent)" } : undefined}
                  className={isActive ? "font-semibold" : ""}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            title={theme === "dark" ? "Mode terang" : "Mode gelap"}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <Link href="/#kontak" className="nav-cta hidden sm:inline-block">
            Mulai Proyek
          </Link>
          <button
            type="button"
            className="theme-toggle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[74px] z-50 bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)] p-6 md:hidden shadow-2xl">
          <ul className="flex flex-col gap-4 list-none text-base">
            {navLinks.map((item) => (
              <li key={item.href} className="border-b border-[var(--border)]/40 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-colors ${
                    (item.href === "/blog" && pathname.startsWith("/blog")) ||
                    pathname === item.href
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text)] hover:text-[var(--accent)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="nav-cta block text-center w-full py-3"
              >
                Mulai Proyek
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

import Link from "next/link";

export function FloatingWA() {
  return (
    <Link
      href="https://wa.me/6285790565666?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website"
      className="wa-float"
      title="Chat WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </Link>
  );
}

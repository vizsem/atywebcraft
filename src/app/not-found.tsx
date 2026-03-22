import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-24 text-center">
      <h1 className="text-6xl font-bold font-syne mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-muted mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

'use strict';
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-24 text-center">
      <h2 className="text-3xl font-bold font-display mb-4">Terjadi Kesalahan!</h2>
      <p className="text-muted mb-8 max-w-md">
        Maaf, terjadi kesalahan saat memuat halaman ini. Silakan coba lagi atau kembali ke beranda.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Coba Lagi
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

/**
 * ReadingProgress — progress bar di bagian atas halaman yang menunjukkan seberapa jauh
 * pembaca telah men-scroll artikel. Standard di blog profesional (Medium, Substack, dll.)
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
    };

    // Jalankan sekali saat mount supaya progress tidak 0 jika sudah scroll
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Progress membaca artikel"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 z-[100] h-[3px] w-full bg-transparent pointer-events-none"
    >
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--accent) 0%, var(--accent3, var(--accent)) 100%)",
          boxShadow: "0 0 8px var(--accent)",
        }}
      />
    </div>
  );
}


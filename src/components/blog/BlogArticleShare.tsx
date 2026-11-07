"use client";

import { useState } from "react";
import { Share2, Check, Copy, MessageCircle } from "lucide-react";

interface BlogArticleShareProps {
  title: string;
  url: string;
}

export function BlogArticleShare({ title, url }: BlogArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${url}`)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-muted uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5 mr-1">
        <Share2 className="w-3.5 h-3.5" /> Bagikan:
      </span>

      <button
        type="button"
        onClick={handleCopy}
        title="Salin tautan artikel"
        aria-label="Salin tautan artikel"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-muted hover:text-text hover:border-accent/40 transition-all"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Tersalin!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Salin</span>
          </>
        )}
      </button>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke WhatsApp"
        aria-label="Bagikan ke WhatsApp"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all text-xs"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke X (Twitter)"
        aria-label="Bagikan ke X"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-card border border-border text-muted hover:text-text hover:border-accent/40 transition-all text-xs font-bold"
      >
        𝕏
      </a>

      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke LinkedIn"
        aria-label="Bagikan ke LinkedIn"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-xs font-bold"
      >
        in
      </a>
    </div>
  );
}

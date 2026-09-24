import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function BlogRecommendationsSection() {
  const latestPosts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section className="py-24 md:py-32" aria-labelledby="artikel-terbaru-title">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              Wawasan Digital
            </p>
            <h2 id="artikel-terbaru-title" className="text-3xl md:text-5xl font-bold font-display leading-tight">
              Ide baru untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">bisnis Anda</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl">
              Baca panduan praktis tentang website, teknologi, dan strategi digital untuk membantu bisnis Anda tumbuh.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text transition-colors"
          >
            Lihat semua artikel
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 ${index === 0 ? "md:scale-[1.02]" : ""}`}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="-mx-6 -mt-6 mb-6 h-44 w-[calc(100%+3rem)] rounded-t-2xl object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted">{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
                <h3 className="text-xl font-bold font-display leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text">
                  Baca artikel
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
              <div className="mt-6 border-t border-border pt-4 text-xs text-muted">
                {post.date} · {post.author}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

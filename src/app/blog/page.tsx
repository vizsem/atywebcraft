import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital",
  description: "Temukan artikel, tips SEO, strategi digital marketing, dan tren teknologi terbaru untuk membantu bisnis Anda berkembang.",
  alternates: {
    canonical: "https://webcraft.aty0.com/blog",
  }
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      <div className="container text-center mb-16">
        <h1 className="text-5xl font-bold font-display mb-6">Wawasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Temukan tips, strategi, dan tren terbaru seputar teknologi website, pengembangan aplikasi mobile, serta digital marketing.
        </p>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-medium">{post.author}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

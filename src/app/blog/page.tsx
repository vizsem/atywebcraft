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
        <h1 className="text-5xl font-bold font-syne mb-6">Wawasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Temukan tips, strategi, dan tren terbaru seputar teknologi website, pengembangan aplikasi mobile, serta digital marketing.
        </p>
      </div>

      <div className="container max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl font-bold font-syne mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-sm font-medium">{post.author}</span>
                  <span className="text-xs text-muted">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

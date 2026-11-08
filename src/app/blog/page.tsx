import { blogPosts } from "@/lib/blog-data";
import { BlogList } from "@/components/blog/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital — ATY0 WebCraft",
  description: "Temukan artikel, tips SEO, strategi digital marketing, dan tren teknologi terbaru untuk membantu bisnis Anda berkembang bersama ATY0 WebCraft.",
  alternates: {
    canonical: "https://www.aty0.com/blog",
  }
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-28 min-h-[70vh]">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }} className="text-center mb-12">
        <h1 className="text-5xl font-bold font-display mb-6">Wawasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital</span></h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Temukan tips, strategi, dan tren terbaru seputar teknologi website, pengembangan aplikasi mobile, serta digital marketing.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}

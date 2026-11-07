"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));
    return ["Semua", ...unique];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
          {categories.slice(0, 7).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface border border-border text-muted hover:text-text hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Cari topik atau artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-full text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Result Count */}
      <div className="text-xs text-muted">
        Menampilkan {filteredPosts.length} dari {posts.length} artikel
      </div>

      {/* Grid Articles */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-surface border border-border rounded-2xl">
          <p className="text-muted text-lg">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("Semua");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 text-sm text-primary hover:underline font-medium"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {post.image && (
                  <div className="w-full h-48 overflow-hidden bg-secondary">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted">
                <span className="font-medium text-text">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}


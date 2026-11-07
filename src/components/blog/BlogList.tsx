"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 9; // Standar industri: 9 artikel (3 baris x 3 kolom di desktop, simetris dan rapi)

export function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));
    return ["Semua", ...unique];
  }, [posts]);

  // Reset ke halaman 1 setiap kali kategori atau pencarian berubah
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

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

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (containerRef.current) {
      const offsetTop = containerRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Generate page numbers with ellipsis for cleaner look
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div ref={containerRef} className="space-y-8 scroll-mt-24">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
          {categories.slice(0, 8).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
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
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-full text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Result Count and Current Page info */}
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          Menampilkan {paginatedPosts.length > 0 ? (currentPage - 1) * POSTS_PER_PAGE + 1 : 0}–
          {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} dari {filteredPosts.length} artikel
        </span>
        {totalPages > 1 && (
          <span>Halaman {currentPage} dari {totalPages}</span>
        )}
      </div>

      {/* Grid Articles */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-surface border border-border rounded-2xl">
          <p className="text-muted text-lg">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
          <button
            type="button"
            onClick={() => {
              handleCategoryChange("Semua");
              handleSearchChange("");
            }}
            className="mt-4 px-4 py-2 text-sm text-primary hover:underline font-medium"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
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
                    <h2 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2 text-text">
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav aria-label="Navigasi Halaman Blog" className="pt-8 pb-4 flex justify-center items-center gap-1.5 sm:gap-2">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Halaman sebelumnya"
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface border border-border text-muted hover:text-text hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Page Number Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {pageNumbers.map((page, idx) => {
              if (page === "...") {
                return (
                  <span key={`dots-${idx}`} className="px-2 py-1 text-xs text-muted">
                    ...
                  </span>
                );
              }
              const pageNum = page as number;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-surface border border-border text-muted hover:text-text hover:border-primary/40"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Halaman selanjutnya"
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface border border-border text-muted hover:text-text hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}


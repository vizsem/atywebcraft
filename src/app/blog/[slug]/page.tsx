import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, ListOrdered, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { BlogArticleShare } from "@/components/blog/BlogArticleShare";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import type { Metadata } from "next";

// Generate dynamic metadata for SEO based on blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${post.title} — ATY0 WebCraft`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
    alternates: {
      canonical: `https://www.aty0.com/blog/${post.slug}`,
    }
  };
}

// Generate static parameters for all known blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract Table of Contents from <h2> tags and inject scroll IDs
  const headings: { id: string; text: string }[] = [];
  let sectionIndex = 1;
  const processedContent = post.content.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    const id = `bagian-${sectionIndex++}`;
    headings.push({ id, text });
    return `<h2 id="${id}" class="scroll-mt-28">${text}</h2>`;
  });

  // Key Takeaways — daftar heading artikel sebagai poin utama (dinamis, bukan hardcoded)
  const keyTakeaways = headings.slice(0, 5);

  // Related articles (matching category first)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://www.aty0.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.aty0.com/blog"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.aty0.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="blog-article container max-w-4xl min-h-[70vh]">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-text transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-text transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{post.category}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Semua Artikel
        </Link>
        
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 leading-[1.18] text-text">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5 border-y border-border">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-cyan-400 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-xs font-bold text-text">
                  AW
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm text-text">{post.author}</div>
                <div className="text-xs text-muted">Editorial Team • Kediri, ID</div>
              </div>
            </div>

            <BlogArticleShare
              title={post.title}
              url={`https://www.aty0.com/blog/${post.slug}`}
            />
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-2xl bg-surface">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              width={896}
              height={504}
              className="w-full aspect-[16/9] object-cover"
              priority
              unoptimized={post.image.startsWith("http")}
            />
            {post.imageAlt && (
              <p className="px-4 py-2.5 text-xs text-center text-muted bg-card/60 border-t border-border/40">
                {post.imageAlt}
              </p>
            )}
          </div>
        )}

        {/* Key Takeaways Box */}
        <div className="mb-10 p-6 md:p-7 rounded-2xl bg-card border border-border/80 shadow-md">
          <div className="flex items-center gap-2 mb-4 text-accent font-display font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Yang Akan Anda Pelajari
          </div>
          {keyTakeaways.length > 0 ? (
            <ul className="space-y-2">
              {keyTakeaways.map((h) => (
                <li key={h.id} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                  <a href={`#${h.id}`} className="hover:text-accent transition-colors">{h.text}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm md:text-base text-muted leading-relaxed">{post.excerpt}</p>
          )}
        </div>

        {/* Table of Contents (Daftar Isi) */}
        {headings.length > 0 && (
          <div className="mb-12 p-6 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-2 mb-4 font-display font-bold text-base text-text">
              <ListOrdered className="w-4 h-4 text-accent" /> Daftar Isi Artikel
            </div>
            <ol className="grid gap-2 text-sm">
              {headings.map((h, i) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="inline-flex items-center gap-2.5 text-muted hover:text-accent transition-colors py-0.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{h.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Article Body Content */}
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />

        {/* Mid/Bottom In-Article CTA Banner */}
        <div className="my-14 p-8 rounded-2xl bg-gradient-to-br from-card to-surface border border-accent/30 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
              Solusi Digital Terukur
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-text mb-3">
              Siap Menerapkan Strategi Ini pada Bisnis Anda?
            </h3>
            <p className="text-muted text-base max-w-2xl mb-6">
              Tim ATY0 WebCraft siap membantu menganalisis website, merancang aplikasi mobile, dan mengoptimalkan konversi bisnis Anda agar menghasilkan return maksimal.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/6285790565666?text=Halo%20ATY0%20WebCraft%2C%20saya%20tertarik%20konsultasi%20strategi%20digital%20dan%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta inline-flex items-center gap-2 py-3 px-6 text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Konsultasi Gratis via WA
              </a>
              <Link
                href="/portfolio"
                className="btn-ghost inline-flex items-center gap-1.5 py-3 px-6 text-sm"
              >
                Lihat Karya Kami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center gap-5 my-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent3 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            AW
          </div>
          <div>
            <h4 className="text-lg font-bold font-display text-text mb-1">
              {post.author}
            </h4>
            <p className="text-xs text-primary font-medium mb-2">
              Studio Teknologi & Pengembangan Web/App • Kediri, Jawa Timur
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Kami membagikan wawasan praktis seputar pembuatan website, aplikasi mobile Android & iOS, strategi konversi, serta digitalisasi UMKM di Indonesia.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Eksplorasi Lebih Lanjut
                </p>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-text">
                  Artikel Terkait Lainnya
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                Lihat Semua <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    {related.image && (
                      <div className="w-full h-36 overflow-hidden bg-secondary">
                        <Image
                          src={related.image}
                          alt={related.imageAlt || related.title}
                          width={400}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          unoptimized={related.image.startsWith("http")}
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-[11px] mb-2.5">
                        <span className="text-primary font-semibold uppercase tracking-wider">
                          {related.category}
                        </span>
                        <span className="text-muted">{related.readTime}</span>
                      </div>
                      <Link href={`/blog/${related.slug}`}>
                        <h4 className="font-bold font-display text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2 text-text">
                          {related.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-muted line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-border/40 text-[11px] text-muted flex items-center justify-between">
                    <span>{related.date}</span>
                    <span className="text-primary font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                      Baca →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

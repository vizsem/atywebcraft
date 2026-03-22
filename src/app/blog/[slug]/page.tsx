import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// Generate dynamic metadata for SEO based on blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://webcraft.aty0.com/blog/${post.slug}`,
    }
  };
}

// Generate static parameters for all known blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-24 min-h-[70vh]">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted hover:text-primary mb-8 transition-colors">
        ← Kembali ke Blog
      </Link>
      
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {post.category}
          </span>
          <span className="text-sm text-muted">{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-syne mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 py-6 border-y border-border">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-muted">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold">{post.author}</div>
            <div className="text-sm text-muted">Dipublikasikan pada {post.date}</div>
          </div>
        </div>
      </header>

      {/* Prose class for rich text formatting (you can add @tailwindcss/typography later if needed) */}
      <div 
        className="prose prose-invert max-w-none text-lg leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-text [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>strong]:text-text"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

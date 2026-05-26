import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-karta-gray bg-white shadow-sm transition-shadow hover:shadow-lg md:flex">
        <div className="flex w-full items-center justify-center bg-gradient-to-br from-karta-primary to-[#e58900] p-10 md:w-2/5 md:p-12">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-karta-text backdrop-blur-sm">
            Featured
          </span>
        </div>
        <div className="flex flex-1 flex-col p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-karta-muted">
            <span className="rounded-full bg-karta-light px-3 py-1 font-medium text-karta-primary">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold leading-snug text-karta-text group-hover:text-karta-primary md:text-3xl">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="mt-4 flex-1 text-base leading-relaxed text-karta-muted">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-karta-muted">By {post.author}</span>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-semibold text-karta-primary hover:underline"
            >
              Read article →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-karta-gray bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="h-36 bg-gradient-to-br from-karta-primary/90 to-[#e58900] transition-opacity group-hover:opacity-95" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-karta-muted">
          <span className="rounded-full bg-karta-light px-3 py-1 font-medium text-karta-primary">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-karta-text group-hover:text-karta-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-karta-muted line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-karta-gray pt-4 text-sm">
          <span className="text-karta-muted">{post.author}</span>
          <time dateTime={post.date} className="text-karta-muted">
            {formatDate(post.date)}
          </time>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-karta-primary hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

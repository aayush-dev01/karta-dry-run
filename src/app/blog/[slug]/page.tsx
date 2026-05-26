import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/Button";
import {
  blogPosts,
  formatDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const blocks = post.content.split("\n\n").filter(Boolean);
  const related = getRelatedPosts(slug);

  function renderBlock(block: string) {
    const lines = block.split("\n");
    const bullets = lines.filter((line) => line.trim().startsWith("•"));
    if (bullets.length > 0) {
      const intro = lines.filter((line) => !line.trim().startsWith("•")).join(" ");
      return (
        <div key={block.slice(0, 40)} className="mb-6">
          {intro ? <p className="mb-3 text-lg leading-relaxed">{intro}</p> : null}
          <ul className="list-disc space-y-2 pl-6">
            {bullets.map((item) => (
              <li key={item} className="leading-relaxed">
                {item.replace(/^•\s*/, "")}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <p key={block.slice(0, 40)} className="mb-6 text-lg leading-relaxed">
        {block}
      </p>
    );
  }

  return (
    <article>
      <header className="bg-karta-primary py-14 text-karta-text md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            href="/blog"
            className="text-sm font-medium opacity-90 hover:underline"
          >
            ← Back to Blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-karta-text/10 px-3 py-1 text-sm font-medium">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg opacity-90">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm opacity-85">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="max-w-none text-karta-muted">
          {blocks.map(renderBlock)}
        </div>

        <div className="mt-12 rounded-2xl border border-karta-gray bg-karta-light p-8 text-center">
          <h2 className="text-xl font-semibold text-karta-text">
            Interested in joining Karta?
          </h2>
          <p className="mt-2 text-karta-muted">
            Apply to the Karta Access Program today.
          </p>
          <div className="mt-6">
            <Button href="/apply#application-form">Apply Now</Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-karta-gray bg-karta-gray/50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-semibold text-karta-text">Related articles</h2>
            <p className="mt-2 text-karta-muted">More from {post.category}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

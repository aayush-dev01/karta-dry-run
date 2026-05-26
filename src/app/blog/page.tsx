import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/Button";
import {
  blogCategories,
  blogPosts,
  getFeaturedPost,
  getPostsByCategory,
  type BlogCategory,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, scholar stories, program updates, and events from the Karta Initiative India Foundation.",
};

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const categoryParam = params.category ?? "All";
  const activeCategory = blogCategories.includes(categoryParam as BlogCategory)
    ? (categoryParam as BlogCategory)
    : "All";

  const featured = getFeaturedPost();
  const filteredPosts = getPostsByCategory(activeCategory).filter(
    (p) => activeCategory !== "All" || p.slug !== featured.slug
  );

  return (
    <>
      <section className="bg-karta-primary py-16 text-karta-text md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Karta Initiative India Foundation
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Stories from our scholars, program updates, and news from across the
            Karta community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Link
                key={category}
                href={category === "All" ? "/blog" : `/blog?category=${category}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-karta-primary text-karta-text"
                    : "bg-white text-karta-muted ring-1 ring-karta-gray hover:text-karta-text"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {activeCategory === "All" && (
            <div className="mb-12">
              <BlogCard post={featured} featured />
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-karta-gray bg-white py-16 text-center text-karta-muted">
              No posts in this category yet. Check back soon.
            </p>
          )}

          <p className="mt-10 text-center text-sm text-karta-muted">
            Showing {filteredPosts.length + (activeCategory === "All" ? 1 : 0)} of{" "}
            {blogPosts.length} articles
          </p>
        </div>
      </section>

      <section className="border-t border-karta-gray bg-karta-light py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-semibold text-karta-text md:text-3xl">
            Ready to start your journey?
          </h2>
          <p className="mt-3 text-karta-muted">
            Apply to the Karta Access Program and get mentorship support from
            school to university.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/apply#application-form">Apply to Karta</Button>
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

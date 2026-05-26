import Link from "next/link";
import { Button } from "@/components/Button";
import { formatDate, getFeaturedPost } from "@/lib/blog";

const stats = [
  { value: "16", label: "States & Union Territories" },
  { value: "30+", label: "Partner Universities" },
  { value: "55+", label: "Karta Scholars" },
  { value: "100+", label: "Partnering Schools" },
];

const approach = [
  {
    title: "School to University Transition",
    description: "End-to-end support for Class XI & XII students over 2–3 years.",
  },
  {
    title: "Scholarship & Mentorship",
    description: "100% scholarship support, mentorship, and internships through university.",
  },
  {
    title: "Career Readiness",
    description: "Support from university to workplace and final placement.",
  },
];

export default function HomePage() {
  const featuredPost = getFeaturedPost();

  return (
    <>
      <section className="relative overflow-hidden bg-karta-light">
        <div className="absolute inset-0 bg-gradient-to-br from-karta-primary/5 via-transparent to-karta-accent/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-karta-primary">
            Karta Initiative India Foundation
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-karta-text md:text-5xl lg:text-6xl">
            Equalizing Access, Unlocking Opportunities
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-karta-muted md:text-xl">
            Ensuring access to higher education for girls, first-generation learners,
            and youth from marginalized communities in India.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/apply#application-form">Apply to Karta</Button>
            <Button href="/blog" variant="outline">
              Read Our Blog
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-karta-primary py-16 text-karta-text md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <blockquote className="font-heading text-2xl font-semibold italic md:text-3xl">
            &ldquo;POTENTIAL IS EVERYWHERE, OPPORTUNITY IS NOT&rdquo;
          </blockquote>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-karta-text/85 md:text-lg">
            We have a global mission to enable young people from low-income rural
            communities to access world-class educational and employment opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-semibold text-karta-text md:text-4xl">
            How do we do it?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-karta-muted">
            Karta&apos;s holistic approach spanning 5 to 8 years
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {approach.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-karta-gray bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-karta-primary text-sm font-bold text-karta-text">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-karta-text">{item.title}</h3>
                <p className="mt-3 text-karta-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-karta-gray py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-semibold text-karta-text">
            Educational Impact and Outreach
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-karta-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-karta-muted md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-karta-text">Latest from our blog</h2>
              <p className="mt-2 text-karta-muted">News, stories, and program updates</p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-karta-primary hover:underline"
            >
              View all posts →
            </Link>
          </div>
          <article className="mt-10 overflow-hidden rounded-2xl border border-karta-gray bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="h-2 bg-gradient-to-r from-karta-primary to-[#e58900]" />
            <div className="p-8 md:p-10">
              <span className="rounded-full bg-karta-light px-3 py-1 text-sm font-medium text-karta-primary">
                {featuredPost.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-karta-text">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-karta-primary">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="mt-3 max-w-3xl text-karta-muted">{featuredPost.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-karta-muted">
                <span>{featuredPost.author}</span>
                <span>·</span>
                <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-6 inline-block text-sm font-semibold text-karta-primary hover:underline"
              >
                Read article →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-semibold text-karta-text">Join the Karta Access Program</h2>
          <p className="mt-4 text-karta-muted">
            To become a part of the Karta Access Program, apply through our application
            page or write to{" "}
            <a
              href="mailto:karta.access@karta-initiative.org"
              className="font-medium text-karta-primary hover:underline"
            >
              karta.access@karta-initiative.org
            </a>
          </p>
          <p className="mt-2 text-sm text-karta-muted">
            *To become a Karta Scholar, one needs to be an active member of the Karta
            Access Program.
          </p>
          <div className="mt-8">
            <Button href="/apply#application-form">Start Your Application</Button>
          </div>
        </div>
      </section>
    </>
  );
}

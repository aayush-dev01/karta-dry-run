import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";
import {
  applySteps,
  eligibility,
  faqItems,
  KARTA_ACCESS_EMAIL,
  programs,
} from "@/lib/apply";

export const metadata: Metadata = {
  title: "Apply to Karta",
  description:
    "Apply to the Karta Access Program — mentorship and pathways to higher education for rural youth in India.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-karta-primary py-16 text-karta-text md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Karta Initiative India Foundation
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Apply to Karta</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Join the Karta Access Program and take the first step toward world-class
            educational opportunities.
          </p>
        </div>
      </section>

      <section className="border-b border-karta-gray bg-karta-light py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-semibold text-karta-text md:text-3xl">
            How to apply
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {applySteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-karta-gray bg-white p-6 text-center shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-karta-primary text-lg font-bold text-karta-text">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-karta-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-karta-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold text-karta-text md:text-3xl">Our programs</h2>
          <p className="mt-2 text-karta-muted">
            Karta&apos;s holistic approach spans 5 to 8 years — from school to university to
            career.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="rounded-2xl border border-karta-gray bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-karta-primary">
                  {program.for}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-karta-text">{program.name}</h3>
                <p className="mt-1 text-sm text-karta-muted">Duration: {program.duration}</p>
                <p className="mt-3 text-sm leading-relaxed text-karta-muted">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="application-form" className="scroll-mt-24 bg-karta-gray/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <aside className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-karta-text">Eligibility</h2>
              <ul className="mt-6 space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-3 text-karta-muted">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-karta-primary text-xs font-bold text-karta-text">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-karta-gray">
                <h3 className="font-semibold text-karta-text">Prefer email?</h3>
                <p className="mt-2 text-sm text-karta-muted">
                  You can also apply by writing to us directly:
                </p>
                <a
                  href={`mailto:${KARTA_ACCESS_EMAIL}`}
                  className="mt-3 inline-block text-sm font-semibold text-karta-primary hover:underline"
                >
                  {KARTA_ACCESS_EMAIL}
                </a>
                <p className="mt-4 text-xs text-karta-muted">
                  *To become a Karta Scholar, one needs to be an active member of the Karta
                  Access Program.
                </p>
              </div>
            </aside>

            <div className="rounded-2xl border border-karta-gray bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
              <h2 className="text-2xl font-semibold text-karta-text">Application form</h2>
              <p className="mt-2 text-sm text-karta-muted">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>
              <div className="mt-8">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-semibold text-karta-text md:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-karta-gray bg-white p-6"
              >
                <dt className="font-semibold text-karta-text">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-karta-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-sm text-karta-muted">
            Read stories on our{" "}
            <Link href="/blog" className="font-semibold text-karta-primary hover:underline">
              blog
            </Link>{" "}
            or return to the{" "}
            <Link href="/" className="font-semibold text-karta-primary hover:underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

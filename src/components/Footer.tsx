import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-karta-primary/30 bg-[#eeeeee]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-karta-text">
              Karta Initiative India Foundation
            </h3>
            <p className="text-sm leading-relaxed text-karta-muted">
              Equalizing access and unlocking opportunities for girls, first-generation
              learners, and youth from marginalized communities in India.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-karta-text">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-karta-muted">
              <li>
                <Link href="/blog" className="hover:text-karta-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-karta-primary">
                  Apply to Karta
                </Link>
              </li>
              <li>
                <a
                  href="https://karta-initiative.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-karta-primary"
                >
                  Official Website ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-karta-text">
              Contact
            </h4>
            <p className="text-sm text-karta-muted">
              Karta Access Program:{" "}
              <a
                href="mailto:karta.access@karta-initiative.org"
                className="text-karta-primary hover:underline"
              >
                karta.access@karta-initiative.org
              </a>
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-karta-gray pt-6 text-center text-sm text-karta-muted">
          © {new Date().getFullYear()} Karta Initiative India Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/apply", label: "Apply" },
];

const externalLinks = [
  { href: "https://karta-initiative.org.in/vision/", label: "Vision" },
  { href: "https://karta-initiative.org.in/what-karta-does/", label: "What Karta Does" },
  { href: "https://karta-initiative.org.in/team/", label: "Team" },
  { href: "https://karta-initiative.org.in/impact/", label: "Impact" },
  { href: "https://karta-initiative.org.in/donate/", label: "Donate" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-karta-primary shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/karta-logo.jpg"
            alt="Karta Initiative India Foundation"
            width={140}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-karta-text/10 text-karta-text"
                  : "text-karta-text/80 hover:text-karta-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="mx-2 h-6 w-px bg-karta-text/20" />
          {externalLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm text-karta-text/80 transition-colors hover:text-karta-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-karta-text md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-karta-text/10 bg-karta-primary px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                pathname === link.href ? "bg-karta-text/10 text-karta-text" : "text-karta-text/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-2 border-t border-karta-text/10" />
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-4 py-3 text-sm text-karta-text/80"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

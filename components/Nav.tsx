"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/explore-membership", label: "Explore Membership" },
  { href: "/list-your-property", label: "List Your Property" },
  { href: "/browse-rentals", label: "Browse Rentals" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-editorial ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] flex items-center justify-between px-6 lg:px-12 h-20">
        <Link
          href="/"
          className={`font-display text-2xl tracking-widest transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-cream-50"
          }`}
        >
          LIVIANA
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-xs uppercase tracking-widest font-sans transition-colors duration-500 ${
                  scrolled
                    ? "text-ink hover:text-cocoa"
                    : "text-cream-50 hover:text-cream-200"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className={`text-xs uppercase tracking-widest transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-cream-50"
            }`}
          >
            Login
          </Link>
          <Link
            href="/apply"
            className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? "bg-espresso text-cream-50 hover:bg-cocoa"
                : "bg-cream-50 text-ink hover:bg-cream-200"
            }`}
          >
            Apply Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`md:hidden flex flex-col gap-1.5 ${
            scrolled ? "text-ink" : "text-cream-50"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-editorial ${
          open ? "max-h-96 border-t border-cream-200 bg-cream" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm uppercase tracking-widest text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-cream-200">
            <Link
              href="/apply"
              className="btn-primary"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

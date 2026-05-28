import Link from "next/link";
import Eyebrow from "./Eyebrow";

const COLUMNS = [
  {
    heading: "Liviana",
    links: [
      { href: "/", label: "Home" },
      { href: "/explore-membership", label: "Explore Membership" },
      { href: "/list-your-property", label: "List Your Property" },
      { href: "/browse-rentals", label: "Browse Rentals" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/partnerships", label: "Partnerships" },
      { href: "/login", label: "Login" },
      { href: "/apply", label: "Apply Now" },
    ],
  },
];

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://tiktok.com", label: "TikTok" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-50">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="font-display text-5xl tracking-widest">LIVIANA</div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-50/70">
            Curated housing for traveling nurses. A community of homes,
            thoughtfully held to a higher standard.
          </p>

          <div className="mt-10">
            <Eyebrow tone="light">Contact</Eyebrow>
            <a
              href="mailto:info@liviana.com"
              className="mt-3 block font-display text-2xl tracking-wide hover:text-warm-200 transition-colors"
            >
              info@liviana.com
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading} className="md:col-span-2">
            <Eyebrow tone="light">{col.heading}</Eyebrow>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream-50/80 hover:text-cream-50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <Eyebrow tone="light">Follow</Eyebrow>
          <ul className="mt-5 space-y-3">
            {SOCIAL.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-sm text-cream-50/80 hover:text-cream-50 transition-colors inline-flex items-center gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{s.label}</span>
                  <span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cream-50/50">
            © {new Date().getFullYear()} Liviana · Est. 2025
          </p>
          <ul className="flex gap-8 font-mono text-[11px] uppercase tracking-widest text-cream-50/50">
            <li>
              <Link href="/terms" className="hover:text-cream-50">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cream-50">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-cream-50">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

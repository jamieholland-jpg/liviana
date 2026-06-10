import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import Eyebrow from "@/components/Eyebrow";
import PropertyCard, { PropertyCardData } from "@/components/PropertyCard";

/* ------------------------------------------------------------------ */
/* Placeholder data — replace imageUrl with your CMS / Supabase assets */
/* ------------------------------------------------------------------ */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=80";

const PERKS = [
  {
    eyebrow: "01 / Concierge",
    title: "Lived-in support, white-glove standard",
    body: "We ensure nurses feel supported, settled, and cared for while owners enjoy effortless management through coordinated cleaning, maintenance, and property care.",
    image:
      "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=1600&q=80",
    href: "/explore-membership#concierge",
  },
  {
    eyebrow: "02 / Residences",
    title: "An exclusive, curated rental search",
    body: "Our collection is intentionally curated and rigorously inspected to uphold a higher standard. Signature bedding, refined finishes, and a sense of belonging in every home.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    href: "/browse-rentals",
  },
  {
    eyebrow: "03 / Listing",
    title: "A trusted home for your property",
    body: "Your property is showcased within a private, professionally vetted community of nurses seeking premium, fully furnished residences.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    href: "/list-your-property",
  },
];

const REASONS = [
  {
    n: "01",
    title: "Curated, Consistent Living",
    body: "Every residence is thoughtfully inspected and held to a consistent standard so nurses can arrive knowing exactly what to expect.",
  },
  {
    n: "02",
    title: "Locations That Make Life Easier",
    body: "Homes are selected in well-connected neighborhoods near major and rural hospitals. Shorter commutes, easier routines, time back.",
  },
  {
    n: "03",
    title: "Concierge Support For Your Schedule",
    body: "Built around the realities of nursing life. From move-in to everyday support, we handle the details so you can rest.",
  },
  {
    n: "04",
    title: "A Platform Built For Nurses",
    body: "Unlike traditional rental platforms, every detail — from verified residences to thoughtful services — is designed for the way nurses live.",
  },
];

const FEATURED: PropertyCardData[] = [
  {
    slug: "mediterranean-home-botanic-gardens",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mediterranean home interior with vaulted ceilings",
    city: "Nashville",
    state: "TN",
    neighborhood: "East Edgefield",
    hospitalDistance: "1.2 mi from VUMC",
    title: "Mediterranean Home Near Botanic Gardens",
    beds: 2,
    baths: 1.5,
    sleeps: 4,
    sqft: 1180,
    amenities: ["Wifi", "Hot tub", "Pet friendly", "Workspace", "Washer/Dryer"],
    host: { name: "Kate" },
    priceMonthly: 5083,
    rating: 4.8,
    reviewCount: 12,
  },
  {
    slug: "sunnyside-home",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sunlit living room with warm wood tones",
    city: "Nashville",
    state: "TN",
    neighborhood: "Sylvan Park",
    hospitalDistance: "2.4 mi from Saint Thomas",
    title: "Sunnyside Home",
    beds: 1,
    baths: 1,
    sleeps: 2,
    sqft: 720,
    amenities: ["Wifi", "Workspace", "Pet friendly", "Parking"],
    host: { name: "Marcus" },
    priceMonthly: 2225,
    rating: 5.0,
    reviewCount: 8,
  },
  {
    slug: "historic-home-yard-crib",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Historic home kitchen with green cabinetry",
    city: "Nashville",
    state: "TN",
    neighborhood: "Germantown",
    hospitalDistance: "0.9 mi from Ascension",
    title: "Historic Home with Yard, Crib + Offices",
    beds: 1,
    baths: 1.5,
    sleeps: 3,
    sqft: 1340,
    amenities: ["Wifi", "Yard", "Crib", "Office", "Pet friendly"],
    host: { name: "Priya" },
    priceMonthly: 2225,
    rating: 5.0,
    reviewCount: 24,
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO — full-bleed, dark scrim, animated text
         ============================================================ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-espresso-900 text-cream-50">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={HERO_IMAGE}
            alt="Curated interior — Liviana residence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 scrim-bottom" />

        <div className="relative h-full mx-auto max-w-[1600px] px-6 lg:px-12 pt-32 pb-16 flex flex-col justify-end">
          <div className="max-w-3xl">
            <AnimateIn delay={0.1}>
              <Eyebrow tone="light">Membership · Est. 2025</Eyebrow>
            </AnimateIn>

            <AnimateIn delay={0.2} as="h1">
              <h1 className="mt-6 font-display font-light text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
                Curated housing
                <br />
                for nurses.
                <span className="italic text-warm-200"> Liv beyond the shift.</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p className="mt-8 max-w-xl text-base lg:text-lg leading-relaxed text-cream-50/80">
                A luxury housing and lifestyle service transforming the
                experience of traveling healthcare professionals.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/apply" className="btn-primary bg-cream-50 text-ink hover:bg-warm-200 hover:text-ink">
                  Apply for Membership
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/browse-rentals" className="btn-ghost">
                  Browse Rentals
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Bottom-corner indicator */}
          <div className="mt-16 flex items-end justify-between border-t border-cream-50/15 pt-6">
            <Eyebrow tone="light">Scroll to explore</Eyebrow>
            <Eyebrow tone="light">01 / 06</Eyebrow>
          </div>
        </div>
      </section>

      {/* ============================================================
          MEMBERSHIP PERKS — three full-height photo panels
         ============================================================ */}
      <section className="bg-espresso text-cream-50">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-24 pb-12">
          <AnimateIn>
            <Eyebrow tone="light">Membership Perks</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1} as="h2">
            <h2 className="mt-4 font-display font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1] tracking-tight max-w-4xl">
              Three pillars of a Liviana stay.
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[80vh] lg:min-h-[680px]">
          {PERKS.map((p, i) => (
            <AnimateIn key={p.eyebrow} delay={i * 0.1} className="relative group h-[70vh] lg:h-full">
              <Link href={p.href} className="block relative w-full h-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1800ms] ease-editorial group-hover:scale-105"
                />
                <div className="absolute inset-0 scrim-bottom" />
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <Eyebrow tone="light">{p.eyebrow}</Eyebrow>
                  <h3 className="mt-4 font-display font-light text-3xl lg:text-4xl leading-[1.1] text-cream-50 max-w-sm">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/75">
                    {p.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-cream-50 transition-all duration-500 group-hover:tracking-ultra">
                    Learn more
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ============================================================
          FEATURED RESIDENCES — large new property cards
         ============================================================ */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <AnimateIn>
                <Eyebrow>Available Now</Eyebrow>
              </AnimateIn>
              <AnimateIn delay={0.1} as="h2">
                <h2 className="mt-4 font-display font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tight">
                  Curated residences,
                  <br />
                  ready when you arrive.
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.2}>
              <Link href="/browse-rentals" className="btn-ghost-dark">
                Browse All
                <span aria-hidden>→</span>
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {FEATURED.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.08}>
                <PropertyCard data={p} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          REQUEST PROPERTY CONSIDERATION — dark CTA band
         ============================================================ */}
      <section className="relative h-screen min-h-[560px] flex items-center justify-center bg-espresso-900 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 scrim-radial" />

        <div className="relative text-center px-6 max-w-3xl">
          <AnimateIn>
            <Eyebrow tone="light">For Property Owners</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1} as="h2">
            <h2 className="mt-6 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              Request property
              <br />
              <span className="italic text-warm-200">consideration.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="mt-8 text-base lg:text-lg leading-relaxed text-cream-50/80 max-w-xl mx-auto">
              Homes are reviewed and accepted by application. Share your
              property details and our team will be in touch.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <Link href="/list-your-property" className="mt-12 btn-primary bg-cream-50 text-ink hover:bg-warm-200">
              Learn More
              <span aria-hidden>→</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ============================================================
          WHY NURSES LOVE LIVIANA — split full-height
         ============================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-screen bg-espresso-700">
        <div className="relative lg:col-span-6 h-[60vh] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1600&q=80"
            alt="A nurse reading at home"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-6 bg-espresso-700 text-cream-50 px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
          <AnimateIn>
            <Eyebrow tone="light">Why Nurses Love Liviana</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1} as="h2">
            <h2 className="mt-6 font-display font-light text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] tracking-tight max-w-lg">
              Designed around the
              <span className="italic text-warm-200"> realities of the shift.</span>
            </h2>
          </AnimateIn>

          <ul className="mt-12 lg:mt-16 space-y-10 lg:space-y-12 max-w-xl">
            {REASONS.map((r, i) => (
              <AnimateIn key={r.n} delay={0.1 + i * 0.08} as="li">
                <li className="grid grid-cols-[auto_1fr] gap-6 lg:gap-8 border-t border-cream-50/15 pt-6">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-cream-50/50">
                    {r.n}
                  </span>
                  <div>
                    <h3 className="font-display font-light text-2xl lg:text-[1.75rem] leading-tight">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base leading-relaxed text-cream-50/75">
                      {r.body}
                    </p>
                  </div>
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA — full-bleed photo
         ============================================================ */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-espresso-900 text-cream-50">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 scrim-radial" />

        <div className="relative text-center px-6 max-w-4xl">
          <AnimateIn>
            <Eyebrow tone="light">Begin Your Membership</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.15} as="h2">
            <h2 className="mt-6 font-display font-light text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
              Liv beyond
              <br />
              <span className="italic text-warm-200">the shift.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="mt-14 flex flex-wrap gap-4 justify-center">
              <Link href="/apply" className="btn-primary bg-cream-50 text-ink hover:bg-warm-200">
                Apply for Membership
                <span aria-hidden>→</span>
              </Link>
              <Link href="/browse-rentals" className="btn-ghost">
                Browse Rentals
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

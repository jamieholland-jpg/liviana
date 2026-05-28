"use client";

import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";

export type PropertyCardData = {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  city: string;
  state: string;
  neighborhood?: string;
  /** Optional proximity tag, e.g. "1.2 mi from VUMC" */
  hospitalDistance?: string;
  title: string;
  beds: number;
  baths: number;
  sleeps: number;
  sqft?: number;
  /** Show first 3, then "+N more". */
  amenities: string[];
  host: { name: string; avatarUrl?: string };
  priceMonthly: number;
  rating: number;
  reviewCount: number;
};

type Props = {
  data: PropertyCardData;
  priority?: boolean;
};

export default function PropertyCard({ data, priority = false }: Props) {
  const {
    slug,
    imageUrl,
    imageAlt,
    city,
    state,
    neighborhood,
    hospitalDistance,
    title,
    beds,
    baths,
    sleeps,
    sqft,
    amenities,
    host,
    priceMonthly,
    rating,
    reviewCount,
  } = data;

  const visibleAmenities = amenities.slice(0, 3);
  const moreAmenities = Math.max(0, amenities.length - 3);

  return (
    <Link
      href={`/rentals/${slug}`}
      className="group block bg-cream-50 text-ink transition-shadow duration-700 ease-editorial hover:shadow-[0_24px_60px_-30px_rgba(26,20,16,0.45)]"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden bg-espresso-700">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-105"
        />
        {/* Bottom caption strip — fades in on hover */}
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 scrim-bottom">
          <span className="font-mono text-[11px] uppercase tracking-widest text-cream-50 inline-flex items-center gap-3">
            View Residence
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-7 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Eyebrow tone="muted">
            {city}, {state}
          </Eyebrow>
          {neighborhood && (
            <>
              <span className="text-cocoa-200">·</span>
              <Eyebrow tone="muted">{neighborhood}</Eyebrow>
            </>
          )}
          {hospitalDistance && (
            <>
              <span className="text-cocoa-200">·</span>
              <Eyebrow tone="muted">{hospitalDistance}</Eyebrow>
            </>
          )}
        </div>

        <h3 className="font-display font-light text-3xl lg:text-[2rem] leading-[1.1] text-ink tracking-tight">
          {title}
        </h3>

        {/* Specs with hairline dividers */}
        <ul className="flex items-center flex-wrap gap-x-4 gap-y-2 text-ink/80">
          <Spec label="Beds" value={beds} />
          <Divider />
          <Spec label="Baths" value={baths} />
          <Divider />
          <Spec label="Sleeps" value={sleeps} />
          {sqft && (
            <>
              <Divider />
              <Spec label="Sqft" value={sqft.toLocaleString()} />
            </>
          )}
        </ul>

        {/* Amenities */}
        <ul className="flex flex-wrap gap-2">
          {visibleAmenities.map((a) => (
            <li
              key={a}
              className="border border-ink/15 px-3 py-1.5 text-[11px] uppercase tracking-widest font-sans text-ink/70"
            >
              {a}
            </li>
          ))}
          {moreAmenities > 0 && (
            <li className="px-3 py-1.5 text-[11px] uppercase tracking-widest font-sans text-ink/50">
              +{moreAmenities} more
            </li>
          )}
        </ul>

        <div className="hairline text-ink" />

        {/* Host + Price/Rating */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden bg-cocoa-200 shrink-0">
              {host.avatarUrl ? (
                <Image
                  src={host.avatarUrl}
                  alt={host.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 grid place-items-center font-display text-lg text-cream-50">
                  {host.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <Eyebrow tone="muted">Hosted by</Eyebrow>
              <span className="text-sm text-ink">{host.name}</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-mono text-sm text-ink">
              ${priceMonthly.toLocaleString()}
              <span className="text-ink/50"> / 30d</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
              ★ {rating.toFixed(1)} · {reviewCount}{" "}
              {reviewCount === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Spec({ label, value }: { label: string; value: number | string }) {
  return (
    <li className="flex items-baseline gap-1.5">
      <span className="font-display text-xl leading-none">{value}</span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
        {label}
      </span>
    </li>
  );
}

function Divider() {
  return <span className="block w-px h-3 bg-ink/20" aria-hidden />;
}

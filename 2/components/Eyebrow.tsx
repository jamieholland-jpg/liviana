import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light" | "muted";
};

/**
 * Small-caps mono label used above headlines and beside metadata.
 * The third typeface in the system — adds editorial rhythm without
 * needing more headline real estate.
 */
export default function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: Props) {
  const toneClass =
    tone === "light"
      ? "text-cream-50/70"
      : tone === "muted"
      ? "text-cocoa-400"
      : "text-ink/70";

  return (
    <span
      className={`font-mono uppercase text-[11px] tracking-ultra ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}

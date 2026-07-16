import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * The site's one primary call to action, reused verbatim (same label/intent)
 * in the hero and the inquiry banner per the copy rule: one label per intent.
 * Its own bespoke identity: solid gold fill, thin navy keyline, serif
 * small-caps label, presses down 1px into a deeper gold on activation.
 */
export function PrimaryCta({
  to = "/intake",
  children,
  className = "",
}: {
  to?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={
        "group relative inline-flex items-center justify-center border border-navy bg-gold px-8 py-4 " +
        "font-display text-[0.95rem] tracking-[0.04em] text-navy-deep transition-all duration-150 " +
        "hover:bg-gold-light active:translate-y-[1px] active:bg-[#b58f47] " +
        className
      }
    >
      {children}
    </Link>
  );
}

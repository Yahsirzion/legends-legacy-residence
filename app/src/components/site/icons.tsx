import type { SVGProps } from "react";

/**
 * Custom gold line-icon set (1.5px stroke), per CLAUDE.md §6.2: drawn as
 * inline SVG in brand colors rather than a generated raster set, so they stay
 * crisp and recolorable across light/dark sections.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 40 40",
  fill: "none" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LaurelIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path
        d="M20 33c-4-3-6-9-6-15 0-3 1-6 2-8"
        stroke="currentColor"
      />
      <path d="M20 33c4-3 6-9 6-15 0-3-1-6-2-8" stroke="currentColor" />
      {[6, 11, 16, 21, 26].map((y) => (
        <path key={`l-${y}`} d={`M14 ${y}c-3 0-5 1-6 3`} stroke="currentColor" />
      ))}
      {[6, 11, 16, 21, 26].map((y) => (
        <path key={`r-${y}`} d={`M26 ${y}c3 0 5 1 6 3`} stroke="currentColor" />
      ))}
      <path d="M20 33v3" stroke="currentColor" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path
        d="M20 5l11 4v9c0 8-5 13.5-11 17-6-3.5-11-9-11-17V9l11-4z"
        stroke="currentColor"
      />
      <path d="M20 12v16" stroke="currentColor" />
    </svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="14" cy="14" r="6" stroke="currentColor" />
      <path d="M18 18l13 13" stroke="currentColor" />
      <path d="M26 26l4-4" stroke="currentColor" />
      <path d="M29 29l4-4" stroke="currentColor" />
    </svg>
  );
}

export function TorchIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path
        d="M20 6c2 3 4 5 4 8a4 4 0 01-8 0c0-3 2-5 4-8z"
        stroke="currentColor"
      />
      <path d="M16 18h8v3h-8z" stroke="currentColor" />
      <path d="M17 21h6l1 5h-8l1-5z" stroke="currentColor" />
      <path d="M14 34h12" stroke="currentColor" />
      <path d="M16 26v8" stroke="currentColor" />
      <path d="M24 26v8" stroke="currentColor" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props} aria-hidden="true">
      <path
        d="M7 3h3l1.5 4.5-2 1.5a12 12 0 006 6l1.5-2L21 14v3a2 2 0 01-2 2C11.5 19 5 12.5 5 5a2 2 0 012-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" />
      <path d="M4 6.5l8 6.5 8-6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

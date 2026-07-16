import { PhoneIcon, MailIcon } from "./icons";

export const PHONE_DISPLAY = "518-849-8008";
export const PHONE_TEL = "tel:+15188498008";
export const EMAIL = "info@legendslegacyresidence.com";
export const MAILTO = `mailto:${EMAIL}`;

/**
 * Phone/email are their own quiet CTA identity: plain text link with an icon,
 * gold underline on hover, deliberately no button chrome so they never
 * compete with the one gold PrimaryCta on the page.
 */
export function PhoneLink({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-cream" : "text-navy";
  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center gap-2 font-body text-base underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-gold ${color} ${className}`}
    >
      <PhoneIcon className="h-4 w-4 text-gold" />
      {PHONE_DISPLAY}
    </a>
  );
}

export function EmailLink({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-cream" : "text-navy";
  return (
    <a
      href={MAILTO}
      className={`inline-flex items-center gap-2 font-body text-base underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-gold ${color} ${className}`}
    >
      <MailIcon className="h-4 w-4 text-gold" />
      {EMAIL}
    </a>
  );
}

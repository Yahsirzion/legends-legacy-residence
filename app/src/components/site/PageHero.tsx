import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-[1140px] px-6 py-20 md:py-24">
        {eyebrow ? <p className="eyebrow eyebrow--on-navy">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-[24ch] font-display text-4xl leading-tight text-gold md:text-5xl">
          {title}
        </h1>
        <span className="rule-double rule-double--light mt-6" aria-hidden="true" />
        {subtitle ? (
          <p className="mt-6 max-w-[60ch] text-lg text-cream/90">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}

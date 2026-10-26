import { Link } from "@tanstack/react-router";

/**
 * The veteran programme kept visible on the home page but clearly pending, so
 * a family researching placement sees it is coming rather than concluding it
 * is gone. Mission statement is the client's approved wording (CLAUDE.md §3),
 * rendered verbatim.
 */
export function VeteransComingSoon() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      />
      <div className="relative mx-auto max-w-[1140px] px-6 py-24">
        <p className="eyebrow eyebrow--on-navy">Veteran Residence: Coming Soon</p>
        <p className="mt-8 max-w-[52ch] font-display text-2xl leading-snug text-cream md:text-4xl">
          The respect they earned.
          <br />
          <span className="ml-4 text-gold-light md:ml-8">The home they deserve.</span>
        </p>
        <span className="rule-double rule-double--light mt-8" aria-hidden="true" />
        <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-cream/85">
          Our mission is to serve those who served us. At Legends Legacy
          Residence, we cultivate a community where every veteran&rsquo;s story
          is honored, their legacy is celebrated, and their daily life is
          supported with compassionate, expert care in a place they are proud
          to call home.
        </p>
        <p className="mt-8 max-w-[62ch] text-base text-gold-light">
          The home is still in preparation. Intake is open now, and applying
          early puts you in line for a place when the doors open.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/intake"
            className="inline-flex border border-gold bg-gold px-6 py-3 font-display text-sm tracking-[0.03em] text-navy-deep transition-colors hover:bg-gold-light active:translate-y-px"
          >
            Begin Your Intake
          </Link>
          <Link
            to="/residence"
            className="font-body text-sm font-semibold text-cream/90 underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
          >
            See the veteran residence
          </Link>
        </div>
      </div>
    </section>
  );
}

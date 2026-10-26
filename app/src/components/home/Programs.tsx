import { Link } from "@tanstack/react-router";

/**
 * The home page's orientation point: two programs, said plainly, so a visitor
 * knows within seconds which one is theirs. Community Reentry leads; the
 * veteran residence is present but marked as not yet open, per CLAUDE.md
 * §7.1b (nothing may imply people already live there).
 */
export function Programs() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1140px] px-6 py-20">
        <h2 className="font-display text-2xl text-navy md:text-3xl">Our residences</h2>
        <span className="rule-double mt-5" aria-hidden="true" />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="flex flex-col border border-gold/50 bg-white p-8">
            <p className="eyebrow">Long Island, New York</p>
            <h3 className="mt-4 font-display text-2xl text-navy">
              Community Reentry Transitional Residence
            </h3>
            <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-navy/90">
              Safe, stable housing for people returning home after
              incarceration, in a structured and compassionate environment
              built around dignity and a clear path forward.
            </p>
            <Link
              to="/reentry"
              className="mt-8 inline-flex self-start border border-navy bg-navy px-6 py-3 font-body text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-navy-deep active:translate-y-px"
            >
              Learn about this residence
            </Link>
          </article>

          <article className="flex flex-col border border-navy/15 bg-cream p-8">
            <p className="eyebrow">Upstate New York</p>
            <h3 className="mt-4 font-display text-2xl text-navy">
              Veteran Residence
            </h3>
            <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-navy/55">
              Coming Soon
            </p>
            <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-navy/80">
              Veteran-focused shared housing where residents keep their own
              routines and their full rights as tenants. The home is still in
              preparation, and intake is open now for a place when it opens.
            </p>
            <Link
              to="/residence"
              className="mt-8 inline-flex self-start border border-navy/50 px-6 py-3 font-body text-sm font-semibold tracking-wide text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream active:translate-y-px"
            >
              See the veteran residence
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

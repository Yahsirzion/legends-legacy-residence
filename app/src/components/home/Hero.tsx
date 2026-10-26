import { PrimaryCta } from "../site/PrimaryCta";
import { PhoneLink } from "../site/ContactLinks";

/**
 * Organization-level hero. The confirmed veterans tagline ("The respect they
 * earned. The home they deserve.") is not used here any more, because the home
 * page now fronts two programs and that line speaks only to one; it leads the
 * veteran residence page instead, so the client's confirmed wording is kept
 * where it belongs. "A place to call home" is drawn from the client's own
 * reentry copy and reads true for both residences.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-25 md:w-2/3"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          maskImage: "linear-gradient(to right, transparent, black 35%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 35%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1140px] flex-col gap-6 px-6 py-24 md:py-32">
        <p className="fade-up-mount eyebrow eyebrow--on-navy">
          Supportive Housing in New York
        </p>
        <h1 className="fade-up-mount max-w-[15ch] font-display text-4xl leading-[1.1] text-gold md:text-6xl">
          A place to call home.
        </h1>
        <span className="rule-double fade-up-mount" aria-hidden="true" />
        <p className="fade-up-mount max-w-[46ch] text-lg text-cream/90">
          Legends Legacy Residence runs transitional housing in New York. Our
          Community Reentry Transitional Residence serves Long Island. Our
          veteran residence in upstate New York is coming soon.
        </p>
        <div className="fade-up-mount mt-2 flex flex-wrap items-center gap-6">
          <PrimaryCta to="/reentry">Community Reentry</PrimaryCta>
          <PhoneLink tone="light" />
        </div>
      </div>
    </section>
  );
}

import { PrimaryCta } from "../site/PrimaryCta";
import { PhoneLink } from "../site/ContactLinks";

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
        <p className="fade-up-mount eyebrow eyebrow--on-navy">Opening Soon</p>
        <h1 className="fade-up-mount max-w-[16ch] font-display text-4xl leading-[1.1] text-gold md:text-6xl">
          The respect they earned.
          <br />
          <span className="ml-4 text-gold-light md:ml-10">The home they deserve.</span>
        </h1>
        <span className="rule-double fade-up-mount" aria-hidden="true" />
        <p className="fade-up-mount max-w-[42ch] text-lg text-cream/90">
          Intake is open. Begin your application now, and be among the first
          residents when we open our doors.
        </p>
        <div className="fade-up-mount mt-2 flex flex-wrap items-center gap-6">
          <PrimaryCta to="/intake">Begin Your Intake</PrimaryCta>
          <PhoneLink tone="light" />
        </div>
      </div>
    </section>
  );
}

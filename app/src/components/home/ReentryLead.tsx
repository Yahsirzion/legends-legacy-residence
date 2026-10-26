import { Link } from "@tanstack/react-router";
import { PhoneLink } from "../site/ContactLinks";

/**
 * Reentry content brought onto the home page so the program leads rather than
 * sitting one click away. Quote and pillar copy are the client's own, matching
 * the /reentry page word for word (em dash set as a comma per site style).
 */
const PILLARS = [
  {
    title: "Safe & Stable Housing",
    body: "A secure, welcoming space to call home while you establish your foundation.",
  },
  {
    title: "Dignity & Support",
    body: "A community environment that honors your journey and reinforces your personal goals.",
  },
  {
    title: "Clear Path Forward",
    body: "Guidance and local resources to help you step confidently into employment, stability, and long-term security.",
  },
] as const;

export function ReentryLead() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-20">
        <blockquote className="max-w-[46ch] border-l-2 border-gold pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
          Your past doesn&rsquo;t define your future, and coming home is just
          the beginning.
        </blockquote>

        <p className="mt-10 max-w-[65ch] text-[0.98rem] leading-relaxed text-navy/90">
          Every individual returning home after incarceration deserves the
          opportunity to move forward with dignity, respect, and renewed
          purpose. Our community reentry residence on Long Island provides more
          than just a roof overhead.
        </p>

        <dl className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-t border-gold/40 pt-5">
              <dt className="font-display text-xl text-navy">{pillar.title}</dt>
              <dd className="mt-3 text-[0.98rem] leading-relaxed text-navy/90">
                {pillar.body}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex flex-col gap-5 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] text-[0.98rem] text-navy/80">
            Ready to take the first step? Reach out to learn more about
            residency and support.
          </p>
          <div className="flex flex-col gap-4 sm:items-end">
            <Link
              to="/reentry"
              className="inline-flex self-start border border-gold bg-gold px-6 py-3 font-display text-sm tracking-[0.03em] text-navy-deep transition-colors hover:bg-gold-light active:translate-y-px sm:self-auto"
            >
              Community Reentry
            </Link>
            <PhoneLink />
          </div>
        </div>
      </div>
    </section>
  );
}

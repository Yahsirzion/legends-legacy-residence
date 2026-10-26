import { Link } from "@tanstack/react-router";

/**
 * Sits at the top of the veteran housing pages while that program is still in
 * preparation, so a family reading the amenities understands they describe a
 * residence that has not opened yet, and has somewhere to go in the meantime.
 */
export function ComingSoonBanner() {
  return (
    <aside className="border-b border-gold/30 bg-gold/15">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-2 px-6 py-5">
        <p className="eyebrow">Coming Soon</p>
        <p className="max-w-[72ch] text-[0.98rem] leading-relaxed text-navy/90">
          Our veteran residence in upstate New York is still in preparation, so
          nobody lives here yet. Intake is open, and applying now puts you in
          line for a place when the doors open. Our{" "}
          <Link
            to="/reentry"
            className="underline decoration-gold underline-offset-4 hover:text-flame-purple"
          >
            Community Reentry Transitional Residence
          </Link>{" "}
          on Long Island is a separate program.
        </p>
      </div>
    </aside>
  );
}

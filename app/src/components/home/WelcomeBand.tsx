/**
 * Full-bleed atmospheric band between the mission statement and "Life Here".
 * Per CLAUDE.md §5.2's dignity rule, the imagery shows the answer (the home,
 * the porch, the welcome) rather than the hardship the founder story names.
 * Licensed under the Unsplash License (free commercial use).
 */
export function WelcomeBand() {
  return (
    <section aria-label="A home and porch on a tree-lined street" className="relative bg-navy">
      <img
        src="/assets/home-welcome.jpg"
        alt="An American flag hanging from the porch of a house on a quiet, tree-lined street in warm afternoon light."
        width={1900}
        height={1000}
        decoding="async"
        className="h-[42vh] min-h-[280px] w-full object-cover md:h-[52vh]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/35 to-transparent"
      />
    </section>
  );
}

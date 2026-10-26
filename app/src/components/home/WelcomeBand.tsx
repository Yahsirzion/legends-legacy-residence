/**
 * Full-bleed atmospheric band. Per CLAUDE.md §5.2's dignity rule the imagery
 * shows the answer (keys, a door, a home) rather than the hardship the copy
 * names, and deliberately never stages a person as a resident or as someone
 * with a history they did not consent to being shown with.
 * Licensed under the Unsplash License (free commercial use).
 */
type Props = {
  src?: string;
  alt?: string;
};

export function WelcomeBand({
  src = "/assets/home-newstart.jpg",
  alt = "A hand holding keys with a house keyring, a warm lit home visible through the open doorway behind.",
}: Props) {
  return (
    <section aria-label="A new home" className="relative bg-navy">
      <img
        src={src}
        alt={alt}
        width={1700}
        height={665}
        decoding="async"
        className="h-[38vh] min-h-[240px] w-full object-cover md:h-[46vh]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/35 to-transparent"
      />
    </section>
  );
}

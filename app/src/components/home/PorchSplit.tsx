/**
 * Image + copy split placed after the honor section. Copy echoes the tenant
 * rights and autonomy themes flagged in CLAUDE.md §5.2 and draws only on the
 * amenities confirmed in §5.3, in forward-looking pre-opening voice (§7.1b).
 * Photography is licensed under the Unsplash License (free commercial use)
 * and is labeled illustrative, reusing the approved gallery phrasing (§6.4).
 */
export function PorchSplit() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <img
          src="/assets/home-porch.jpg"
          alt="A covered porch lined with wooden rocking chairs between white columns."
          width={1100}
          height={1375}
          decoding="async"
          className="w-full border border-gold/30 object-cover"
        />
        <div>
          <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">
            Your home, your routine, your rights.
          </h2>
          <span className="rule-double mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-[52ch] text-navy/90">
            Furnished private or shared bedrooms, a fully equipped kitchen, a
            living room to gather in, laundry, and space outdoors. Veterans
            manage their own meals, schedules, and healthcare appointments,
            with property management on hand when something needs attention.
          </p>
          <p className="mt-4 max-w-[52ch] text-navy/90">
            This is shared housing under a standard residential lease, not a
            clinical setting. Every resident keeps the full privacy and
            protections of a tenant under New York State law.
          </p>
          <p className="mt-8 text-sm text-navy/55">
            Photography is illustrative. Photos of the residence will be shared
            as we open our doors.
          </p>
        </div>
      </div>
    </section>
  );
}

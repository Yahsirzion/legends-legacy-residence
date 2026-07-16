export function Honor() {
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
      <div className="relative mx-auto max-w-[1140px] px-6 py-28">
        <div className="max-w-[36ch] md:ml-[10%]">
          <span className="rule-double rule-double--light" aria-hidden="true" />
          <p className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
            Empowerment, not institutionalization.
          </p>
          <p className="mt-6 text-base text-gold-light">
            To be the premier sanctuary where our nation's heroes find a
            lifetime of belonging.
          </p>
        </div>
      </div>
    </section>
  );
}

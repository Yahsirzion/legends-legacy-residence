/**
 * Client-approved disclosure text, rendered verbatim per CLAUDE.md §5.2 —
 * do not edit the wording. Repeated on About and The Residence, quiet
 * presentation: cream card, gold double-rule, small-caps eyebrow.
 */
export function LicensingDisclosure() {
  return (
    <section id="disclosure" className="bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-20">
        <div className="border border-gold/40 bg-cream p-8 md:p-12">
          <p className="eyebrow">Disclosure</p>
          <span className="rule-double mt-4" aria-hidden="true" />
          <div className="mt-6 max-w-[68ch] space-y-5 text-[0.98rem] leading-relaxed text-navy/90">
            <h2 className="font-display text-xl text-navy">
              NY Licensing &amp; Certification Disclosure: Operating Status
              and Legal Framework
            </h2>
            <p>
              Legends Legacy Residence is formally established and operating
              as a standard landlord providing standard shared housing. We do
              not operate as, nor are we licensed as, an Adult Care Facility
              (ACF), Enriched Housing Program, or medical treatment center
              under the New York State Department of Health.
            </p>
            <h3 className="font-display text-lg text-navy">
              Tenancy and Rights
            </h3>
            <p>
              All individuals residing at the property are operating as
              independent residential tenants under NY Real Property Law. The
              relationship between Legends Legacy Residence and our veteran
              residents is strictly that of a landlord and tenant.
            </p>
            <p>
              Because our residents maintain full independence and autonomy
              over their healthcare, daily routines, and personal lives, our
              facility is governed exclusively by standard residential lease
              agreements. This ensures that every veteran in our home retains
              their full rights, privacy, and protections as a standard
              tenant under New York State housing regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

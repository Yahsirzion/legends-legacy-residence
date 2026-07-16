import { PrimaryCta } from "../site/PrimaryCta";
import { PhoneLink, EmailLink } from "../site/ContactLinks";

export function InquiryBanner() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 py-16 text-center">
        <span className="rule-double" aria-hidden="true" />
        <h2 className="font-display text-2xl text-cream md:text-3xl">
          Begin the conversation today.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <PhoneLink tone="light" />
          <EmailLink tone="light" />
          <PrimaryCta to="/intake">Begin Your Intake</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

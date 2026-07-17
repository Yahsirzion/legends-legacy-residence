import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { PrimaryCta } from "../components/site/PrimaryCta";
import { StructuredData } from "../components/StructuredData";

import { SITE_URL } from "../lib/site";

const FAQS = [
  {
    q: "What should I expect after I reach out?",
    a: "A member of our team will contact you within 3 business days. That first conversation is just a conversation, there is no obligation, and we are glad to answer questions before any paperwork begins.",
  },
  {
    q: "How do I start this conversation with my parent?",
    a: "Many families start simply: sharing that a veteran-focused home is opening nearby, and asking whether they'd be open to learning more together. You do not need to have every answer before you call us. We can help you think through the next step.",
  },
  {
    q: "Will my parent lose independence by living here?",
    a: "No. Legends Legacy Residence operates as a standard landlord under a non-clinical, independent tenant model, not an institution. Residents manage their own meals, routines, and healthcare appointments, and hold the same rights and privacy as any residential tenant under New York law.",
  },
  {
    q: "What kind of home is this, exactly?",
    a: "It is veteran-focused shared housing: furnished bedrooms, shared common spaces, and a respectful, structured living environment, with support connecting to VA and community resources. It is not a licensed care facility, and we do not provide medical or clinical services.",
  },
  {
    q: "Is the home safe?",
    a: "The residence includes smoke and carbon monoxide detectors, fire extinguishers, secure entry, and regular maintenance, within a drug-free and violence-free living environment governed by house rules that keep it respectful and peaceful for everyone.",
  },
  {
    q: "What should we bring to a visit?",
    a: "Because the residence is opening soon, in-person visits are not yet scheduled. For now, bring your questions to a call, and if you are ready to begin, having your veteran's basic contact information on hand helps us follow up quickly.",
  },
] as const;

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const Route = createFileRoute("/families")({
  head: () => ({
    meta: [
      { title: "For Families: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "Answers for adult children researching veteran housing for a parent: what to expect, how to start the conversation, and what Legends Legacy Residence provides.",
      },
      { property: "og:title", content: "For Families: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/families` }],
  }),
  component: FamiliesPage,
});

function FamiliesPage() {
  return (
    <>
      <StructuredData json={FAQ_SCHEMA} />
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="For Families"
          title="Researching a home for your veteran"
          subtitle="Straightforward answers for adult children weighing this decision for a parent."
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-[820px] px-6 py-20">
            <div className="divide-y divide-gold/25">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group py-6 first:pt-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy marker:content-none">
                    {q}
                    <span
                      className="flex-none text-2xl leading-none text-navy/70 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[65ch] text-[0.98rem] leading-relaxed text-navy/85">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-deep">
          <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6 px-6 py-16 text-center">
            <p className="font-display text-2xl text-cream">
              Ready to take the next step together?
            </p>
            <PrimaryCta to="/intake">Begin Your Intake</PrimaryCta>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

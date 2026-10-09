import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { EmailLink, PhoneLink } from "../components/site/ContactLinks";

import { SITE_URL } from "../lib/site";

// Announcement page only. Program copy (who it serves, eligibility, services,
// licensing posture, timing) is NOT yet supplied by the client, and this
// program sits outside the veteran shared-housing framework the rest of the
// site documents, so nothing here describes or implies any of it. Everything
// on this page is drawn from confirmed facts: the program's name, the
// operating entity, and the published contact channels. Replace the body with
// the client's own copy when it arrives.
export const Route = createFileRoute("/reentry")({
  head: () => ({
    meta: [
      { title: "Community Reentry Transitional Residence: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "Community Reentry Transitional Residence, a program in development from Legends Legacy Residence LLC serving Long Island, NY. Contact us to learn more.",
      },
      {
        property: "og:title",
        content: "Community Reentry Transitional Residence: Legends Legacy Residence",
      },
      {
        property: "og:description",
        content:
          "Community Reentry Transitional Residence, a program in development from Legends Legacy Residence LLC serving Long Island, NY. Contact us to learn more.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/reentry` }],
  }),
  component: ReentryPage,
});

function ReentryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="In Development"
          title="Community Reentry Transitional Residence"
          subtitle="Serving Long Island, NY. A separate program from Legends Legacy Residence LLC, with details still being finalized."
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-[70ch] space-y-6 px-6 py-20 text-[0.98rem] leading-relaxed text-navy/90">
            <p>
              Legends Legacy Residence LLC is developing a Community Reentry Transitional Residence
              on Long Island, New York. It is a separate program from our veteran housing, which
              serves upstate New York. Details, including who it serves, eligibility, and
              availability, are still being finalized.
            </p>
            <p>
              We will publish the full description here once it is confirmed. In the meantime, we
              would rather answer your questions directly than leave you guessing.
            </p>
            <p>
              If you are looking for housing, work at a referring agency, or want to explore
              partnering with us on this program, please reach out. We respond within 3 business
              days.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1140px] px-6 py-16">
            <h2 className="font-display text-2xl text-navy">Ask us about this program</h2>
            <span className="rule-double mt-5" aria-hidden="true" />
            <div className="mt-8 flex flex-col gap-4 text-[1.05rem]">
              <PhoneLink />
              <EmailLink />
            </div>
            <p className="mt-10 max-w-[60ch] text-[0.95rem] text-navy/70">
              Looking for our veteran housing in upstate New York instead? The{" "}
              <a
                href="/residence"
                className="underline decoration-gold underline-offset-4 hover:text-flame-purple"
              >
                Residence
              </a>{" "}
              page describes the home, and you can{" "}
              <a
                href="/intake"
                className="underline decoration-gold underline-offset-4 hover:text-flame-purple"
              >
                begin an intake
              </a>{" "}
              at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

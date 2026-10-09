import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { EmailLink, PhoneLink } from "../components/site/ContactLinks";

import { SITE_URL } from "../lib/site";

// Body copy is the client's own (supplied 2026-09), rendered as written. The
// only change is typographic, matching how the founder story is handled on the
// About page: the two em dashes are set as a comma and a colon per site style.
// Nothing about eligibility, licensing or opening date is asserted beyond what
// the client wrote, since this program sits outside the veteran shared-housing
// framework (and its licensing disclosure) that governs the rest of the site.
const DESCRIPTION =
  "Community Reentry Transitional Residence on Long Island, NY: safe, stable housing and support for people returning home after incarceration, from Legends Legacy Residence LLC.";

export const Route = createFileRoute("/reentry")({
  head: () => ({
    meta: [
      { title: "Community Reentry Transitional Residence: Legends Legacy Residence" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "Second Chance. A Place to Call Home.",
      },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/reentry` }],
  }),
  component: ReentryPage,
});

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

function ReentryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Community Reentry Transitional Residence"
          title="Second Chance. A Place to Call Home."
          subtitle="Long Island, New York"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-[70ch] px-6 py-20">
            <blockquote className="border-l-2 border-gold pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
              Your past doesn&rsquo;t define your future, and coming home is
              just the beginning.
            </blockquote>

            <div className="mt-12 space-y-6 text-[0.98rem] leading-relaxed text-navy/90">
              <p>
                Every individual returning home after incarceration deserves
                the opportunity to move forward with dignity, respect, and
                renewed purpose. Rebuilding your life starts with having a
                safe, supportive place to land: a foundation where you can
                catch your breath, find your footing, and focus on what comes
                next.
              </p>
              <p>
                Our community reentry residence provides more than just a roof
                overhead. We offer a structured, compassionate environment
                designed to help you transition smoothly, regain independence,
                and build a stronger tomorrow.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1140px] px-6 py-20">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              Connecting the Dots to Your Future
            </h2>
            <span className="rule-double mt-5" aria-hidden="true" />
            <dl className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="border-t border-gold/40 pt-5">
                  <dt className="font-display text-xl text-navy">{pillar.title}</dt>
                  <dd className="mt-3 text-[0.98rem] leading-relaxed text-navy/90">
                    {pillar.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy">
          <div className="mx-auto max-w-[1140px] px-6 py-20">
            <p className="eyebrow eyebrow--on-navy">Your Next Chapter Starts Here</p>
            <p className="mt-6 max-w-[46ch] font-display text-2xl leading-snug text-cream md:text-4xl">
              A fresh start isn&rsquo;t about where you&rsquo;ve been; it&rsquo;s
              about where you&rsquo;re going.
            </p>
            <p className="mt-6 max-w-[58ch] text-base text-gold-light">
              Take the next steps toward a more stable future with a community
              that believes in your potential.
            </p>
            <p className="mt-10 max-w-[58ch] text-cream/85">
              Ready to take the first step? Reach out to learn more about
              residency and support.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-[1.05rem]">
              <PhoneLink tone="light" />
              <EmailLink tone="light" />
            </div>
          </div>
        </section>

        <section className="bg-cream">
          <div className="mx-auto max-w-[1140px] px-6 py-12">
            <p className="max-w-[62ch] text-[0.95rem] text-navy/70">
              This is a separate program from our veteran housing in upstate
              New York. For that residence, see{" "}
              <Link
                to="/residence"
                className="underline decoration-gold underline-offset-4 hover:text-flame-purple"
              >
                The Residence
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

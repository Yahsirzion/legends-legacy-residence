import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { LicensingDisclosure } from "../components/site/LicensingDisclosure";
import { EmailLink } from "../components/site/ContactLinks";

import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "The founder's story behind Legends Legacy Residence, our mission and vision, and how we're structured as veteran-focused shared housing in the Albany, NY area.",
      },
      { property: "og:title", content: "About: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function StoryPart({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="max-w-[65ch]">
      <h2 className="font-display text-xl text-navy">{heading}</h2>
      <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-navy/85">
        {children}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="About"
          title="The Founder's Story"
          subtitle="Legends, legacy, residence: the three words in our name, and what they mean to the people who live here."
        />

        {/* The founder story is the page spine, placed above mission/vision
            per CLAUDE.md §5.2, rendered verbatim with only the typographic
            space fix noted in the spec. */}
        <section className="bg-cream">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-16 px-6 py-20">
            <StoryPart heading="The Catalyst: A Promise to Those Who Served">
              <p>
                The vision for Legends Legacy Residence was born from a
                painful and deeply personal reality. It is a heartbreaking
                contradiction to watch family members who have proudly served
                our country reduced to sitting outside convenience stores or
                along the side of the highway, asking for spare change. These
                are men and women who sacrificed for our national security,
                yet returned home to find themselves without the most basic
                human necessities, a stable place to lay their heads and a
                safe place to shower. Witnessing this indignity firsthand made
                it clear that gratitude for our veterans must go beyond words;
                it requires actionable, sustainable housing solutions.
              </p>
            </StoryPart>

            <StoryPart heading="Frontline Expertise: Grounded in Human Dignity">
              <p>
                Passion alone is not enough to operate a successful
                residential community; it requires practical, frontline
                expertise. As a Direct Support Professional, Zaheerah McGary
                Sawyers built a career on the ground floor of human services.
                This hands-on experience provided a deep understanding of what
                it takes to support individuals with empathy, manage complex
                residential dynamics, and empower people to maintain their
                daily dignity. It instilled a core philosophy that housing is
                not just about four walls, it is about fostering an
                environment where individuals feel seen, respected, and
                capable of self-direction.
              </p>
            </StoryPart>

            <StoryPart heading="The Operational Backbone: Structured for Sustainability">
              <p>
                To turn this mission into a reality, compassion had to be
                paired with strong operational execution. Legends Legacy
                Residence LLC was established to be a robust, professionally
                managed entity. Through the joint leadership and operational
                synergy between Zaheerah and co-owner Celesta Blanch, the
                organization has the structural stability necessary to
                navigate the complexities of real estate, property
                management, and strategic growth. This partnership ensures
                that funders and community partners are investing in a
                capable, organized team that can sustain the mission for the
                long haul.
              </p>
            </StoryPart>

            <StoryPart heading="The Vision: Restoring Autonomy and Security">
              <p>
                Today, Legends Legacy Residence stands as a direct response to
                the housing gaps that leave too many veterans behind. We
                operate under a clear, non-clinical independent tenant model
                because we believe in empowerment, not institutionalization.
                By providing a stable, high-quality shared home where veterans
                manage their own meals, routines, and healthcare appointments,
                we offer more than just a roof. We provide the secure
                foundation they need to reclaim their autonomy, build peer
                support, and live with the dignity they earned.
              </p>
            </StoryPart>
          </div>
        </section>

        {/* Leadership block: names and roles drawn only from the story above. */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1140px] px-6 py-16">
            <h2 className="font-display text-xl text-navy">Leadership</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <div className="h-32 w-32 border border-gold/40 bg-cream" aria-hidden="true" />
                <p className="mt-4 font-display text-lg text-navy">
                  Zaheerah McGary Sawyers
                </p>
                <p className="text-sm text-navy/70">
                  Founder, Direct Support Professional background
                </p>
              </div>
              <div>
                <div className="h-32 w-32 border border-gold/40 bg-cream" aria-hidden="true" />
                <p className="mt-4 font-display text-lg text-navy">Celesta Blanch</p>
                <p className="text-sm text-navy/70">Co-Owner</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-navy/50">
              [PLACEHOLDER: headshots to be supplied by the client; optional]
            </p>
          </div>
        </section>

        {/* Full mission + vision, per CLAUDE.md §5.2. */}
        <section className="bg-navy">
          <div className="mx-auto max-w-[1140px] px-6 py-20">
            <p className="eyebrow eyebrow--on-navy">Mission &amp; Vision</p>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-display text-lg text-gold-light">Mission</h2>
                <p className="mt-3 font-display text-xl leading-relaxed text-cream">
                  Our mission is to serve those who served us. At Legends
                  Legacy Residence, we cultivate a community where every
                  veteran's story is honored, their legacy is celebrated, and
                  their daily life is supported with compassionate, expert
                  care in a place they are proud to call home.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg text-gold-light">Vision</h2>
                <p className="mt-3 font-display text-xl leading-relaxed text-cream">
                  To be the premier sanctuary where our nation's heroes find a
                  lifetime of belonging — ensuring their legacies are
                  eternally celebrated, their stories are preserved, and their
                  lives are enriched by the highest standard of compassionate,
                  expert care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* "Our Name" passage, new copy derived only from the themes above. */}
        <section className="bg-cream">
          <div className="mx-auto max-w-[760px] px-6 py-20 text-center">
            <h2 className="font-display text-2xl text-navy">Our Name</h2>
            <div className="mt-6 space-y-4 font-display text-xl leading-relaxed text-navy">
              <p>Legends: the veterans themselves.</p>
              <p>Legacy: the stories they carry and the ones still being written.</p>
              <p>Residence: the home that holds both.</p>
            </div>
          </div>
        </section>

        <LicensingDisclosure />

        {/* Quiet partnership closing line, per CLAUDE.md §5.2. */}
        <section className="bg-white">
          <div className="mx-auto max-w-[760px] px-6 pb-20 text-center">
            <p className="text-[0.98rem] text-navy/80">
              Legends Legacy Residence also welcomes conversations with
              funders and community partners who share this mission. Reach us
              at <EmailLink tone="dark" className="align-baseline" />.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { LicensingDisclosure } from "../components/site/LicensingDisclosure";
import { ShieldIcon, KeyIcon, LaurelIcon, TorchIcon } from "../components/site/icons";

import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/residence")({
  head: () => ({
    meta: [
      { title: "The Residence: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "What daily life looks like at Legends Legacy Residence: housing amenities, resident support, convenience, and safety for veteran-focused shared housing in the Albany, NY area.",
      },
      { property: "og:title", content: "The Residence: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/residence` }],
  }),
  component: ResidencePage,
});

const GROUPS = [
  {
    title: "Housing Amenities",
    Icon: ShieldIcon,
    items: [
      "Fully furnished private or shared bedrooms",
      "Comfortable beds with linens",
      "Clean, safe, and secure living environment",
      "Utilities included",
      "High-speed Wi-Fi",
      "Climate-controlled heating and air conditioning",
      "Laundry facilities",
      "Fully equipped kitchen",
      "Shared dining area",
      "Comfortable living room with television",
      "Clean shared bathrooms",
      "Secure entry",
      "On-site parking (if available)",
      "Outdoor sitting area or backyard",
    ],
  },
  {
    title: "Resident Support",
    Icon: LaurelIcon,
    items: [
      "Veteran-focused housing",
      "Respectful, structured living environment",
      "Housing stability support",
      "Assistance connecting with VA resources",
      "Assistance with community resources",
      "Property management available to address resident needs",
      "Intake and placement assistance",
    ],
  },
  {
    title: "Convenience",
    Icon: KeyIcon,
    items: [
      "Public transportation access",
      "Grocery stores nearby",
      "Pharmacy nearby",
      "Medical facilities nearby",
      "VA clinic or hospital access (if applicable)",
      "Employment resources nearby",
    ],
  },
  {
    title: "Safety & Security",
    Icon: TorchIcon,
    items: [
      "Smoke and carbon monoxide detectors",
      "Fire extinguishers",
      "Regular property maintenance",
      "House rules that promote a respectful, peaceful environment",
      "Drug-free and violence-free living environment",
    ],
  },
] as const;

function ResidencePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="The Residence"
          title="What life here provides"
          subtitle="Furnished, structured, and supported shared housing, built around independence rather than institutional routine."
        />

        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2">
            {GROUPS.map(({ title, Icon, items }) => (
              <div key={title} className="border border-gold/40 bg-white p-8">
                <Icon className="h-8 w-8 text-gold" />
                <h2 className="mt-4 font-display text-xl text-navy">{title}</h2>
                <ul className="mt-4 space-y-2 text-[0.95rem] text-navy/85">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery: designed "coming soon" state, no stock photography, per
            CLAUDE.md §5.3 / §6.4. */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1140px] px-6 pb-20">
            <h2 className="font-display text-2xl text-navy">Gallery</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center border border-gold/30 bg-cream"
                >
                  <LaurelIcon className="h-6 w-6 text-gold/40" />
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[55ch] text-sm text-navy/70">
              Photos of the residence will be shared as we open our doors.
            </p>
          </div>
        </section>

        <LicensingDisclosure />
      </main>
      <Footer />
    </>
  );
}

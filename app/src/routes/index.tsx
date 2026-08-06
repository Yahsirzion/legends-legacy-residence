import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { Hero } from "../components/home/Hero";
import { Mission } from "../components/home/Mission";
import { WelcomeBand } from "../components/home/WelcomeBand";
import { LifeHere } from "../components/home/LifeHere";
import { Honor } from "../components/home/Honor";
import { PorchSplit } from "../components/home/PorchSplit";
import { InquiryBanner } from "../components/home/InquiryBanner";
import { StructuredData } from "../components/StructuredData";

import { SITE_URL } from "../lib/site";

// No `address`/`geo` field on purpose: the residence is pre-opening and its
// facility location is intentionally undisclosed (CLAUDE.md §2). A
// LocalBusiness/PostalAddress schema risks a map pin reading as the facility
// address, which the client explicitly ruled out (§5.5) — Organization only.
const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Legends Legacy Residence",
      alternateName: "Legends Legacy Residence LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-mark.png`,
      description:
        "A home for veterans opening soon in the Albany, NY area, offering veteran-focused shared housing with independence, dignity, and support.",
      telephone: "+1-518-849-8008",
      email: "info@legendslegacyresidence.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Legends Legacy Residence",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legends Legacy Residence: A Home for Veterans" },
      {
        name: "description",
        content:
          "Legends Legacy Residence is a home for veterans opening soon in the Albany, NY area. Veteran-focused shared housing with dignity and support. Begin your intake today.",
      },
      { property: "og:title", content: "Legends Legacy Residence: A Home for Veterans" },
      {
        property: "og:description",
        content:
          "A home for veterans opening soon in the Albany, NY area. Begin your intake today.",
      },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <StructuredData json={SCHEMA} />
      <Header />
      <main id="main-content">
        <Hero />
        <Mission />
        <WelcomeBand />
        <LifeHere />
        <Honor />
        <PorchSplit />
        <InquiryBanner />
      </main>
      <Footer />
    </>
  );
}

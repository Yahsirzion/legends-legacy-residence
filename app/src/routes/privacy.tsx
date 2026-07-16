import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { EMAIL, PHONE_DISPLAY } from "../components/site/ContactLinks";

const SITE_URL = "https://legendslegacyresidence.higgsfield.app";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Statement: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "How Legends Legacy Residence handles the information you share through this website.",
      },
      { name: "robots", content: "index, nofollow" },
      { property: "og:title", content: "Privacy Statement: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero eyebrow="Privacy" title="Privacy Statement" />
        <section className="bg-cream">
          <div className="mx-auto max-w-[70ch] space-y-6 px-6 py-20 text-[0.98rem] leading-relaxed text-navy/90">
            <p>
              This website collects only the information you type into our
              contact and interest forms: your name, phone number, email
              address, whether you are a veteran, and your preferred contact
              time. We use it for one purpose, so a member of our team can
              contact you about housing, which we will do within 3 business
              days.
            </p>
            <p>
              We do not sell, rent, or share your information with anyone
              outside Legends Legacy Residence. It is seen only by our staff.
            </p>
            <p>
              Our full Veteran Housing Intake Form is not submitted through
              this website. You return it directly to us in person, by mail,
              by phone, or by email if you choose. Please note that standard
              email is not encrypted, so mail or phone is recommended for
              sensitive information.
            </p>
            <p>
              To ask what information we have about you, or to ask us to
              delete it, contact {EMAIL} or {PHONE_DISPLAY}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

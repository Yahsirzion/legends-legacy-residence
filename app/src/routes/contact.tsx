import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { ContactForm } from "../components/contact/ContactForm";
import { PhoneLink, EmailLink } from "../components/site/ContactLinks";

const SITE_URL = "https://legendslegacyresidence.higgsfield.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "Reach Legends Legacy Residence by phone, email, or message. A member of our team responds within 3 business days.",
      },
      { property: "og:title", content: "Contact: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="We'd like to hear from you"
          subtitle="Call, email, or send a message below. A member of our team will respond within 3 business days."
        />

        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-16 px-6 py-20 md:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-body text-sm font-semibold text-navy/70">Call</p>
                <PhoneLink tone="dark" className="mt-2 text-2xl" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-navy/70">Email</p>
                <EmailLink tone="dark" className="mt-2" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-navy/70">Mailing address</p>
                <p className="mt-2 text-navy/85">
                  69 State Street, Suite 1300
                  <br />
                  Albany, NY 12207
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

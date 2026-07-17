import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { PageHero } from "../components/site/PageHero";
import { PhoneLink, EMAIL } from "../components/site/ContactLinks";

import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/intake")({
  head: () => ({
    meta: [
      { title: "Housing Intake: Legends Legacy Residence" },
      {
        name: "description",
        content:
          "Start your Veteran Housing Intake with Legends Legacy Residence: download the intake form or call us, and hear back within 3 business days.",
      },
      { property: "og:title", content: "Housing Intake: Legends Legacy Residence" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/intake` }],
  }),
  component: IntakePage,
});

function IntakePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Housing Intake"
          title="Begin your application"
          subtitle="Two ways to start. Neither requires you to send sensitive information through this website."
        />

        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-6 py-20 md:grid-cols-2">
            <div className="flex flex-col gap-5 border border-gold/40 bg-white p-8">
              <h2 className="font-display text-2xl text-navy">Download the form</h2>
              <p className="text-[0.98rem] text-navy/80">
                [PLACEHOLDER: the branded, fillable Veteran Housing Intake
                Form PDF will be linked here once supplied by the client and
                hosted on this domain.]
              </p>
              <p className="text-[0.95rem] text-navy/80">
                Once completed, return it to us in person, by mail to 69 State
                Street, Suite 1300, Albany, NY 12207, by phone with our staff,
                or by email to {EMAIL}. Mail or phone is recommended for
                sensitive information; standard email is not encrypted, so
                email is accepted only if that is your informed choice.
              </p>
            </div>

            <div className="flex flex-col gap-5 border border-gold/40 bg-navy p-8 text-cream">
              <h2 className="font-display text-2xl text-cream">Call us</h2>
              <p className="text-[0.98rem] text-cream/85">
                We'll walk through it together in about 15 minutes.
              </p>
              <PhoneLink tone="light" className="text-2xl" />
            </div>
          </div>

          <div className="mx-auto max-w-[1140px] px-6 pb-20">
            <p className="max-w-[60ch] text-[0.95rem] text-navy/80">
              After you reach out, a member of our team will contact you
              within 3 business days. Read how we handle what you share in
              our{" "}
              <Link to="/privacy" className="underline decoration-gold underline-offset-4">
                privacy statement
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

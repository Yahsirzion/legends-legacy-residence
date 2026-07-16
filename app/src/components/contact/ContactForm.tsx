import { useState, type FormEvent } from "react";
import { EMAIL } from "../site/ContactLinks";

type Relation = "veteran" | "family" | "other";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Submits via mailto: (opens the visitor's own email client addressed to
 * info@) rather than a server-side handler, per CLAUDE.md §5.5's "mailto
 * fallback per hosting choice" option. No submission data is stored or
 * transmitted by this site itself.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState<Relation>("family");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Please share your name.";
    if (!email.trim()) nextErrors.email = "Please share an email address.";
    if (!message.trim()) nextErrors.message = "Please add a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const relationLabel =
      relation === "veteran" ? "Veteran" : relation === "family" ? "Family member" : "Other";
    const subject = `Website inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      `Email: ${email}`,
      `I am a: ${relationLabel}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-white p-8 text-center">
        <p className="font-display text-xl text-navy">Your email is ready to send.</p>
        <p className="mt-3 text-[0.95rem] text-navy/80">
          We opened your email application with your message addressed to{" "}
          {EMAIL}. Send it from there and we'll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="font-body text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="border border-navy/30 bg-white px-4 py-3 text-navy focus:border-gold"
        />
        {errors.name ? (
          <p id="contact-name-error" className="text-sm text-[#8a2f2f]">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="font-body text-sm font-semibold text-navy">
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-navy/30 bg-white px-4 py-3 text-navy focus:border-gold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-body text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="border border-navy/30 bg-white px-4 py-3 text-navy focus:border-gold"
          />
          {errors.email ? (
            <p id="contact-email-error" className="text-sm text-[#8a2f2f]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="font-body text-sm font-semibold text-navy">I am a</legend>
        <div className="flex flex-wrap gap-6">
          {(
            [
              ["veteran", "Veteran"],
              ["family", "Family member"],
              ["other", "Other"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="flex items-center gap-2 text-[0.95rem] text-navy">
              <input
                type="radio"
                name="relation"
                value={value}
                checked={relation === value}
                onChange={() => setRelation(value)}
                className="accent-gold"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="font-body text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="border border-navy/30 bg-white px-4 py-3 text-navy focus:border-gold"
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-sm text-[#8a2f2f]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/*
        A distinct identity from PrimaryCta ("Begin Your Intake" stays the
        one gold action on the site): outlined navy, fills solid on
        hover/press, so form submission reads as a secondary action next to
        the site's primary conversion CTA.
      */}
      <button
        type="submit"
        className="group relative self-start overflow-hidden border-2 border-navy px-8 py-4 font-display text-[0.95rem] tracking-[0.04em] text-navy transition-colors duration-150 hover:text-cream active:translate-y-[1px]"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-200 group-hover:translate-x-0"
        />
        <span className="relative">Send Message</span>
      </button>
    </form>
  );
}

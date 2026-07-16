import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "./nav-links";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, MAILTO } from "./ContactLinks";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1140px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo-mark.png"
                alt="Legends Legacy Residence shield emblem"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <span className="font-display text-base tracking-wide">
                Legends Legacy Residence
              </span>
            </div>
            <p className="mt-3 font-body text-xs uppercase tracking-[0.14em] text-gold">
              A Home for Veterans
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="font-body text-sm text-cream/85 hover:text-flame-purple">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-cream/85 hover:text-flame-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/intake"
                  className="font-body text-sm text-cream/85 hover:text-flame-purple"
                >
                  Housing Intake
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Reach Us</p>
            <ul className="flex flex-col gap-3 font-body text-sm text-cream/85">
              <li>
                <a href={PHONE_TEL} className="hover:text-flame-purple">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={MAILTO} className="hover:text-flame-purple">
                  {EMAIL}
                </a>
              </li>
              <li className="pt-1">
                Mailing address:
                <br />
                69 State Street, Suite 1300
                <br />
                Albany, NY 12207
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-double rule-double--light mt-12" />

        <div className="mt-6 flex flex-col gap-3 font-body text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Legends Legacy Residence LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-flame-purple">
              Privacy Statement
            </Link>
            <Link to="/about" hash="disclosure" className="hover:text-flame-purple">
              Licensing Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "./nav-links";
import { PHONE_DISPLAY, PHONE_TEL } from "./ContactLinks";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1140px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/assets/logo-mark.png"
            alt="Legends Legacy Residence shield emblem"
            className="h-11 w-11 rounded-full"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-wide text-cream">
              Legends Legacy Residence
            </span>
            <span className="font-body text-[0.7rem] uppercase tracking-[0.14em] text-gold">
              A Home for Veterans
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-sm font-medium text-cream/90 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_TEL}
            className="font-body text-sm font-medium text-cream/90 transition-colors hover:text-gold"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/intake"
            className="border border-gold bg-gold px-5 py-2.5 font-display text-sm tracking-[0.03em] text-navy-deep transition-colors hover:bg-gold-light"
          >
            Begin Your Intake
          </Link>
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 border border-gold/40 px-3 py-2 text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-body text-sm">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-gold/20 bg-navy px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block font-body text-base text-cream/90 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={PHONE_TEL} className="block font-body text-base text-cream/90 hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <Link
                to="/intake"
                className="mt-1 inline-flex border border-gold bg-gold px-5 py-2.5 font-display text-sm tracking-[0.03em] text-navy-deep"
                onClick={() => setOpen(false)}
              >
                Begin Your Intake
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

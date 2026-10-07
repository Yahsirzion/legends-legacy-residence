export const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/residence", label: "The Residence" },
  // Short label keeps the desktop header on one line; the full program name,
  // "Community Reentry Transitional Residence", is the page heading and title.
  { to: "/reentry", label: "Community Reentry" },
  { to: "/families", label: "For Families" },
  { to: "/contact", label: "Contact" },
] as const;

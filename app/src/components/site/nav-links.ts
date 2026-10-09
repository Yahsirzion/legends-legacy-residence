// `region` is the service area shown under the label in the mobile menu, so
// the two residences read as distinct programs. Kept at region level only,
// per CLAUDE.md §2: no facility address is published for either program.
// Empty string means no region line.
export const NAV_LINKS = [
  { to: "/about", label: "About", region: "" },
  { to: "/residence", label: "The Residence", region: "Upstate New York" },
  // Short label keeps the desktop header on one line; the full program name,
  // "Community Reentry Transitional Residence", is the page heading and title.
  { to: "/reentry", label: "Community Reentry", region: "Long Island, NY" },
  { to: "/families", label: "For Families", region: "" },
  { to: "/contact", label: "Contact", region: "" },
] as const;

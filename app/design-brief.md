# Design Brief — Legends Legacy Residence

Source of truth for content/brand: client's CLAUDE.md build spec (verbatim
facts, copy, and rules). This brief adapts that spec into the pipeline's
required categories. Session 1 scope: Home page only.

## Design read
Adult children researching placement for a veteran parent, and veterans
themselves, arriving anxious and skeptical. The site must read as a quietly
earned honor, not a sales pitch — dignity without solemnity, warmth without
sentimentality. Audience skews older; clarity and legibility outrank cleverness.

## Concept spine
**The commendation plaque.** The site is built like an engraved dedication —
a citation card rendered at page scale. The gold double-rule is the plaque's
inscribed border; Marcellus headlines are carved, not typed; sections read as
successive panels of one citation rather than "marketing blocks." Everything
resists urgency. Narrative spine (catalog term): **artifact/collectible.**

## Delivery tier
**Editorial.** The client brief is explicit and non-negotiable here: generous
whitespace, one navy "honor" section max, fade-up-only micro-motion (250ms
ease-out, 12px), no parallax, no auto-advancing carousels, no custom cursor,
no WebGL. This is a fixed brief constraint, not a default — the audience
includes elderly and disabled visitors (§7.5 accessibility floor is a feature,
not a checkbox). Per the pipeline's own tier definitions, editorial's wow is
typography + imagery + bespoke chrome, not a wow-catalog Tier-1 interaction —
no scroll-scrub/particle/3D technique is selected for this build; the signature
moment is the shield-and-laurel hero motif plus the gold double-rule carried
through every section.

## Locked palette
`--navy #1C2B45` (primary bg/ink) · `--navy-deep #121D30` (footer, one honor
section) · `--gold #C9A45C` (sole accent: rules, buttons, icon strokes) ·
`--gold-light #E4CE9A` (hover/highlight) · `--flame-purple #7A4E9E` (link-hover
only, never a field) · `--cream #F7F3EA` (light section bg) · `--white #FFFFFF`.
Defense: lifted directly from the client's own shield/laurel/column-torch logo,
not a generic reach — explicit brand override of the beige+brass default ban.
Theme paradigm: Quiet Premium Neutral (cream/ivory ground) alternating with
Bold Studio Solid navy for the single honor section. One accent (gold) only;
purple is a two-pixel-wide exception, hover-only, never a background field.

## Locked type
Display **Marcellus** (Google Fonts) — Roman-inscription letterforms that
literally match the logo's Greek-key/laurel/column-torch imagery; body
**Figtree** at 17px+/1.65 line-height for an older audience. Justification for
serif-as-display: genuine heritage/honor register, client-specified, not a
default reach. Small-caps eyebrow: Figtree 600, 0.12em tracking, gold,
uppercase — used at most once (the hero "Opening Soon" eyebrow) on this page,
inside the ≤2-eyebrow budget for 6 sections.

## Section plan (Home, 6 sections — no consecutive repeats)
1. **Hero** — full-bleed navy field, asymmetric split anchor (left-content /
   right cropped shield motif), composition anchor: top-left lead.
2. **Mission** — cream ground, centered-statement anchor, mission statement
   as the sole content, gold double-rule beneath.
3. **Life Here** — cream-to-white, 3-card asymmetric row (Community / Comfort
   / Care) — NOT equal-weight generic trio: staggered vertical offset + one
   card visually larger (Community leads).
4. **Honor** (the one navy section) — off-grid offset anchor, vision excerpt
   as a large pull-quote over a low-opacity laurel motif.
5. **Inquiry banner** — narrow full-width band, stacked-center anchor, phone +
   email + single CTA.
6. **Footer** — navy-deep, structured columns.
Families used: hero-split, centered-statement, asymmetric-card-row, pull-quote-
offset, banner-stack, footer-grid — 6 distinct families, zero repeats.

## Asset plan
- Hero: shield-mark motif rendered large and partially cropped, low-opacity,
  navy-on-navy-deep gradient — 2 candidate renders, no interaction pair
  (editorial tier, no scroll-scrub).
- Custom gold line-icon set (1.5px stroke): laurel, shield, key/quarters,
  torch-flame motifs for the 3 Life Here cards + inquiry banner icons.
- Logo/monogram derived from the described client mark (gold shield, Greek-key
  border, laurel wreath, classical column torch with purple-to-orange flame,
  deep navy field) + favicon crop.
- Greek-key thin repeating band asset (≤8px tall) as the section-divider
  texture, gold-on-navy and navy-on-cream variants.
- OG/cover card built from the same system.
- No stock photography anywhere (client directive). Residence gallery photos
  are a Session-2/3 "coming soon" placeholder, not part of Home.

## CTA inventory (bespoke, one identity each, one label per intent)
- **"Begin Your Intake"** (hero + inquiry banner, same label/intent reused
  intentionally per the copy rule) — solid gold fill, thin navy keyline,
  serif small-caps label, on press: 1px lift + deeper gold.
- **Phone link** (hero secondary + inquiry banner) — text-only tel: link,
  gold underline-on-hover, no button chrome — its own quiet identity distinct
  from the primary CTA.
- **Email link** (inquiry banner) — same family as phone link, no separate
  button style.

## Copy note
All facts, mission/vision text, and the primary tagline are verbatim from the
client's CLAUDE.md (§2, §3) — nothing here is invented. New copy I write
(section intros, card bodies, nav labels, meta description) avoids em/en-dash
separators, filler verbs, and invented stats per the craft floor. Client
verbatim blocks (founder story, licensing disclosure — Session 2, About page)
are the one documented exception to the em-dash ban: they render exactly as
supplied, spacing-fixed only, never edited for house style.

# Behaviors — Giang Bui Portfolio

## Interaction Model: Scroll-Driven
The site is a vertical scroll through 10 full-viewport sections. Navigation links scroll to the corresponding section (anchor scroll).

## Navbar
- **Sticky** at top, always visible
- Active page link is **bold** (font-weight 700); inactive links are weight 400
- No dropdown menus, no hamburger on mobile (Canva default)
- No scroll-triggered style changes observed on navbar itself

## Scroll Behavior
- Default browser scroll (no Lenis/Locomotive detected)
- Each section fills 100vh (768px in original)
- No scroll-snap observed (free scroll)
- Sections animate into view as you scroll — Canva's default fade-in (NOT implemented in clone; static is fine)

## Interactive Elements
- **"My Resume" button** (section 2): links externally to resume document
- **"See more" buttons**: links within page or external
- **"LET'S CONNECT!" button** (footer): likely mailto or external link
- **Video** (section 1): mp4 video with autoplay/controls

## Hover States
- Nav links: no visible hover color change observed (just cursor:pointer)
- Cards in Training section: slight shadow on hover (standard)
- "LET'S CONNECT!" button: border + text button, likely opacity change on hover

## Responsive
- Original is desktop-first at 1455px wide
- Clone should be responsive: stack content at < 768px
- At mobile: sections reduce to auto height (not forced 100vh)

## No Dark Mode
No dark/light toggle detected.

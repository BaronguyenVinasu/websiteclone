# Navbar Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/Navbar.tsx`
- **Interaction model:** static (sticky scroll)

## DOM Structure
```
<nav> (sticky top-0)
  <ul> (flex, justify-end, gap)
    <li><a>Home</a></li>        ← active (bold)
    <li><a>Key project</a></li>
    <li><a>Featured training program</a></li>
    <li><a>Certifications & Recognitions</a></li>
    <li><a>Others</a></li>
    <li><a>E-learning</a></li>
  </ul>
```

## Computed Styles

### Container `<nav>`
- backgroundColor: rgb(253, 253, 253)
- height: 48px
- display: flex
- justifyContent: flex-end
- alignItems: center
- position: sticky
- top: 0
- zIndex: 1
- borderBottom: 1px solid rgba(0, 0, 0, 0.07)
- width: 100%
- paddingRight: ~40px

### Nav links `<a>`
- fontSize: 15px
- fontFamily: Times, serif (use Playfair Display in clone)
- color: rgb(48, 66, 84)
- fontWeight: 400 (inactive) / 700 (active)
- textDecoration: none
- cursor: pointer
- gap between links: ~28px

## States & Behaviors

### Active link
- fontWeight: 700 (bold)
- Same color rgb(48, 66, 84)

### Hover
- No visible color change; cursor: pointer

## Text Content (verbatim)
- Home
- Key project
- Featured training program
- Certifications & Recognitions
- Others
- E-learning

## Responsive Behavior
- Desktop (1440px): right-aligned flex row, full nav visible
- Mobile (390px): could collapse, but match original (Canva shows full nav)
- Breakpoint: keep horizontal at all widths, reduce font to 12px on mobile

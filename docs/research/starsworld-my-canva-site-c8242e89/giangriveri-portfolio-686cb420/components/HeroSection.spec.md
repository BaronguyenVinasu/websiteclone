# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/HeroSection.tsx`
- **Screenshot:** `docs/design-references/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/hero.jpg`
- **Interaction model:** static

## Visual Description
Full-viewport white section. The top area has a two-column header:
- Left: "Portfolio" in large serif (~53px, black, tight tracking)
- Right: "APPROACHING L&D WITH CREATIVE MIND" in uppercase small serif

Below that (y≈196 from section top), a large coral/salmon rounded rectangle fills ~90% of the width. Inside it:
- Bottom-left: "Trainer & L&D Partner" in rust/coral serif bold
- Below that: "Giang Bui" in enormous black serif (~200px+)
- Right side: full-height photo of Giang Bui (woman in pink shirt, smiling)
- Right edge: decorative dark maroon geometric triangle shapes (from image `6c24ae6fc72cf5d7de7aecf4ed65ea1e.png`)

## Assets
- Hero background image: `public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/6425b363f6cb75c818126dae0a4a4477.png` — use as the coral background rectangle (or replicate gradient)
- Woman photo (Giang in pink shirt): `public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/6c24ae6fc72cf5d7de7aecf4ed65ea1e.png`

## DOM Structure
```
<section> (min-h-screen, white bg, relative)
  <!-- Top header row -->
  <div class="header-row"> (flex, justify-between, padding ~40px, pt ~60px)
    <span class="logo">Portfolio</span>
    <span class="tagline">APPROACHING L&D WITH CREATIVE MIND</span>
  </div>
  <!-- Main hero card -->
  <div class="hero-card"> (coral bg, rounded-2xl, mx ~45px, overflow-hidden, relative, h≈671px)
    <!-- Left text block -->
    <div class="hero-text"> (absolute bottom-left, p-12)
      <p class="subtitle">Trainer & L&D Partner</p>
      <h1 class="name">Giang Bui</h1>
    </div>
    <!-- Right photo -->
    <img class="hero-photo" (absolute right-0 bottom-0, h-full, object-cover)>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- minHeight: 100vh
- position: relative

### Header row
- display: flex
- justifyContent: space-between
- alignItems: center
- padding: 40px 77px 20px 77px

### "Portfolio" logo
- fontSize: 53.3px
- fontFamily: Times, serif → use `font-playfair` or `font-serif`
- fontWeight: 400
- letterSpacing: -2.13px
- color: rgb(0, 0, 0)

### "APPROACHING L&D WITH CREATIVE MIND" tagline
- fontSize: ~16px
- fontFamily: Times serif
- textTransform: uppercase
- letterSpacing: 2px
- color: rgb(0, 0, 0)

### Hero card (coral rectangle)
- backgroundColor: approximately rgb(234, 142, 112) — coral/salmon
- Implementation: use the background image `6425b363f6cb75c818126dae0a4a4477.png` as `object-cover` background, OR use `linear-gradient(135deg, #EA8E70 0%, #E07855 100%)`
- borderRadius: 24px
- margin: 0 45px
- height: ~671px
- position: relative
- overflow: hidden

### "Trainer & L&D Partner" subtitle
- fontSize: 51.6px → scale to ~clamp(28px, 4vw, 52px)
- fontFamily: Times serif bold
- fontWeight: 700
- color: rgb(211, 110, 99) — rust/coral
- fontStyle: italic

### "Giang Bui" name
- fontSize: ~180–200px → scale to clamp(80px, 14vw, 200px)
- fontFamily: Times serif
- fontWeight: 400 (normal weight but large)
- color: rgb(0, 0, 0)
- lineHeight: 0.9

### Hero photo
- Image: `6c24ae6fc72cf5d7de7aecf4ed65ea1e.png`
- position: absolute, right: 0, bottom: 0
- height: 100%
- objectFit: cover
- width: ~55% of card

## Text Content (verbatim)
- "Portfolio"
- "APPROACHING L&D WITH CREATIVE MIND"
- "Trainer & L&D Partner"
- "Giang Bui"

## Responsive Behavior
- Desktop (1440px): side-by-side layout, full card
- Mobile (390px): stack vertically, photo below text, reduce font sizes dramatically
- Breakpoint: ~768px switch to stacked layout

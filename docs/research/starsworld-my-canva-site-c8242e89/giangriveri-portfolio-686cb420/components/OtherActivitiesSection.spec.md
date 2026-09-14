# OtherActivitiesSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/OtherActivitiesSection.tsx`
- **Interaction model:** static

## Visual Description
Same yellow-green background (#E5EC98). Large faded "Other activities" heading at top-left in grey. Below shows activities content (need additional screenshot of lower portion). Top-right: "See more" link. The section likely shows a grid or list of other activities with images.

## DOM Structure
```
<section> (min-h-screen, bg #E5EC98)
  <div class="inner"> (px-12 py-12)
    <div class="header-row"> (flex justify-between)
      <h2 class="heading-faded">Other activities</h2>
      <a href="#">See more</a>
    </div>
    <!-- Activities content below - likely images/cards -->
    <div class="activities-grid"> (grid or flex)
      <!-- Activity items -->
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(229, 236, 152) = #E5EC98
- minHeight: 100vh

### "Other activities" heading (faded)
- fontSize: ~100–140px → clamp(50px, 10vw, 140px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgba(0, 0, 0, 0.2) — very faded/translucent grey
- letterSpacing: -2px

## Text Content (verbatim)
- "Other activities"
- "See more"

## Responsive Behavior
- Desktop: full width
- Mobile: stacked, reduced font

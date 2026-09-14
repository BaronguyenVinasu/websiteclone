# KeyProjectsSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/KeyProjectsSection.tsx`
- **Interaction model:** static

## Visual Description
Two-viewport section. First viewport: white/blue gradient background. Large faded "Key Projects" heading in grey at top-left. Below it: a horizontal timeline row with 4 items, each showing a filled circle bullet → horizontal line, then title + subtitle below.

Second viewport (same section): lavender/blue gradient (#C7DEFF-ish) background with 3 white rounded cards (soft shadows) side by side, each containing a training course title + mode. Below cards: an outlined pill/badge "How I design a program using Kolb's Experiential Learning Cycle".

Wait — reviewing: section 3 (y=2349) has the "Key Projects" timeline, and section 4 (y=3116) has the "Featured Training Programs" cards. They are separate sections. Spec only Key Projects here.

## DOM Structure
```
<section> (min-h-screen, white bg with subtle blue tint)
  <!-- Large faded heading -->
  <h2 class="section-heading-faded">Key Projects</h2>
  <!-- Timeline row -->
  <div class="timeline"> (flex, justify-between, px-12)
    <!-- Item 1 -->
    <div class="timeline-item">
      <div class="timeline-header"> (flex items-center gap-2)
        <div class="dot"> (w-4 h-4 rounded-full bg-black)
        <div class="line"> (flex-1 h-px bg-black)
      </div>
      <h3>Soft skill training series</h3>
      <p>for Fresher</p>
    </div>
    <!-- Item 2 -->
    <div class="timeline-item">
      ...
      <h3>Developing a Competency Framework</h3>
      <p>for Team Leader</p>
    </div>
    <!-- Item 3 -->
    <div class="timeline-item">
      ...
      <h3>Promoting Learning Culture</h3>
      <p>Within the Organization</p>
    </div>
    <!-- Item 4 -->
    <div class="timeline-item">
      ...
      <h3>English Competency Assessment</h3>
      <p>for Technical positions</p>
    </div>
  </div>
  <!-- See more button -->
  <a href="#" class="see-more">See more</a>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255) with subtle blue gradient overlay
- background: linear-gradient(180deg, #ffffff 0%, #dde8ff 100%) or similar
- minHeight: 100vh

### "Key Projects" faded heading
- fontSize: ~120–160px → clamp(60px, 10vw, 160px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(180, 185, 195) — light grey (faded)
- letterSpacing: -2px

### Timeline dot
- width: 14px, height: 14px
- borderRadius: 50%
- backgroundColor: rgb(0, 0, 0)

### Timeline line
- height: 1px
- backgroundColor: rgb(0, 0, 0)
- flex: 1

### Project title (h3)
- fontSize: ~18–20px
- fontFamily: Times serif
- fontWeight: 400
- color: rgb(0, 0, 0)
- marginTop: 12px

### Project subtitle
- fontSize: ~15px
- fontFamily: Noto Sans
- color: rgb(80, 80, 80)
- marginTop: 4px

## Text Content (verbatim)
- "Key Projects"
- "Soft skill training series" / "for Fresher"
- "Developing a Competency Framework" / "for Team Leader"
- "Promoting Learning Culture" / "Within the Organization"
- "English Competency Assessment" / "for Technical positions"
- "See more"

## Responsive Behavior
- Desktop: 4-column horizontal timeline
- Mobile: 2×2 grid or stacked list
- Breakpoint: ~768px

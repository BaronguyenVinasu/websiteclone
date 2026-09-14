# TrainingSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/TrainingSection.tsx`
- **Interaction model:** static

## Visual Description
Light blue (#C7DEFF) background section. Top-left: "Featured Training Programs" heading in black serif. Three white rounded-corner cards side by side, each with a bold training name and a smaller subtitle ("Offline in class" etc.). Below the cards: an outlined oval pill button "How I design a program using Kolb's Experiential Learning Cycle". Small "See more" link top-right area.

## DOM Structure
```
<section> (min-h-screen, bg #C7DEFF)
  <div class="inner"> (px-12 py-12)
    <div class="header-row"> (flex justify-between mb-8)
      <h2>Featured Training Programs</h2>
      <a href="#">See more</a>
    </div>
    <div class="cards-row"> (flex gap-6)
      <div class="card"> (bg white, rounded-2xl, p-8, flex-1, shadow-sm)
        <h3>Training<br/>Teamwork skill</h3>
        <p>Offline in class</p>
      </div>
      <div class="card">
        <h3>Training<br/>Negotiation skill</h3>
        <p>Offline + Online</p>
      </div>
      <div class="card">
        <h3>Emotional Intelligence in Communication</h3>
        <p>Offline in class</p>
      </div>
    </div>
    <div class="kolb-pill"> (mt-12, text-center)
      <span class="pill-outline">How I design a program using Kolb's Experiential Learning Cycle</span>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(199, 222, 255) = #C7DEFF
- minHeight: 100vh

### "Featured Training Programs" heading
- fontSize: ~36–40px
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)

### White card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 24px
- padding: 40px 32px
- boxShadow: 0 4px 20px rgba(0,0,0,0.06)
- flex: 1
- minHeight: 200px

### Card title (h3)
- fontSize: ~28–32px
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)
- lineHeight: 1.2

### Card subtitle
- fontSize: ~15px
- fontFamily: Noto Sans
- color: rgb(80, 80, 80)
- marginTop: 12px

### Kolb pill button
- border: 2px solid rgb(0, 0, 0)
- borderRadius: 50px
- padding: 16px 40px
- fontSize: ~16px
- backgroundColor: transparent
- color: rgb(0, 0, 0)
- display: inline-block

## Text Content (verbatim)
- "Featured Training Programs"
- "See more"
- "Training Teamwork skill" / "Offline in class"
- "Training Negotiation skill" / "Offline + Online"
- "Emotional Intelligence in Communication" / "Offline in class"
- "How I design a program using Kolb's Experiential Learning Cycle"

## Responsive Behavior
- Desktop: 3-column cards
- Mobile: stacked single column cards
- Breakpoint: ~768px

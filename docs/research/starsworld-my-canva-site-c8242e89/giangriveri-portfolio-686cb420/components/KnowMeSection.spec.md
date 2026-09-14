# KnowMeSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/KnowMeSection.tsx`
- **Interaction model:** static (video plays natively)

## Visual Description
Peach/salmon background section. Left side: a phone-mockup style video player (black rounded rectangle border, video inside showing Giang with yellow subtitle text). Right side: large serif "Get to Know Me" stacked vertically in huge black serif (~200px letters). Below: stats "50+" / "Training Courses" and "90+" / "Training Hours" side by side.

## Assets
- Video: `public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/videos/8ded250fc74d0748c68f4bf427fc510b.mp4`
- Video poster: `public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/ec8f53e05757922416796cc73f347a3c.jpg`

## DOM Structure
```
<section> (min-h-screen, bg peach #FAD9B4)
  <div class="inner"> (flex, items-center, gap-16, px-12, h-full)
    <!-- Left: Video -->
    <div class="video-container"> (w-55%, relative)
      <div class="phone-frame"> (rounded-3xl border-4 border-black bg-black, overflow-hidden)
        <video src="..." poster="..." controls autoplay muted loop />
      </div>
    </div>
    <!-- Right: Title + Stats -->
    <div class="right-block"> (flex flex-col)
      <h2 class="section-title">Get<br/>to<br/>Know<br/>Me</h2>
      <div class="stats"> (flex gap-8, mt-8)
        <div class="stat">
          <span class="stat-number">50+</span>
          <span class="stat-label">Training Courses</span>
        </div>
        <div class="stat">
          <span class="stat-number">90+</span>
          <span class="stat-label">Training Hours</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(250, 217, 180) = #FAD9B4
- minHeight: 100vh

### "Get to Know Me" title
- fontSize: ~160–180px → clamp(60px, 12vw, 180px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)
- lineHeight: 0.9

### Stat number ("50+", "90+")
- fontSize: ~60px
- fontFamily: Canva Sans / Noto Sans
- fontWeight: 700
- color: rgb(0, 0, 0)

### Stat label ("Training Courses")
- fontSize: ~18px
- fontFamily: Canva Sans
- fontWeight: 400
- color: rgb(0, 0, 0)

### Phone frame / video container
- borderRadius: 24–32px
- border: 3–4px solid rgb(13, 18, 22) (near black)
- backgroundColor: rgb(13, 18, 22)
- overflow: hidden
- aspectRatio: ~16/9 or taller

## Text Content (verbatim)
- "Get to Know Me" (displayed stacked: "Get" / "to" / "Know" / "Me")
- "50+"
- "Training Courses"
- "90+"
- "Training Hours"

## Responsive Behavior
- Desktop: side-by-side, video left, title right
- Mobile: stack, title top, video below, stats below
- Breakpoint: ~768px

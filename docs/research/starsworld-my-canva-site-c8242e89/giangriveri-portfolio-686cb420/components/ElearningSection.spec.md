# ElearningSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ElearningSection.tsx`
- **Interaction model:** static

## Visual Description
White/soft lavender gradient background. Large black serif heading "E-learning and Design Tools" across the top. Left: white rounded card with 3 numbered items (01, 02, 03). Right: a composite screenshot mockup showing LMS interface, e-learning tool and newsletter design. Below: "See more" pill button.

## Assets
- Screenshots composite: likely the large image `6425b363f6cb75c818126dae0a4a4477.png` or one of the others. The screenshot shows talentLMS, Articulate, and a newsletter.

## DOM Structure
```
<section> (min-h-screen, white/lavender bg)
  <div class="inner"> (px-12 py-12)
    <h2 class="heading">E-learning and Design Tools</h2>
    <div class="content-row"> (flex gap-12, mt-8)
      <!-- Left card -->
      <div class="items-card"> (bg white, rounded-2xl, p-8, w-2/5, shadow-sm)
        <div class="item">
          <span class="num">01</span>
          <div class="item-body">
            <h3>E-learning</h3>
            <ul>
              <li>Tool: <strong>Articulate</strong>, Animaker</li>
              <li>Video editing, <strong>interactive learning</strong></li>
            </ul>
          </div>
        </div>
        <div class="item">
          <span class="num">02</span>
          <div class="item-body">
            <h3>LMS</h3>
            <ul>
              <li>Tool: talentLMS</li>
              <li>Self-study data management on LMS</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <span class="num">03</span>
          <div class="item-body">
            <h3>Design</h3>
            <ul>
              <li>Tool: Canva/ Capcut for video</li>
              <li>Design L&D Intranet, newsletter,...</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Right: screenshot mockup -->
      <div class="mockup"> (flex-1, relative)
        <img src="..." alt="E-learning tools screenshot" class="w-full object-contain" />
      </div>
    </div>
    <div class="see-more-row"> (text-center mt-8)
      <a href="#" class="pill-btn">See more</a>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- minHeight: 100vh
- background: linear-gradient(180deg, #ffffff 0%, #ede9f5 100%) or similar white→lavender

### Heading
- fontSize: ~72–80px → clamp(40px, 6vw, 80px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)

### Items card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 24px
- padding: 40px 32px
- boxShadow: 0 4px 20px rgba(0,0,0,0.06)

### Item number ("01", "02", "03")
- fontSize: ~48px
- fontFamily: Times serif
- fontWeight: 400
- color: rgb(0, 0, 0)

### Item heading (h3: "E-learning", "LMS", "Design")
- fontSize: ~22px
- fontFamily: Times serif
- fontWeight: 400

### Item list bullets
- fontSize: ~15px
- fontFamily: Noto Sans
- strong items: fontWeight: 700

### "See more" pill
- border: 2px solid rgb(0,0,0)
- borderRadius: 50px
- padding: 12px 36px
- fontSize: 16px
- backgroundColor: transparent

## Text Content (verbatim)
- "E-learning and Design Tools"
- "01" / "E-learning" / "Tool: Articulate, Animaker" / "Video editing, interactive learning"
- "02" / "LMS" / "Tool: talentLMS" / "Self-study data management on LMS"
- "03" / "Design" / "Tool: Canva/ Capcut for video" / "Design L&D Intranet, newsletter,..."
- "See more"

## Responsive Behavior
- Desktop: 2-column (card left, mockup right)
- Mobile: stacked (heading → card → mockup → see more)

# ProfileSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ProfileSection.tsx`
- **Interaction model:** static

## Visual Description
Same peach background as KnowMe section. Left side: large serif "Nice to meet you!" headline, below that a photo of Giang (red outfit, rounded rectangle crop). Center-right: stats ("50+ Training Courses", "90+ Training Hours") and a skills bullet list. Bottom-center has "Hi, I am" in italic rust color with "Giang" in huge black serif partially visible. "My Resume" is a salmon/peach oval button.

## Assets
- Profile photo: `public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/97127f0db54183c0879dfd849c04a407.jpg` (800×600, woman in red outfit)

## DOM Structure
```
<section> (min-h-screen, bg #FAD9B4)
  <div class="inner"> (px-12 py-12, relative)
    <!-- Top stats row -->
    <div class="stats-row"> (flex gap-12, mb-8, justify-end or center-right)
      <div><span class="num">50+</span><br/><span>Training Courses</span></div>
      <div><span class="num">90+</span><br/><span>Training Hours</span></div>
    </div>
    <!-- Skills list -->
    <ul class="skills"> (bullet list, right side)
      <li><strong>My knowledge:</strong> Instructional Design (ADDIE), Adult Learning Principles, Kirkpatrick model, LTEM, Bloom taxonomy</li>
      <li><strong>Instructional skills:</strong> Facilitation, MC workshop</li>
      <li><strong>Media Skill:</strong> Canva, Capcut, Articulate, Genially</li>
      <li><strong>Strength:</strong> responsibility, quick adaptation, continuous learning, Interpersonal.</li>
      <li>IELTS 7.5</li>
    </ul>
    <!-- Left headline -->
    <h2 class="headline">Nice to<br/>meet you!</h2>
    <!-- Photo -->
    <div class="photo-container"> (rounded-2xl overflow-hidden, bg coral)
      <img src="97127f0db..." alt="Giang Bui profile photo" />
    </div>
    <!-- Bottom overlay text -->
    <div class="bottom-text">
      <p class="hi-text">Hi, I am<span class="asterisk">*</span></p>
      <h2 class="name-partial">Giang</h2>
    </div>
    <!-- Resume button -->
    <a href="#" class="resume-btn">My Resume</a>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(250, 217, 180) = #FAD9B4
- minHeight: 100vh

### "Nice to meet you!" headline
- fontSize: ~100–120px → clamp(48px, 8vw, 120px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)
- lineHeight: 0.9

### Stats numbers
- fontSize: ~60px
- fontWeight: 700
- color: rgb(0, 0, 0)

### Skills list items
- fontSize: ~16–18px
- fontFamily: Noto Sans
- fontWeight: 400 for label, 700 for bold keys
- color: rgb(0, 0, 0)
- lineHeight: 1.6

### "Hi, I am" text
- fontSize: ~32px
- fontFamily: Times serif italic
- color: rgb(211, 110, 99) = rust coral
- fontStyle: italic

### "Giang" partial name
- fontSize: ~120–180px → clamp(60px, 12vw, 180px)
- fontFamily: Times serif
- fontWeight: 400
- color: rgb(0, 0, 0)

### "My Resume" button
- backgroundColor: rgb(250, 162, 117) ≈ #FAA275 salmon
- borderRadius: 50px (pill)
- padding: 16px 40px
- fontSize: 18px
- fontWeight: 600
- color: rgb(0, 0, 0)
- cursor: pointer

### Photo container
- borderRadius: 16px
- overflow: hidden
- backgroundColor: rgb(234, 142, 112) ≈ coral

## Text Content (verbatim)
- "Nice to meet you!"
- "50+" / "Training Courses"
- "90+" / "Training Hours"
- "My knowledge: Instructional Design (ADDIE), Adult Learning Principles, Kirkpatrick model, LTEM, Bloom taxonomy"
- "Instructional skills: Facilitation, MC workshop"
- "Media Skill: Canva, Capcut, Articulate, Genially"
- "Strength: responsibility, quick adaptation, continuous learning, Interpersonal."
- "IELTS 7.5"
- "Hi, I am"
- "Giang"
- "My Resume"

## Responsive Behavior
- Desktop: 2-column left/right layout
- Mobile: stacked, headline → photo → skills → button

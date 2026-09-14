# LearningCycleSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/LearningCycleSection.tsx`
- **Interaction model:** static

## Visual Description
White background with a lavender/soft purple tint. Title "Start with Concrete Experience" + "How I design a program using Kolb's Experiential Learning Cycle" at top. 
Left side: a diamond/rhombus grid of 4 phases with connecting lines:
- Top-left diamond: "Concrete Experience" (light purple)
- Top-right diamond: "Reflective Observation" (light purple/white)
- Bottom-left diamond: "Abstract Conceptualization" (dark navy blue)
- Bottom-right diamond: "Active Experimentation" (dark navy blue)
Each diamond has descriptive text to its right (via horizontal lines).
Right side: 3-4 stacked photos of training sessions.

## Assets
- Training photos: 
  - `public/sites/.../images/82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg` (800×533)
  - `public/sites/.../images/fd0697800d55617d63cfff99189564e4.jpg` (800×600)
  - `public/sites/.../images/b501c9231f1b630fa055e4f0f1fd9bc4.jpg` (800×600)
- Diagram image: `public/sites/.../images/89e180abb41d33ee0d64f898f5e1c52b.png` (small icon/diagram)
- Road/path image: `public/sites/.../images/875630dfd8cee5a8052f3e974bcc7f12.png`

## DOM Structure
```
<section> (min-h-screen, white bg)
  <div class="inner"> (px-12 py-12)
    <p class="pre-title">Start with Concrete Experience</p>
    <p class="kolb-label">How I design a program using Kolb's Experiential Learning Cycle</p>
    <div class="content-row"> (flex gap-12)
      <!-- Left: Diagram -->
      <div class="diagram"> (flex-1, relative)
        <!-- 4 diamonds in 2x2 grid with connecting lines -->
        <div class="diamond light">Concrete<br/>Experience</div>
        <div class="diamond light">Reflective<br/>Observation</div>
        <div class="diamond dark">Abstract<br/>Conceptualization</div>
        <div class="diamond dark">Active<br/>Experimentation</div>
        <!-- Description text beside each diamond -->
        <p>learners use their own experience to solve a teamwork problem</p>
        <p>discussion in team, define what works and doesn't work in solving the case</p>
        <p>suggest new teamwork models to modify the current problem</p>
        <p>Testing the models by applying in solving a new case, role play activity</p>
      </div>
      <!-- Right: Photos -->
      <div class="photos"> (w-1/3, flex flex-col gap-3)
        <img src="82dcedcb..." />
        <img src="fd069780..." />
        <img src="b501c923..." />
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- minHeight: 100vh

### Diamond (light variant: Concrete Experience, Reflective Observation)
- backgroundColor: rgb(195, 210, 240) or similar light periwinkle
- clipPath: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%) (diamond shape)
- OR use transform: rotate(45deg) on a square
- width: ~160px, height: ~80px
- display: flex, alignItems: center, justifyContent: center
- fontSize: ~14px, fontWeight: 700, color: white or dark

### Diamond (dark variant: Abstract Conceptualization, Active Experimentation)
- backgroundColor: rgb(46, 53, 115) dark navy/purple
- Same shape
- color: rgb(255, 255, 255)

### Description text beside diamonds
- fontSize: ~14px
- fontFamily: Noto Sans
- color: rgb(0, 0, 0)

### Photos
- borderRadius: 12px
- width: 100%
- objectFit: cover

## Text Content (verbatim)
- "Start with Concrete Experience"
- "How I design a program using Kolb's Experiential Learning Cycle"
- "Concrete Experience" — "learners use their own experience to solve a teamwork problem"
- "Reflective Observation" — "discussion in team, define what works and doesn't work in solving the case"
- "Abstract Conceptualization" — "suggest new teamwork models to modify the current problem"
- "Active Experimentation" — "Testing the models by applying in solving a new case, role play activity"

## Responsive Behavior
- Desktop: diagram left, photos right (2-column)
- Mobile: stacked, diagram above, photos below

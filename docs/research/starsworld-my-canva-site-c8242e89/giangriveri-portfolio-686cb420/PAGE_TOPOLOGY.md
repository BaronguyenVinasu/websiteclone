# Page Topology — Giang Bui Portfolio

**Source:** https://starsworld.my.canva.site/giangriveri-portfolio/
**site-key:** starsworld-my-canva-site-c8242e89
**page-key:** giangriveri-portfolio-686cb420

## Layout Architecture

- Single-page portfolio with 10 full-viewport sections stacked vertically
- Each section is exactly 768px tall × 1455px wide (Canva page units)
- Content rendered inside a custom scroll container `.ZRRuDw` (scrollHeight 7706px)
- Sticky navbar fixed to top (48px height, z-index 1)
- No horizontal scroll; all sections are full-width

## Sections (top to bottom)

| # | Name | Background | y-offset | Component |
|---|------|-----------|---------|-----------|
| 0 | Hero | #FFFFFF (white) + coral image overlay | 48 | HeroSection |
| 1 | Get to Know Me | rgb(250,217,180) = #FAD9B4 peach | 815 | KnowMeSection |
| 2 | Nice to Meet You (Profile) | rgb(250,217,180) = #FAD9B4 peach | 1582 | ProfileSection |
| 3 | Key Projects | #FFFFFF with blue tint gradient | 2349 | KeyProjectsSection |
| 4 | Featured Training Programs | rgb(199,222,255) = #C7DEFF light blue | 3116 | TrainingSection |
| 5 | Kolb Learning Cycle | #FFFFFF | 3883 | LearningCycleSection |
| 6 | E-learning & Design Tools | #FFFFFF with lavender gradient | 4650 | ElearningSection |
| 7 | Certifications & Recognitions | rgb(229,236,152) = #E5EC98 yellow-green | 5417 | CertificationsSection |
| 8 | Other Activities | rgb(229,236,152) = #E5EC98 yellow-green | 6184 | OtherActivitiesSection |
| 9 | Contact / Footer | rgb(229,236,152) = #E5EC98 yellow-green | 6951 | ContactSection |

## Sticky Overlay
- Navbar is position:sticky, always visible over all sections
- Background: rgb(253,253,253), border-bottom: 1px solid rgba(0,0,0,0.07)
- Nav links right-aligned, flex-end

## Route
- Next.js route: `src/app/page.tsx` (first fresh-template clone, replacing scaffold)
- Component root: `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/`

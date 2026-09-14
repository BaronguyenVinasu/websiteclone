# CertificationsSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/CertificationsSection.tsx`
- **Interaction model:** static

## Visual Description
Yellow-green gradient background (#E5EC98 to #f5f5d0). Large serif "Certifications & Recognitions" heading top-left, wrapping to 2 lines. Left: white rounded card with two numbered sections (01 Certification, 02 Recognition) with bullet lists. Right: overlapping certificate images (slightly rotated/stacked) showing the L&D Business Partner certificate and another certificate.

## Assets
- Certificate images: 
  - `public/sites/.../images/875630dfd8cee5a8052f3e974bcc7f12.png` (likely the Chứng Nhận certificate)
  - Other certificate images may be from remaining undownloaded assets

## DOM Structure
```
<section> (min-h-screen, bg yellow-green gradient)
  <div class="inner"> (px-12 py-12)
    <h2 class="heading">Certifications &<br/>Recognitions</h2>
    <div class="content-row"> (flex gap-12, mt-6)
      <!-- Left: items card -->
      <div class="items-card"> (bg white, rounded-2xl, p-8, w-2/5, shadow-sm)
        <div class="item">
          <span class="num">01</span>
          <div>
            <h3>Certification</h3>
            <ul>
              <li>L&D Business Partner</li>
              <li>Learning Activities Design</li>
              <li>Adult Learning Theory, etc...</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <span class="num">02</span>
          <div>
            <h3>Recognition</h3>
            <ul>
              <li>Shining star of 2023 (Rookie award)</li>
              <li>Excellent Star 2024</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Right: certificate images stacked/overlapping -->
      <div class="certs-visual"> (flex-1, relative, min-h-[400px])
        <img class="cert-1" style="transform: rotate(-5deg); position absolute" src="..." />
        <img class="cert-2" style="transform: rotate(3deg); position absolute right" src="..." />
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background: linear-gradient(135deg, #e5ec98 0%, #f0f5c0 100%) or backgroundColor: rgb(229,236,152)
- minHeight: 100vh

### "Certifications & Recognitions" heading
- fontSize: ~80–100px → clamp(40px, 7vw, 100px)
- fontFamily: Times serif (Playfair Display)
- fontWeight: 400
- color: rgb(0, 0, 0)
- lineHeight: 0.95

### Items card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 24px
- padding: 40px 32px
- boxShadow: 0 4px 16px rgba(0,0,0,0.06)

### Item number
- fontSize: ~48px
- fontFamily: Times serif
- color: rgb(0, 0, 0)

### Item h3
- fontSize: ~20px
- fontFamily: Times serif

### Bullet list items
- fontSize: ~15px
- fontFamily: Noto Sans
- fontWeight: 700 (all bold)

### Certificate images
- borderRadius: 8px
- boxShadow: 0 8px 32px rgba(0,0,0,0.15)
- transform: rotate(±5deg) — stacked/overlapping

## Text Content (verbatim)
- "Certifications & Recognitions"
- "01" / "Certification"
  - "L&D Business Partner"
  - "Learning Activities Design"
  - "Adult Learning Theory, etc..."
- "02" / "Recognition"
  - "Shining star of 2023 (Rookie award)"
  - "Excellent Star 2024"

## Responsive Behavior
- Desktop: 2-column (card + certs)
- Mobile: stacked, heading → card → cert images

# ContactSection Specification

## Overview
- **Target file:** `src/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ContactSection.tsx`
- **Interaction model:** static

## Visual Description
Yellow-green background with a large white rounded card that acts as the footer content. The card has 3 columns:
1. Left: Square-ish photo of Giang (formal, white blouse), name "Giang Bui (Riveri) - L&D" below
2. Center: "Site Map" bold heading, list of navigation links
3. Right: "LET'S CONNECT!" outlined button, contact info (phone with green circle icon, email with green circle icon, LinkedIn with green icon)
Below the card: "© 2025 by Giang Bui" centered. Canva footer: "Terms & Support | Privacy Policy | Designed with Canva" at very bottom.

## Assets
- Profile photo for footer: likely one of the remaining images (the formal photo with white blouse)

## DOM Structure
```
<section> (min-h-screen, bg #E5EC98)
  <!-- CTA text above card -->
  <p class="cta-text">
    [text about collaboration invitation - italic serif, rust color]
    Do not hesitate to contact me to for any collaboration requests.
  </p>
  <!-- White contact card -->
  <div class="contact-card"> (bg white, rounded-3xl, p-10, mx-12)
    <!-- Column 1: Photo + name -->
    <div class="col-photo">
      <img src="..." alt="Giang Bui" class="rounded-2xl" />
      <p class="name">Giang Bui (Riveri) - L&D</p>
    </div>
    <!-- Column 2: Site Map -->
    <div class="col-sitemap">
      <h3 class="sitemap-heading">Site Map</h3>
      <ul>
        <li><a href="#">Key Projects</a></li>
        <li><a href="#">Featured Training Programs</a></li>
        <li><a href="#">E-learning creation</a></li>
        <li><a href="#">Certifications & Recognitions</a></li>
        <li><a href="#">Other activities</a></li>
      </ul>
    </div>
    <!-- Column 3: Connect + contact -->
    <div class="col-connect">
      <a href="mailto:bhuonggiang98@gmail.com" class="connect-btn">LET'S CONNECT!</a>
      <div class="contact-info">
        <div class="contact-row">
          <span class="icon phone-icon" />
          <span>0969213298</span>
        </div>
        <div class="contact-row">
          <span class="icon email-icon" />
          <span>bhuonggiang98@gmail.com</span>
        </div>
        <div class="contact-row">
          <span class="icon linkedin-icon" />
          <span>in/riveri-giangbui</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Copyright -->
  <p class="copyright">© 2025 by Giang Bui</p>
  <!-- Scroll to top button (circle with up arrow) -->
  <button class="scroll-top"> ↑ </button>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(229, 236, 152) = #E5EC98
- minHeight: 100vh

### CTA text (italic)
- fontSize: ~24–28px
- fontFamily: Times serif italic
- color: rgb(80, 80, 80) or near-black
- fontStyle: italic

### Contact card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 32px
- padding: 40px
- display: grid, gridTemplateColumns: 1fr 2fr 1fr
- gap: 40px

### Profile photo
- borderRadius: 16px
- width: ~300px
- height: auto
- objectFit: cover

### "Giang Bui (Riveri) - L&D"
- fontSize: ~18px
- fontFamily: Noto Sans
- fontWeight: 400
- color: rgb(0, 0, 0)
- marginTop: 12px

### "Site Map" heading
- fontSize: ~20px
- fontFamily: Noto Sans
- fontWeight: 700
- color: rgb(0, 0, 0)

### Site map links
- fontSize: ~16px
- fontFamily: Noto Sans
- color: rgb(0, 0, 0)
- textDecoration: none
- display: block, marginBottom: 12px

### "LET'S CONNECT!" button
- border: 2px solid rgb(130, 140, 60) — olive/yellow-green
- borderRadius: 8px
- padding: 16px 24px
- fontSize: ~16px
- fontFamily: Noto Sans
- fontWeight: 600
- color: rgb(130, 140, 60)
- backgroundColor: transparent
- letterSpacing: 1px

### Contact icons
- width: 32px, height: 32px
- borderRadius: 50%
- backgroundColor: rgb(130, 145, 60) — olive green
- color: white

### "© 2025 by Giang Bui"
- fontSize: ~14px
- color: rgb(80, 80, 80)
- textAlign: center

### Scroll-to-top button
- width: 48px, height: 48px
- borderRadius: 50%
- border: 1.5px solid rgb(0,0,0)
- backgroundColor: transparent
- position: absolute, bottom-right of section

## Text Content (verbatim)
- "Do not hesitate to contact me to for any collaboration requests."
- "Giang Bui (Riveri) - L&D"
- "Site Map"
- "Key Projects"
- "Featured Training Programs"
- "E-learning creation"
- "Certifications & Recognitions"
- "Other activities"
- "LET'S CONNECT!"
- "0969213298"
- "bhuonggiang98@gmail.com"
- "in/riveri-giangbui"
- "© 2025 by Giang Bui"

## Responsive Behavior
- Desktop: 3-column card
- Mobile: stacked columns, full-width contact card

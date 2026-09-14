# Page Assembly Plan

Once all 3 builder worktrees are merged into master, replace `src/app/page.tsx` with:

```tsx
import { Navbar } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/Navbar";
import { HeroSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/HeroSection";
import { KnowMeSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/KnowMeSection";
import { ProfileSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ProfileSection";
import { KeyProjectsSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/KeyProjectsSection";
import { TrainingSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/TrainingSection";
import { LearningCycleSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/LearningCycleSection";
import { ElearningSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ElearningSection";
import { CertificationsSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/CertificationsSection";
import { OtherActivitiesSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/OtherActivitiesSection";
import { ContactSection } from "@/components/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar activeSection="Home" />
      <main>
        <HeroSection />
        <KnowMeSection />
        <ProfileSection />
        <KeyProjectsSection />
        <TrainingSection />
        <LearningCycleSection />
        <ElearningSection />
        <CertificationsSection />
        <OtherActivitiesSection />
        <ContactSection />
      </main>
    </>
  );
}
```

## Merge order:
1. `git merge build/part1` (has layout.tsx + globals.css changes + Navbar/Hero/KnowMe/Profile)
2. `git merge build/part2` (KeyProjects/Training/LearningCycle)
3. `git merge build/part3` (Elearning/Certifications/OtherActivities/Contact)
4. Write page.tsx (above)
5. `npm run build` — verify clean

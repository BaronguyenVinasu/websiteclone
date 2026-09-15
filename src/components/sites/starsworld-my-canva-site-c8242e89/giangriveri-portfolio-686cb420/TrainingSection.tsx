"use client";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const FEATURED = [
  {
    title: "Mock Interview & CV Review",
    sub: "Career mentoring workshops",
    org: "CareerBuilder · FTU · UEH · Trade University",
  },
  {
    title: "Personal Branding Workshop",
    sub: "University keynote speaker",
    org: "Van Lang University · UMT · Hanoi University of Commerce",
  },
  {
    title: "Communication & Leadership",
    sub: "Soft-skills facilitation",
    org: "Lean In Vietnam · Green Fingers · IAP Training Center",
  },
];

const TOPICS = [
  "From Top Graduate to Youth Leader",
  "Bring Optimism to Your Internship",
  "Smart Note-Taking & Time Management",
  "Building a Personal Brand",
  "Effective Email Writing",
  "Debating & Argumentation Skills",
  "Career Orientation & Major Selection",
  "CV Writing for Employers",
  "Interview Skills & Body Language",
  "Teamwork & Communication",
  "Internship Preparation Bootcamp",
  "Marketing Fundamentals",
  "Project Development for NGOs",
];

export function TrainingSection() {
  return (
    <section
      id="training"
      className="min-h-screen flex flex-col px-12 py-16"
      style={{ background: "rgb(199, 222, 255)" }}
    >
      {/* Header row */}
      <AnimateIn type="fade-left" delay={0} className="flex justify-between items-baseline">
        <h2
          className="font-[family-name:var(--font-playfair)] font-normal"
          style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
        >
          Featured Speaking &amp; Training
        </h2>
        <span className="font-[family-name:var(--font-noto)] text-sm text-gray-600">
          13 external sessions · 18+ partner organizations
        </span>
      </AnimateIn>

      {/* Featured cards */}
      <div className="flex gap-6 mt-10">
        {FEATURED.map((card, i) => (
          <AnimateIn key={i} type="scale-in" delay={200 + i * 150} className="flex-1">
            <div className={cn("bg-white rounded-3xl p-8 h-full shadow-sm flex flex-col")}>
              <h3
                className="font-[family-name:var(--font-playfair)] leading-tight font-normal"
                style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
              >
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-noto)] text-sm text-[rgb(199,100,70)] mt-2">
                {card.sub}
              </p>
              <p className="font-[family-name:var(--font-noto)] text-xs text-gray-400 mt-auto pt-4 leading-relaxed">
                {card.org}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* All topics grid */}
      <AnimateIn type="fade-up" delay={600}>
        <div className="mt-10">
          <p className="font-[family-name:var(--font-noto)] text-sm font-bold text-black mb-4 uppercase tracking-wider">
            Topics I&apos;ve covered
          </p>
          <div className="flex flex-wrap gap-3">
            {TOPICS.map((topic, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-noto)] text-sm bg-white rounded-full px-4 py-2 text-black shadow-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Pill button */}
      <AnimateIn type="fade-up" delay={750} className="flex justify-center mt-10">
        <a
          href="#"
          className={cn(
            "font-[family-name:var(--font-noto)] text-base inline-block",
            "border-2 border-black rounded-full py-4 px-10 bg-transparent text-black",
            "hover:bg-black hover:text-white transition-colors"
          )}
        >
          How I design a mentoring program for career success
        </a>
      </AnimateIn>
    </section>
  );
}

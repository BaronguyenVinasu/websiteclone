"use client";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const PROJECTS = [
  { title: "Onboarding Training Program", sub: "M_Service (MoMo e-wallet)" },
  { title: "IT Recruitment & Talent Sourcing", sub: "Manpower Vietnam Group" },
  { title: "Career Mentoring Program", sub: "25+ Mentees · 856 Hours" },
  { title: "HR Operations & People Experience", sub: "akaBot, FPT Group" },
];

export function KeyProjectsSection() {
  return (
    <section
      id="key-projects"
      className="min-h-screen relative flex flex-col px-12 py-16"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #dde8ff 100%)" }}
    >
      {/* Faded heading + See more */}
      <div className="flex justify-between items-start">
        <AnimateIn type="fade-in" delay={0}>
          <h2
            className={cn("font-[family-name:var(--font-playfair)] font-normal leading-none")}
            style={{ fontSize: "clamp(60px, 10vw, 160px)", color: "rgba(0,0,0,0.12)", letterSpacing: "-2px" }}
          >
            Key Projects
          </h2>
        </AnimateIn>
        <a href="#" className="font-[family-name:var(--font-noto)] text-sm underline text-black mt-4">
          See more
        </a>
      </div>

      {/* Timeline */}
      <div className="flex mt-auto pb-16 gap-0">
        {PROJECTS.map((project, i) => (
          <AnimateIn key={i} type="fade-up" delay={200 + i * 150} className="flex-1 pr-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-black shrink-0" />
              <div className="flex-1 h-px bg-black ml-2" />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-[18px] font-normal text-black mt-3 leading-snug">
              {project.title}
            </h3>
            <p className="font-[family-name:var(--font-noto)] text-sm text-gray-600 mt-1">
              {project.sub}
            </p>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

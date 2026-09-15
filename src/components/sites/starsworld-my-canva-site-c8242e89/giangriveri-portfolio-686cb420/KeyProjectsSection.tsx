"use client";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const STATS = [
  { value: "182", label: "Classes Delivered" },
  { value: "600+", label: "Training Hours" },
  { value: "856", label: "1-on-1 Mentoring Hours" },
  { value: "100%", label: "Mentee Job Placement" },
];

const PROJECTS = [
  {
    title: "Onboarding Training Program",
    company: "M_Service — MoMo e-wallet",
    duration: "29 months",
    details: ["117+ training hours", "4 sessions/month", "7 internal training courses", "NPS avg 4.5/5.0"],
  },
  {
    title: "IT Recruitment & Talent Sourcing",
    company: "Manpower Vietnam Group",
    duration: "Full-cycle",
    details: ["65 classes delivered", "130 hours total", "Tech talent pipeline", "JD design & candidate screening"],
  },
  {
    title: "Career Mentoring Program",
    company: "Individual & Group Mentoring",
    duration: "Ongoing",
    details: ["25 mentees (1-on-1)", "856 mentoring hours", "100% received job offers", "250 hrs class-size sessions"],
  },
  {
    title: "University Speaking & Coaching",
    company: "18+ Partner Organizations",
    duration: "13 sessions",
    details: ["376 students coached", "118 coaching hours", "Hanoi, HCMC universities", "CV, interview & branding"],
  },
  {
    title: "HR Operations & People Experience",
    company: "akaBot (FPT) · Vantix (Vingroup)",
    duration: "Multi-role",
    details: ["HR ops & compliance", "Onboarding experience", "HR assistant duties", "Bamboo Airways internship"],
  },
];

export function KeyProjectsSection() {
  return (
    <section
      id="key-projects"
      className="min-h-screen relative flex flex-col px-12 py-16"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #dde8ff 100%)" }}
    >
      {/* Faded heading */}
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

      {/* Stats bar */}
      <AnimateIn type="fade-up" delay={150} className="grid grid-cols-4 gap-6 mt-10">
        {STATS.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p
              className="font-[family-name:var(--font-noto)] font-bold text-black"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              {s.value}
            </p>
            <p className="font-[family-name:var(--font-noto)] text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </AnimateIn>

      {/* Detailed project cards */}
      <div className="grid grid-cols-1 gap-5 mt-10 pb-8">
        {PROJECTS.map((p, i) => (
          <AnimateIn key={i} type="fade-up" delay={300 + i * 120} className="bg-white rounded-2xl p-7 shadow-sm flex items-start gap-8">
            {/* Index */}
            <span
              className="font-[family-name:var(--font-playfair)] font-normal text-gray-200 shrink-0 leading-none"
              style={{ fontSize: "64px" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] font-normal text-black" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                  {p.title}
                </h3>
                <span className="font-[family-name:var(--font-noto)] text-xs text-gray-400 bg-gray-100 rounded-full px-3 py-1">
                  {p.duration}
                </span>
              </div>
              <p className="font-[family-name:var(--font-noto)] text-sm text-[rgb(199,100,70)] mt-1">{p.company}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.details.map((d, j) => (
                  <span
                    key={j}
                    className="font-[family-name:var(--font-noto)] text-xs bg-[rgb(221,232,255)] text-black rounded-full px-3 py-1"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

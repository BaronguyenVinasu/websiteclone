"use client";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const TOOLS = [
  {
    number: "01",
    title: "Training Design",
    toolName: "PowerPoint, Canva, Google Slides",
    description: "Designing slide decks, infographics, and visual learning materials",
    tags: ["Slide Design", "Infographic", "Visual Content"],
  },
  {
    number: "02",
    title: "HR & Recruitment Tech",
    toolName: "LinkedIn Recruiter, Excel, ATS Systems",
    description: "Talent sourcing, applicant tracking, HR data management and reporting",
    tags: ["Talent Sourcing", "ATS", "HR Analytics"],
  },
  {
    number: "03",
    title: "Online Delivery",
    toolName: "Zoom, Google Meet, LMS Platforms",
    description: "Virtual facilitation, online coaching sessions, and e-learning delivery",
    tags: ["Virtual Class", "Coaching Online", "LMS"],
  },
];

const METRICS = [
  { value: "7", label: "Training courses built at MoMo" },
  { value: "13", label: "External sessions facilitated" },
  { value: "376", label: "Students coached" },
  { value: "18+", label: "Partner organizations" },
];

export function ElearningSection() {
  return (
    <section
      id="elearning"
      className="min-h-screen px-12 py-16"
      style={{ background: "linear-gradient(180deg, #f8f8ff 0%, #ede9f5 100%)" }}
    >
      <AnimateIn type="fade-left" delay={0}>
        <h2
          className={cn("font-normal text-black mb-2")}
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 80px)" }}
        >
          Tools &amp; Platforms
        </h2>
      </AnimateIn>
      <AnimateIn type="fade-in" delay={100}>
        <p className="font-[family-name:var(--font-noto)] text-gray-500 text-sm mb-10">
          What I use to design, deliver, and track learning experiences
        </p>
      </AnimateIn>

      {/* Metrics row */}
      <AnimateIn type="fade-up" delay={150} className="grid grid-cols-4 gap-5 mb-12">
        {METRICS.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              {m.value}
            </p>
            <p className="font-[family-name:var(--font-noto)] text-xs text-gray-500 mt-1 leading-snug">{m.label}</p>
          </div>
        ))}
      </AnimateIn>

      {/* Tool cards */}
      <div className="flex flex-col gap-5">
        {TOOLS.map((tool, i) => (
          <AnimateIn key={i} type="fade-right" delay={350 + i * 150} className="bg-white rounded-3xl p-8 shadow-sm flex items-start gap-8">
            <span
              className="font-[family-name:var(--font-playfair)] font-normal text-gray-200 shrink-0 leading-none"
              style={{ fontSize: "56px" }}
            >
              {tool.number}
            </span>
            <div className="flex-1">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h3
                  className="font-normal text-black"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.2vw, 28px)" }}
                >
                  {tool.title}
                </h3>
                <p className="font-[family-name:var(--font-noto)] text-sm text-[rgb(199,100,70)]">
                  {tool.toolName}
                </p>
              </div>
              <p className="font-[family-name:var(--font-noto)] text-sm text-gray-500 mt-2">
                {tool.description}
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {tool.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-[family-name:var(--font-noto)] text-xs bg-[rgb(237,233,245)] rounded-full px-3 py-1 text-black"
                  >
                    {tag}
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

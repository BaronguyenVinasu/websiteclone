"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const IMAGE_BASE = "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

const TOOLS = [
  { number: "01", title: "Training & Presentation", toolName: "PowerPoint, Canva, Google Slides", description: "Designing training materials, slides & visual content" },
  { number: "02", title: "HR & Recruitment Tech", toolName: "LinkedIn Recruiter, Excel, ATS", description: "Talent sourcing, screening & HR data management" },
  { number: "03", title: "Online Delivery", toolName: "Zoom, Google Meet, LMS platforms", description: "Virtual facilitation, online coaching & e-learning" },
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
          className={cn("font-normal text-black mb-10")}
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 80px)" }}
        >
          Tools & Platforms I Use
        </h2>
      </AnimateIn>

      <div className="flex gap-12">
        {/* Left card */}
        <AnimateIn type="fade-right" delay={200} className="shrink-0">
          <div className="bg-white rounded-3xl p-10 shadow-sm" style={{ width: "clamp(260px, 40vw, 500px)" }}>
            {TOOLS.map((tool, i) => (
              <div key={i} className="mb-8 last:mb-0">
                <div className="font-normal text-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "48px" }}>
                  {tool.number}
                </div>
                <div className="font-normal text-black mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "22px" }}>
                  {tool.title}
                </div>
                <p className="text-sm text-black" style={{ fontFamily: "var(--font-noto)" }}>
                  Tool: <strong>{tool.toolName}</strong>
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-noto)" }}>
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Right image */}
        <AnimateIn type="scale-in" delay={350} className="flex-1 flex items-center justify-center">
          <Image
            src={`${IMAGE_BASE}875630dfd8cee5a8052f3e974bcc7f12.png`}
            alt="Tools and platforms"
            width={800}
            height={600}
            className="w-full object-contain"
          />
        </AnimateIn>
      </div>

      {/* See more button */}
      <AnimateIn type="fade-up" delay={550} className="flex justify-center mt-8">
        <button
          className={cn("border-2 border-black rounded-full py-3 px-10 text-base bg-transparent hover:bg-black hover:text-white transition-colors")}
          style={{ fontFamily: "var(--font-noto)" }}
        >
          See more
        </button>
      </AnimateIn>
    </section>
  );
}

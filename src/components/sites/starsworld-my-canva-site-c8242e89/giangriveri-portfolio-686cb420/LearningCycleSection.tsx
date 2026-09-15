"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const BASE = "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images";

const DIAMONDS = [
  { label: "Needs Assessment", desc: "Identify the learner's current situation, gaps, and career goals through 1-1 conversation", dark: false },
  { label: "Program Design", desc: "Co-create a personalized learning roadmap tailored to skills, timeline, and opportunities", dark: false },
  { label: "Delivery & Facilitation", desc: "Run interactive workshops, coaching sessions, and mock interviews with real-world cases", dark: true },
  { label: "Evaluation & Follow-up", desc: "Measure impact through NPS feedback, goal tracking, and continuous mentoring support", dark: true },
];

const PHOTOS = [
  "82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg",
  "fd0697800d55617d63cfff99189564e4.jpg",
  "b501c9231f1b630fa055e4f0f1fd9bc4.jpg",
];

function Diamond({ label, desc, dark }: { label: string; desc: string; dark: boolean }) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <div
        className={cn("shrink-0 flex items-center justify-center", dark ? "bg-[rgb(46,53,115)]" : "bg-[rgb(195,210,240)]")}
        style={{ width: 150, height: 80, transform: "rotate(45deg)" }}
      >
        <span
          className={cn("font-[family-name:var(--font-noto)] text-[11px] font-semibold text-center leading-tight px-2 text-white")}
          style={{ transform: "rotate(-45deg)", display: "block", width: 120 }}
        >
          {label}
        </span>
      </div>
      <p className="font-[family-name:var(--font-noto)] text-sm text-black leading-snug max-w-[220px]">{desc}</p>
    </div>
  );
}

export function LearningCycleSection() {
  return (
    <section id="learning-cycle" className="min-h-screen bg-white flex flex-col px-12 py-16">
      <AnimateIn type="fade-in" delay={0}>
        <p className="font-[family-name:var(--font-noto)] text-sm text-gray-500 mb-1">
          Start with Needs Assessment
        </p>
      </AnimateIn>
      <AnimateIn type="fade-in" delay={100}>
        <p className="font-[family-name:var(--font-noto)] text-base font-medium mb-10">
          How I design a mentoring & training program for career success
        </p>
      </AnimateIn>

      <div className="flex gap-12">
        {/* Left: diamonds */}
        <div className="flex-1">
          {DIAMONDS.map((d, i) => (
            <AnimateIn key={i} type="fade-left" delay={200 + i * 150}>
              <Diamond label={d.label} desc={d.desc} dark={d.dark} />
            </AnimateIn>
          ))}
        </div>

        {/* Right: photos */}
        <div className="w-1/3 flex flex-col gap-3">
          {PHOTOS.map((filename, i) => (
            <AnimateIn key={i} type="scale-in" delay={250 + i * 200} className="relative w-full h-48">
              <Image
                src={`${BASE}/${filename}`}
                alt={`Training photo ${i + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

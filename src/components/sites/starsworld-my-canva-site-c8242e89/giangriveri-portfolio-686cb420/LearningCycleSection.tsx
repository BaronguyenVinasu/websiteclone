import Image from "next/image";
import { cn } from "@/lib/utils";

const BASE = "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images";

const DIAMONDS = [
  {
    label: "Concrete Experience",
    desc: "learners use their own experience to solve a teamwork problem",
    dark: false,
  },
  {
    label: "Reflective Observation",
    desc: "discussion in team, define what works and doesn't work in solving the case",
    dark: false,
  },
  {
    label: "Abstract Conceptualization",
    desc: "suggest new teamwork models to modify the current problem",
    dark: true,
  },
  {
    label: "Active Experimentation",
    desc: "Testing the models by applying in solving a new case, role play activity",
    dark: true,
  },
];

const PHOTOS = [
  "82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg",
  "fd0697800d55617d63cfff99189564e4.jpg",
  "b501c9231f1b630fa055e4f0f1fd9bc4.jpg",
];

function Diamond({
  label,
  desc,
  dark,
}: {
  label: string;
  desc: string;
  dark: boolean;
}) {
  return (
    <div className="flex items-center gap-6 mb-8">
      {/* Diamond shape: rotated square */}
      <div
        className={cn(
          "shrink-0 flex items-center justify-center",
          dark ? "bg-[rgb(46,53,115)]" : "bg-[rgb(195,210,240)]"
        )}
        style={{
          width: 150,
          height: 80,
          transform: "rotate(45deg)",
        }}
      >
        {/* Inner counter-rotate so text is upright */}
        <span
          className={cn(
            "font-[family-name:var(--font-noto)] text-[11px] font-semibold text-center leading-tight px-2",
            dark ? "text-white" : "text-white"
          )}
          style={{ transform: "rotate(-45deg)", display: "block", width: 120 }}
        >
          {label}
        </span>
      </div>
      {/* Description */}
      <p className="font-[family-name:var(--font-noto)] text-sm text-black leading-snug max-w-[220px]">
        {desc}
      </p>
    </div>
  );
}

export function LearningCycleSection() {
  return (
    <section
      id="learning-cycle"
      className="min-h-screen bg-white flex flex-col px-12 py-16"
    >
      {/* Pre-title */}
      <p className="font-[family-name:var(--font-noto)] text-sm text-gray-500 mb-1">
        Start with Concrete Experience
      </p>

      {/* Kolb label */}
      <p className="font-[family-name:var(--font-noto)] text-base font-medium mb-10">
        How I design a program using Kolb&apos;s Experiential Learning Cycle
      </p>

      {/* Two-column layout */}
      <div className="flex gap-12">
        {/* Left: diagram */}
        <div className="flex-1">
          {DIAMONDS.map((d, i) => (
            <Diamond key={i} label={d.label} desc={d.desc} dark={d.dark} />
          ))}
        </div>

        {/* Right: photos */}
        <div className="w-1/3 flex flex-col gap-3">
          {PHOTOS.map((filename, i) => (
            <div key={i} className="relative w-full h-48">
              <Image
                src={`${BASE}/${filename}`}
                alt={`Training photo ${i + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

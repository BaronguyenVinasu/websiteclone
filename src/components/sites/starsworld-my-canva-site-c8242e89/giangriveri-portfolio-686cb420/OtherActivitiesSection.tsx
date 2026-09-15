"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

const photos = [
  {
    src: `${IMAGE_BASE}82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg`,
    alt: "Speaking & facilitation session",
  },
  {
    src: `${IMAGE_BASE}b501c9231f1b630fa055e4f0f1fd9bc4.jpg`,
    alt: "Career mentoring workshop",
  },
  {
    src: `${IMAGE_BASE}nhat_duong_hero.jpg`,
    alt: "Nhật Dương at event",
  },
];

export function OtherActivitiesSection() {
  return (
    <section
      id="others"
      className={cn("min-h-screen px-12 py-16 bg-[rgb(229,236,152)]")}
    >
      {/* Header row */}
      <div className="flex justify-between items-baseline mb-10">
        <AnimateIn type="fade-in" delay={0}>
          <h2
            className="font-normal leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(50px, 10vw, 140px)",
              color: "rgba(0, 0, 0, 0.15)",
            }}
          >
            Other activities
          </h2>
        </AnimateIn>
        <button
          className="text-sm underline text-black bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          See more
        </button>
      </div>

      {/* Activities highlights */}
      <div className="mb-8">
        <AnimateIn type="fade-up" delay={100}>
          <p className="font-[family-name:var(--font-noto)] text-black text-sm leading-relaxed max-w-3xl">
            Co-founder &amp; Mentor at <strong>Lean In Vietnam Graduate</strong> · Youth Ambassador at <strong>Global Goals Youth Summit (Malaysia 2023)</strong> · Media Ambassador for <strong>TEDx VNUIS</strong> · MB Bank Recruitment Brand Ambassador Gen 2 · Co-founder of <strong>Emotouch</strong> (CSDS &amp; Irish Embassy) · MUN Delegate at Singapore, Malaysia &amp; Global conferences
          </p>
        </AnimateIn>
      </div>

      {/* 3-column photo grid */}
      <div className="grid grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <AnimateIn key={index} type="scale-in" delay={200 + index * 150} className="rounded-2xl overflow-hidden aspect-video">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={338}
              className="w-full h-full object-cover"
            />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

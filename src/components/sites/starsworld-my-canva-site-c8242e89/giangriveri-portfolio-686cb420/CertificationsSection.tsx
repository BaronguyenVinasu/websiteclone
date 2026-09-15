"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

interface CertItemProps {
  number: string;
  title: string;
  bullets: string[];
}

function CertItem({ number, title, bullets }: CertItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div
        className="font-normal text-black"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "48px" }}
      >
        {number}
      </div>
      <div
        className="font-normal text-black mb-3"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "20px" }}
      >
        {title}
      </div>
      <ul className="space-y-1">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-sm font-bold text-black"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CertificationsSection() {
  const certificationBullets = [
    "L&D Business Partner",
    "Learning Activities Design",
    "Adult Learning Theory, etc...",
  ];

  const recognitionBullets = [
    "Shining star of 2023 (Rookie award)",
    "Excellent Star 2024",
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-12 py-16"
      style={{
        background: "linear-gradient(135deg, #e5ec98 0%, #f0f5c0 100%)",
      }}
    >
      <AnimateIn type="fade-in" delay={0}>
        <h2
          className={cn("font-normal text-black mb-8 whitespace-pre-line")}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 7vw, 100px)",
            lineHeight: "0.9",
          }}
        >
          {"Certifications &\nRecognitions"}
        </h2>
      </AnimateIn>

      <div className="flex gap-12 mt-6">
        {/* Left card */}
        <AnimateIn type="fade-up" delay={200} className="shrink-0">
          <div className="bg-white rounded-3xl p-10 shadow-sm" style={{ width: "clamp(240px, 38vw, 460px)" }}>
            <CertItem
              number="01"
              title="Certification"
              bullets={certificationBullets}
            />
            <CertItem
              number="02"
              title="Recognition"
              bullets={recognitionBullets}
            />
          </div>
        </AnimateIn>

        {/* Right overlapping images */}
        <div className="flex-1 relative min-h-[400px]">
          <AnimateIn type="scale-in" delay={350} className="absolute top-8 left-0">
            <Image
              src={`${IMAGE_BASE}875630dfd8cee5a8052f3e974bcc7f12.png`}
              alt="Certification document"
              width={600}
              height={450}
              className={cn("rounded-lg shadow-xl object-cover -rotate-[5deg]")}
              style={{ width: "70%" }}
            />
          </AnimateIn>
          <AnimateIn type="scale-in" delay={500} className="absolute top-16 right-0">
            <Image
              src={`${IMAGE_BASE}fd0697800d55617d63cfff99189564e4.jpg`}
              alt="Recognition certificate"
              width={500}
              height={375}
              className={cn("rounded-lg shadow-lg object-cover rotate-[3deg]")}
              style={{ width: "60%" }}
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

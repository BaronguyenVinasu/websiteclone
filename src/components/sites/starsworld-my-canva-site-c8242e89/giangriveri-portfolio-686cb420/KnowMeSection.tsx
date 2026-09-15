"use client";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

const IMAGE_BASE = "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

export function KnowMeSection() {
  return (
    <section
      id="know-me"
      className="min-h-screen flex items-center px-12 gap-12"
      style={{ backgroundColor: "rgb(250,217,180)" }}
    >
      {/* Left: photo */}
      <AnimateIn type="fade-right" delay={0} className="flex-1 max-w-[60%]">
        <div className="rounded-3xl overflow-hidden relative" style={{ aspectRatio: "16/10" }}>
          <Image
            src={`${IMAGE_BASE}nhat_duong_hero.jpg`}
            alt="Nhật Dương"
            fill
            className="object-cover object-top"
          />
        </div>
      </AnimateIn>

      {/* Right: title + stats */}
      <div className="flex flex-col">
        <AnimateIn type="fade-left" delay={150}>
          <h2
            className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]"
            style={{ fontSize: "clamp(60px, 12vw, 175px)" }}
          >
            Get<br />to<br />Know<br />Me
          </h2>
        </AnimateIn>
        <div className="flex gap-10 mt-8">
          <AnimateIn type="fade-up" delay={300}>
            <div>
              <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "60px" }}>182+</p>
              <p className="font-[family-name:var(--font-noto)] text-black text-lg">Classes Delivered</p>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={450}>
            <div>
              <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "60px" }}>4.5/5</p>
              <p className="font-[family-name:var(--font-noto)] text-black text-lg">Average NPS</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

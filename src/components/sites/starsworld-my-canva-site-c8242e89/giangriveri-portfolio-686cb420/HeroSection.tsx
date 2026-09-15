"use client";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-white relative">
      {/* Header row */}
      <div className="flex justify-between items-center px-[77px] pt-[60px] pb-5">
        <AnimateIn type="fade-in" delay={0}>
          <span
            className="font-[family-name:var(--font-playfair)] font-normal text-black"
            style={{ fontSize: "53.3px", letterSpacing: "-2.13px", lineHeight: "1" }}
          >
            Portfolio
          </span>
        </AnimateIn>
        <AnimateIn type="fade-in" delay={150}>
          <span
            className="font-[family-name:var(--font-playfair)] uppercase text-black tracking-[3px]"
            style={{ fontSize: "13px" }}
          >
            APPROACHING L&amp;D WITH CREATIVE MIND
          </span>
        </AnimateIn>
      </div>

      {/* Hero card */}
      <AnimateIn type="scale-in" delay={200} className="mx-[45px]">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            height: "671px",
            background: "linear-gradient(135deg, #e8a07a 0%, #d97b56 40%, #c96040 100%)",
          }}
        >
          {/* Text overlay — bottom-left */}
          <div className="absolute bottom-12 left-12 z-10">
            <AnimateIn type="fade-up" delay={500}>
              <p
                className="font-[family-name:var(--font-playfair)] italic font-bold"
                style={{ fontSize: "clamp(22px, 3.5vw, 51px)", color: "rgb(211,110,99)" }}
              >
                Trainer &amp; L&amp;D Partner
              </p>
            </AnimateIn>
            <AnimateIn type="fade-up" delay={650}>
              <h1
                className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]"
                style={{ fontSize: "clamp(80px, 13vw, 180px)" }}
              >
                Giang Bui
              </h1>
            </AnimateIn>
          </div>

          {/* Photo — right side */}
          <AnimateIn type="fade-in" delay={400} className="absolute right-0 bottom-0 h-full w-[55%]">
            <Image
              src="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/6c24ae6fc72cf5d7de7aecf4ed65ea1e.png"
              alt="Giang Bui"
              fill
              className="object-cover object-top"
              priority
            />
          </AnimateIn>
        </div>
      </AnimateIn>
    </section>
  );
}

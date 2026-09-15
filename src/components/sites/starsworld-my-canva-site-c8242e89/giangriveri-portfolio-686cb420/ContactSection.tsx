"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

const siteMapLinks = [
  "Key Projects",
  "Featured Speaking & Training",
  "Tools & Platforms",
  "Awards & Scholarships",
  "Other Activities",
];

interface ContactIconProps {
  label: string;
}

function ContactIcon({ label }: ContactIconProps) {
  return (
    <div
      className="rounded-full w-8 h-8 flex items-center justify-center text-white text-xs flex-shrink-0"
      style={{ backgroundColor: "rgb(130, 145, 60)" }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className={cn(
        "min-h-screen bg-[rgb(229,236,152)] flex flex-col px-12 py-16"
      )}
    >
      {/* CTA text */}
      <AnimateIn type="fade-up" delay={0}>
        <p
          className="italic text-gray-700 mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(16px, 2vw, 26px)",
          }}
        >
          Do not hesitate to contact me for any collaboration, speaking, or mentoring requests.
        </p>
      </AnimateIn>

      {/* White contact card */}
      <div className="bg-white rounded-3xl p-10 grid grid-cols-3 gap-10">
        {/* Col 1: Photo + name */}
        <AnimateIn type="fade-up" delay={200}>
          <div className="flex flex-col">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src={`${IMAGE_BASE}nhat_duong_hero.jpg`}
                alt="Dương Thị Nhật (Sun)"
                fill
                className="object-cover object-top"
              />
            </div>
            <p
              className="text-base mt-3 text-black"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              Dương Thị Nhật (Sun) - HR · MC · Speaker
            </p>
          </div>
        </AnimateIn>

        {/* Col 2: Site map */}
        <AnimateIn type="fade-up" delay={350}>
          <div>
            <p
              className="font-bold text-lg mb-4 text-black"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              Site Map
            </p>
            <nav>
              {siteMapLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className={cn(
                    "block mb-3 no-underline text-black text-base",
                    "hover:underline"
                  )}
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </AnimateIn>

        {/* Col 3: Connect */}
        <AnimateIn type="fade-up" delay={500}>
          <div>
            <button
              className={cn(
                "w-full border-2 rounded-lg py-4 px-6 text-base font-semibold",
                "tracking-wider bg-transparent mb-8",
                "hover:bg-[rgb(130,140,60)] hover:text-white transition-colors"
              )}
              style={{
                fontFamily: "var(--font-noto)",
                borderColor: "rgb(130, 140, 60)",
                color: "rgb(130, 140, 60)",
              }}
            >
              LET&apos;S CONNECT!
            </button>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 mb-4">
              <ContactIcon label="in" />
              <span
                className="text-base text-black"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                Dương Thị Nhật
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <ContactIcon label="@" />
              <span
                className="text-base text-black"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                duongnhat.hr@gmail.com
              </span>
            </div>

            {/* Role tag */}
            <div className="flex items-center gap-3 mb-4">
              <ContactIcon label="HR" />
              <span
                className="text-base text-black"
                style={{ fontFamily: "var(--font-noto)" }}
              >
                HR Business Partner · Trainer · MC
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Copyright */}
      <AnimateIn type="fade-in" delay={650} className="text-center mt-8">
        <p
          className="text-sm text-gray-500"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          &copy; 2026 by Dương Thị Nhật
        </p>
      </AnimateIn>

      {/* Scroll to top button */}
      <a
        href="#"
        aria-label="Scroll to top"
        className={cn(
          "fixed bottom-8 right-8 w-12 h-12",
          "border-2 border-black rounded-full bg-white",
          "flex items-center justify-center",
          "hover:bg-black hover:text-white transition-colors",
          "text-black text-xl font-bold z-50"
        )}
      >
        &#8679;
      </a>
    </section>
  );
}

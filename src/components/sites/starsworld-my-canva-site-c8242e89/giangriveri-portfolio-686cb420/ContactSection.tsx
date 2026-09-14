import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

const siteMapLinks = [
  "Key Projects",
  "Featured Training Programs",
  "E-learning creation",
  "Certifications & Recognitions",
  "Other activities",
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
      <p
        className="italic text-gray-700 mb-8"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(16px, 2vw, 26px)",
        }}
      >
        Do not hesitate to contact me to for any collaboration requests.
      </p>

      {/* White contact card */}
      <div className="bg-white rounded-3xl p-10 grid grid-cols-3 gap-10">
        {/* Col 1: Photo + name */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src={`${IMAGE_BASE}97127f0db54183c0879dfd849c04a407.jpg`}
              alt="Giang Bui (Riveri)"
              fill
              className="object-cover"
            />
          </div>
          <p
            className="text-base mt-3 text-black"
            style={{ fontFamily: "var(--font-noto)" }}
          >
            Giang Bui (Riveri) - L&D
          </p>
        </div>

        {/* Col 2: Site map */}
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

        {/* Col 3: Connect */}
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

          {/* Phone */}
          <div className="flex items-center gap-3 mb-4">
            <ContactIcon label="Ph" />
            <span
              className="text-base text-black"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              0969213298
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-4">
            <ContactIcon label="@" />
            <span
              className="text-base text-black"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              bhuonggiang98@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 mb-4">
            <ContactIcon label="in" />
            <span
              className="text-base text-black"
              style={{ fontFamily: "var(--font-noto)" }}
            >
              in/riveri-giangbui
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="text-center text-sm text-gray-500 mt-8"
        style={{ fontFamily: "var(--font-noto)" }}
      >
        &copy; 2025 by Giang Bui
      </p>

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

"use client";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Key project", href: "#key-projects" },
  { label: "Featured training program", href: "#training" },
  { label: "Certifications & Recognitions", href: "#certifications" },
  { label: "Others", href: "#others" },
  { label: "E-learning", href: "#elearning" },
];

export function Navbar({ activeSection = "Home" }: { activeSection?: string }) {
  return (
    <nav
      className="sticky top-0 z-10 w-full flex justify-end items-center gap-7 pr-10"
      style={{
        height: "48px",
        backgroundColor: "rgb(253,253,253)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={cn(
            "font-[family-name:var(--font-playfair)] text-[15px] text-[rgb(48,66,84)] no-underline hover:opacity-80 transition-opacity",
            activeSection === link.label ? "font-bold" : "font-normal"
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

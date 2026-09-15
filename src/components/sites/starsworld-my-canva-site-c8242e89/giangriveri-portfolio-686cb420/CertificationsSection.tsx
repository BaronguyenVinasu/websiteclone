"use client";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const AWARDS = [
  {
    rank: "Top 7",
    title: "HR Sandbox Competition",
    org: "The F.O.I",
    year: "2023",
  },
  {
    rank: "Top 10",
    title: "Leadership Talent Program",
    org: "Hanoi University of Foreign Languages",
    year: "2020",
  },
  {
    rank: "Top 5",
    title: "SUNWAH-GYLN Environment Ambassador",
    org: "Sunwah Global Young Leaders Network",
    year: "2019",
  },
];

const SCHOLARSHIPS = [
  {
    title: "ABG Open 08 Leadership Institute",
    type: "Leadership Scholarship",
    detail: "Full scholarship for top young leaders program",
  },
  {
    title: "YSEALI Younified 2020",
    type: "U.S. Embassy Grant",
    detail: "Emotouch project grant — CSDS & Irish Embassy collaboration",
  },
  {
    title: "Lead The Change 2019",
    type: "Exchange Program — Singapore",
    detail: "28% financial support for international leadership exchange",
  },
  {
    title: "Trade University Excellence Award",
    type: "Academic — Top Graduate (Thủ khoa)",
    detail: "HR Management specialization, English program cohort",
  },
];

const RECOGNITIONS = [
  "MB Bank Recruitment Brand Ambassador Gen 2",
  "Global Goals Youth Summit Delegate — Malaysia 2023",
  "TEDx VNUIS Media Ambassador",
  "Global Civilian MUN Delegate 2020 (1 of 30)",
  "Singapore MUN Delegate (Laos Representative) 2020",
  "ASEAN Rotaract ONE ASEAN Delegate (1 of 20)",
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="min-h-screen px-12 py-16"
      style={{ background: "linear-gradient(135deg, #e5ec98 0%, #f0f5c0 100%)" }}
    >
      <AnimateIn type="fade-in" delay={0}>
        <h2
          className={cn("font-normal text-black mb-10 whitespace-pre-line")}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 7vw, 100px)",
            lineHeight: "0.9",
          }}
        >
          {"Awards &\nRecognitions"}
        </h2>
      </AnimateIn>

      <div className="grid grid-cols-2 gap-8">
        {/* Left col: Awards + Scholarships */}
        <div className="flex flex-col gap-6">
          {/* Competition Awards */}
          <AnimateIn type="fade-up" delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="font-[family-name:var(--font-noto)] text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Competition Awards
              </p>
              <div className="space-y-5">
                {AWARDS.map((a, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="shrink-0 bg-[rgb(229,236,152)] rounded-xl flex items-center justify-center"
                      style={{ width: 52, height: 52 }}
                    >
                      <span className="font-[family-name:var(--font-noto)] text-xs font-bold text-black text-center leading-tight px-1">
                        {a.rank}
                      </span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-playfair)] text-black font-normal" style={{ fontSize: "17px" }}>
                        {a.title}
                      </p>
                      <p className="font-[family-name:var(--font-noto)] text-xs text-gray-400 mt-0.5">
                        {a.org} · {a.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Scholarships */}
          <AnimateIn type="fade-up" delay={400}>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="font-[family-name:var(--font-noto)] text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Scholarships &amp; Grants
              </p>
              <div className="space-y-5">
                {SCHOLARSHIPS.map((s, i) => (
                  <div key={i} className="border-l-4 border-[rgb(229,236,152)] pl-4">
                    <p className="font-[family-name:var(--font-playfair)] text-black font-normal" style={{ fontSize: "16px" }}>
                      {s.title}
                    </p>
                    <p className="font-[family-name:var(--font-noto)] text-xs text-[rgb(130,145,60)] font-semibold mt-0.5">
                      {s.type}
                    </p>
                    <p className="font-[family-name:var(--font-noto)] text-xs text-gray-400 mt-0.5">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Right col: Recognitions */}
        <AnimateIn type="fade-left" delay={300}>
          <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
            <p className="font-[family-name:var(--font-noto)] text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
              Ambassador &amp; Recognition Roles
            </p>
            <div className="space-y-4">
              {RECOGNITIONS.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[rgb(130,145,60)] shrink-0" />
                  <p className="font-[family-name:var(--font-noto)] text-sm text-black leading-snug">{r}</p>
                </div>
              ))}
            </div>

            {/* Big number accent */}
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <p
                className="font-[family-name:var(--font-playfair)] font-normal text-gray-100 leading-none"
                style={{ fontSize: "clamp(60px, 12vw, 160px)" }}
              >
                Sun
              </p>
              <p className="font-[family-name:var(--font-noto)] text-xs text-gray-400 -mt-4">
                Dương Thị Nhật · HR · MC · Speaker
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

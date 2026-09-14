import { cn } from "@/lib/utils";

const CARDS = [
  { title: "Training Teamwork skill", sub: "Offline in class" },
  { title: "Training Negotiation skill", sub: "Offline + Online" },
  {
    title: "Emotional Intelligence in Communication",
    sub: "Offline in class",
  },
];

export function TrainingSection() {
  return (
    <section
      id="training"
      className="min-h-screen flex flex-col px-12 py-16"
      style={{ background: "rgb(199, 222, 255)" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-baseline">
        <h2
          className="font-[family-name:var(--font-playfair)] font-normal"
          style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
        >
          Featured Training Programs
        </h2>
        <a
          href="#"
          className="font-[family-name:var(--font-noto)] text-sm underline text-black"
        >
          See more
        </a>
      </div>

      {/* Cards */}
      <div className="flex gap-6 mt-10">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={cn(
              "bg-white rounded-3xl p-10 flex-1 shadow-sm"
            )}
          >
            <h3
              className="font-[family-name:var(--font-playfair)] leading-tight font-normal"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              {card.title}
            </h3>
            <p className="font-[family-name:var(--font-noto)] text-sm text-gray-500 mt-3">
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Pill button */}
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className={cn(
            "font-[family-name:var(--font-noto)] text-base inline-block",
            "border-2 border-black rounded-full py-4 px-10 bg-transparent text-black",
            "hover:bg-black hover:text-white transition-colors"
          )}
        >
          How I design a program using Kolb&apos;s Experiential Learning Cycle
        </a>
      </div>
    </section>
  );
}

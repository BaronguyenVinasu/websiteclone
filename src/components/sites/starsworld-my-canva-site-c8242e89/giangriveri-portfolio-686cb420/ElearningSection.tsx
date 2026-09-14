import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

interface ToolItemProps {
  number: string;
  title: string;
  tool: string;
  toolName: string;
  description: string;
}

function ToolItem({ number, title, tool, toolName, description }: ToolItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div
        className="font-normal text-black"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "48px" }}
      >
        {number}
      </div>
      <div
        className="font-normal text-black mb-2"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "22px" }}
      >
        {title}
      </div>
      <p className="text-sm text-black" style={{ fontFamily: "var(--font-noto)" }}>
        <span>Tool: </span>
        <strong>{toolName}</strong>
      </p>
      <p className="text-sm text-black" style={{ fontFamily: "var(--font-noto)" }}>
        {tool}
      </p>
      <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-noto)" }}>
        {description}
      </p>
    </div>
  );
}

export function ElearningSection() {
  return (
    <section
      id="elearning"
      className="min-h-screen px-12 py-16"
      style={{
        background: "linear-gradient(180deg, #f8f8ff 0%, #ede9f5 100%)",
      }}
    >
      <h2
        className={cn("font-normal text-black mb-10")}
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(40px, 6vw, 80px)",
        }}
      >
        E-learning and Design Tools
      </h2>

      <div className="flex gap-12">
        {/* Left card */}
        <div className="bg-white rounded-3xl p-10 shadow-sm" style={{ width: "42%" }}>
          <ToolItem
            number="01"
            title="E-learning"
            toolName="Articulate, Animaker"
            tool=""
            description="Video editing, interactive learning"
          />
          <ToolItem
            number="02"
            title="LMS"
            toolName="talentLMS"
            tool=""
            description="Self-study data management on LMS"
          />
          <ToolItem
            number="03"
            title="Design"
            toolName="Canva/ Capcut for video"
            tool=""
            description="Design L&D Intranet, newsletter,..."
          />
        </div>

        {/* Right image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full">
            <Image
              src={`${IMAGE_BASE}875630dfd8cee5a8052f3e974bcc7f12.png`}
              alt="E-learning mockup screenshot"
              width={800}
              height={600}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* See more button */}
      <div className="flex justify-center mt-8">
        <button
          className={cn(
            "border-2 border-black rounded-full py-3 px-10 text-base bg-transparent",
            "hover:bg-black hover:text-white transition-colors"
          )}
          style={{ fontFamily: "var(--font-noto)" }}
        >
          See more
        </button>
      </div>
    </section>
  );
}

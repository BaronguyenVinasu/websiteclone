import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGE_BASE =
  "/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/";

const photos = [
  {
    src: `${IMAGE_BASE}82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg`,
    alt: "Training session activity",
  },
  {
    src: `${IMAGE_BASE}b501c9231f1b630fa055e4f0f1fd9bc4.jpg`,
    alt: "Training session activity",
  },
  {
    src: `${IMAGE_BASE}97127f0db54183c0879dfd849c04a407.jpg`,
    alt: "Profile photo",
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
        <button
          className="text-sm underline text-black bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "var(--font-noto)" }}
        >
          See more
        </button>
      </div>

      {/* 3-column photo grid */}
      <div className="grid grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden aspect-video"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={338}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

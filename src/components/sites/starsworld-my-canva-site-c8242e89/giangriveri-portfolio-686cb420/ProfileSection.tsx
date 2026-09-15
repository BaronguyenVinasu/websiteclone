"use client";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "rgb(250,217,180)" }}
    >
      {/* Top heading */}
      <div className="px-[60px] pt-[60px]">
        <AnimateIn type="fade-left" delay={0}>
          <h2
            className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]"
            style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          >
            Nice to<br />meet you!
          </h2>
        </AnimateIn>
      </div>

      {/* Main content: photo left, stats/skills right */}
      <div className="flex items-start gap-12 px-[60px] mt-12 pb-20">
        {/* Left: profile photo */}
        <AnimateIn type="scale-in" delay={200}>
          <div
            className="relative rounded-3xl overflow-hidden flex-shrink-0"
            style={{
              width: "clamp(240px, 30vw, 420px)",
              height: "clamp(300px, 40vw, 540px)",
              backgroundColor: "rgb(234,142,112)",
            }}
          >
            <Image
              src="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/97127f0db54183c0879dfd849c04a407.jpg"
              alt="Giang Bui profile photo"
              fill
              className="object-cover object-top"
            />
          </div>
        </AnimateIn>

        {/* Right: stats + bio + skills */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Stats row */}
          <div className="flex gap-12">
            {[["50+", "Training Courses"], ["90+", "Training Hours"], ["5+", "Years Experience"]].map(
              ([num, label], i) => (
                <AnimateIn key={label} type="fade-up" delay={300 + i * 150}>
                  <div>
                    <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                      {num}
                    </p>
                    <p className="font-[family-name:var(--font-noto)] text-black text-lg">{label}</p>
                  </div>
                </AnimateIn>
              )
            )}
          </div>

          {/* Bio */}
          <AnimateIn type="fade-up" delay={400}>
            <div>
              <p className="font-[family-name:var(--font-playfair)] italic font-bold" style={{ fontSize: "clamp(20px, 2.5vw, 36px)", color: "rgb(211,110,99)" }}>
                Hi, I am
              </p>
              <p className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]" style={{ fontSize: "clamp(60px, 8vw, 110px)" }}>
                Giang
              </p>
            </div>
          </AnimateIn>

          {/* Description */}
          <AnimateIn type="fade-up" delay={500}>
            <p className="font-[family-name:var(--font-noto)] text-black max-w-prose" style={{ fontSize: "16px", lineHeight: "1.7" }}>
              A passionate Trainer &amp; Learning and Development Partner with over 5 years of experience
              designing and delivering impactful training programs. I combine creative thinking with
              instructional design expertise to craft learning experiences that inspire and transform.
            </p>
          </AnimateIn>

          {/* Skills list */}
          <AnimateIn type="fade-up" delay={600}>
            <div>
              <p className="font-[family-name:var(--font-noto)] font-bold text-black text-lg mb-3">Core Skills</p>
              <ul className="font-[family-name:var(--font-noto)] text-black space-y-1" style={{ fontSize: "15px" }}>
                <li>• Instructional Design &amp; Curriculum Development</li>
                <li>• Facilitation &amp; Training Delivery</li>
                <li>• E-learning Development (Articulate, Rise)</li>
                <li>• Learning Needs Analysis</li>
                <li>• Training Evaluation &amp; Impact Measurement</li>
              </ul>
            </div>
          </AnimateIn>

          {/* Resume button */}
          <AnimateIn type="fade-up" delay={700}>
            <a
              href="#"
              className="inline-block font-[family-name:var(--font-noto)] font-semibold text-black"
              style={{ border: "2px solid black", borderRadius: "9999px", padding: "10px 32px", fontSize: "15px", textDecoration: "none", transition: "background-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "black"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "black"; }}
            >
              My Resume
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

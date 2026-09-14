import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-white relative">
      {/* Header row */}
      <div className="flex justify-between items-center px-[77px] pt-[60px] pb-5">
        <span
          className="font-[family-name:var(--font-playfair)] font-normal text-black"
          style={{ fontSize: "53.3px", letterSpacing: "-2.13px", lineHeight: "1" }}
        >
          Portfolio
        </span>
        <span
          className="font-[family-name:var(--font-playfair)] uppercase text-black tracking-[3px]"
          style={{ fontSize: "13px" }}
        >
          APPROACHING L&amp;D WITH CREATIVE MIND
        </span>
      </div>

      {/* Hero card */}
      <div
        className="relative mx-[45px] rounded-3xl overflow-hidden"
        style={{ height: "671px" }}
      >
        {/* Background image (coral gradient + shapes) */}
        <Image
          src="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/6425b363f6cb75c818126dae0a4a4477.png"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Text overlay — bottom-left */}
        <div className="absolute bottom-12 left-12 z-10">
          <p
            className="font-[family-name:var(--font-playfair)] italic font-bold"
            style={{ fontSize: "clamp(22px, 3.5vw, 51px)", color: "rgb(211,110,99)" }}
          >
            Trainer &amp; L&amp;D Partner
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]"
            style={{ fontSize: "clamp(80px, 13vw, 180px)" }}
          >
            Giang Bui
          </h1>
        </div>

        {/* Photo — right side */}
        <div className="absolute right-0 bottom-0 h-full" style={{ width: "55%" }}>
          <Image
            src="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/6c24ae6fc72cf5d7de7aecf4ed65ea1e.png"
            alt="Giang Bui"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}

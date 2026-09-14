export function KnowMeSection() {
  return (
    <section
      id="know-me"
      className="min-h-screen flex items-center px-12 gap-12"
      style={{ backgroundColor: "rgb(250,217,180)" }}
    >
      {/* Left: video */}
      <div className="flex-1 max-w-[60%]">
        <div className="rounded-3xl border-4 border-black bg-black overflow-hidden">
          <video
            src="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/videos/8ded250fc74d0748c68f4bf427fc510b.mp4"
            poster="/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420/images/ec8f53e05757922416796cc73f347a3c.jpg"
            controls
            className="w-full aspect-video"
          />
        </div>
      </div>

      {/* Right: title + stats */}
      <div className="flex flex-col">
        <h2
          className="font-[family-name:var(--font-playfair)] font-normal text-black leading-[0.85]"
          style={{ fontSize: "clamp(60px, 12vw, 175px)" }}
        >
          Get<br />to<br />Know<br />Me
        </h2>
        <div className="flex gap-10 mt-8">
          <div>
            <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "60px" }}>50+</p>
            <p className="font-[family-name:var(--font-noto)] text-black text-lg">Training Courses</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-noto)] font-bold text-black" style={{ fontSize: "60px" }}>90+</p>
            <p className="font-[family-name:var(--font-noto)] text-black text-lg">Training Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
      eyebrowRef.current,
      headingRef.current,
      dividerRef.current,
      paraRef.current,
      btnRef.current,
    ];

    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1
          ref={headingRef}
          className="font-(family-name:--font-dancing-script) text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] sm:leading-[1.1] text-cream px-2"
        >
          Coffee from the <em className="not-italic text-amber-300">origin</em>
          <br className="block" /> to your table
        </h1>

        {/* <h1
          ref={headingRef}
          className="font-(family-name:--font-dancing-script) text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] sm:leading-[1.1] text-cream px-2"
        >
          Coffee From The <em className="not-italic text-amber-300">Origin</em>
          <br className="block" /> To Your Table
        </h1> */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <div className="h-8 w-px bg-linear-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { businessConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(imgRef.current, { x: -60, opacity: 0, duration: 1 })
        .from(textRef.current, { x: 60, opacity: 0, duration: 1 }, "-=0.7");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-24 md:py-32 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div ref={imgRef} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={businessConfig.storyImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div ref={textRef}>
            <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
              La Nostra Storia
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {businessConfig.storyTitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              {businessConfig.storyText}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-brand-accent">
                  {businessConfig.yearsInBusiness}+
                </p>
                <p className="text-sm text-white/60">Anni</p>
              </div>
              <div className="w-px h-12 bg-brand-dark/10" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-brand-accent">
                  {businessConfig.reviewCount}+
                </p>
                <p className="text-sm text-white/60">Recensioni</p>
              </div>
              <div className="w-px h-12 bg-brand-dark/10" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-brand-accent">
                  {businessConfig.rating}
                </p>
                <p className="text-sm text-white/60">Valutazione</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

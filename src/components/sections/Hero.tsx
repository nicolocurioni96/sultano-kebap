"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { businessConfig } from "@/lib/config";
import { MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1.2 })
        .from(taglineRef.current, { y: 40, opacity: 0, duration: 1 }, "-=0.7")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src={businessConfig.heroImage}
          alt={`${businessConfig.name} hero`}
          className="w-full h-[130%] object-cover -mt-[15%]"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
          {businessConfig.city}
        </p>
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {businessConfig.name}
        </h1>
        <p
          ref={taglineRef}
          className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto"
        >
          {businessConfig.tagline}
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${businessConfig.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Chiama Ora
          </a>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/60 text-white hover:bg-white/10 hover:border-white/80 font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
          >
            <MapPin className="w-5 h-5" />
            Indicazioni Stradali
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

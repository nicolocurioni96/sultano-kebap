"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { businessConfig } from "@/lib/config";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Visit() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="visit"
      className="py-24 md:py-32 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
              Vieni a Trovarci
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Contattaci
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Indirizzo</p>
                  <p className="text-white/60">{businessConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Orari</p>
                  {businessConfig.hours.map((h: string, i: number) => (
                    <p key={i} className="text-white/60">{h}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefono</p>
                  <a
                    href={`tel:${businessConfig.phone.replace(/\D/g, "")}`}
                    className="text-brand-accent hover:underline"
                  >
                    {businessConfig.phone}
                  </a>
                </div>
              </div>

              {businessConfig.email && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-brand-accent hover:underline"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-semibold px-8 py-4 rounded-full mt-10 transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5" />
              Apri in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
            <iframe
              title="Map"
              src={businessConfig.mapEmbedUrl}
              className="w-full h-full min-h-[400px] rounded-2xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

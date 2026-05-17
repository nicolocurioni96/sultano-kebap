"use client";

import { businessConfig } from "@/lib/config";

export default function Specialties() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
            Cosa Offriamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {businessConfig.specialtiesIntro}
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {businessConfig.specialties.map((item, index) => (
            <div
              key={index}
              className="specialty-card group bg-white rounded-2xl p-8 border border-brand-dark/5 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-brand-dark/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

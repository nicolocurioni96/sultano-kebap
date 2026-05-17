"use client";

import { businessConfig } from "@/lib/config";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = businessConfig;
  const hasSocial = social && (social.instagram || social.facebook);

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              {businessConfig.name}
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              {businessConfig.tagline}
            </p>
            {hasSocial && (
              <div className="flex items-center gap-4">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Contatti
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${businessConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-white/80 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                {businessConfig.phone}
              </a>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-brand-accent transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {businessConfig.address}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Orari
            </h4>
            <div className="space-y-1">
              {businessConfig.hours.map((h: string, i: number) => (
                <p key={i} className="text-white/60 text-sm">{h}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            {currentYear} {businessConfig.name}. Tutti i diritti riservati.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with care by withnico
          </p>
        </div>
      </div>
    </footer>
  );
}

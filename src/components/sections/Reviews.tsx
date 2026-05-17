"use client";

import { businessConfig } from "@/lib/config";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-brand-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
            Testimonianze
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(businessConfig.rating)
                      ? "text-brand-accent fill-brand-accent"
                      : "text-white/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold ml-2">
              {businessConfig.rating} / 5
            </span>
            <span className="text-white/50 text-sm ml-2">
              ({businessConfig.reviewCount} recensioni)
            </span>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {businessConfig.reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-accent/40 mb-4" />
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.stars
                        ? "text-brand-accent fill-brand-accent"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-display font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {review.author}
                  </p>
                  <p className="text-white/40 text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

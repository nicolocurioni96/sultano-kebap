"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { businessConfig } from "@/lib/config";
import { Calendar, Clock, Users, Phone, User, Car, MessageSquare, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Booking() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const cfg = businessConfig as typeof businessConfig & { category?: string; bookingUrl?: string };
  const category = cfg.category || "general";
  const bookingUrl = cfg.bookingUrl || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Real booking link
  if (bookingUrl) {
    return (
      <section ref={sectionRef} id="booking" className="py-20 md:py-28 bg-brand-dark">
        <div ref={contentRef} className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">
            Prenotazione
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Prenota il Tuo Appuntamento
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Scegli il servizio, l&apos;orario che preferisci e prenota in pochi click.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-semibold px-10 py-5 rounded-full text-lg transition-all hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Prenota Online
          </a>
          <p className="text-white/40 text-sm mt-6">
            Sarai reindirizzato alla piattaforma di prenotazione ufficiale
          </p>
        </div>
      </section>
    );
  }

  // Dummy booking form by category
  const getFormFields = () => {
    switch (category) {
      case "barbershop":
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-accent" /> Servizio
              </label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                <option value="" className="bg-brand-dark">Seleziona un servizio</option>
                <option value="taglio" className="bg-brand-dark">Taglio Uomo</option>
                <option value="barba" className="bg-brand-dark">Barba e Baffi</option>
                <option value="taglio-barba" className="bg-brand-dark">Taglio + Barba</option>
                <option value="colore" className="bg-brand-dark">Colorazione</option>
                <option value="trattamento" className="bg-brand-dark">Trattamento Viso</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Data
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-accent" /> Orario
                </label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="" className="bg-brand-dark">Seleziona</option>
                  <option value="09:00" className="bg-brand-dark">09:00</option>
                  <option value="10:00" className="bg-brand-dark">10:00</option>
                  <option value="11:00" className="bg-brand-dark">11:00</option>
                  <option value="12:00" className="bg-brand-dark">12:00</option>
                  <option value="15:00" className="bg-brand-dark">15:00</option>
                  <option value="16:00" className="bg-brand-dark">16:00</option>
                  <option value="17:00" className="bg-brand-dark">17:00</option>
                  <option value="18:00" className="bg-brand-dark">18:00</option>
                </select>
              </div>
            </div>
          </>
        );
      case "restaurant":
      case "pizzeria":
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-accent" /> Numero Ospiti
                </label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="" className="bg-brand-dark">Seleziona</option>
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n} className="bg-brand-dark">{n} {n === 1 ? "persona" : "persone"}</option>
                  ))}
                  <option value="9+" className="bg-brand-dark">9+ persone</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Data
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-accent" /> Orario
              </label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                <option value="" className="bg-brand-dark">Seleziona</option>
                <option value="12:00" className="bg-brand-dark">12:00</option>
                <option value="12:30" className="bg-brand-dark">12:30</option>
                <option value="13:00" className="bg-brand-dark">13:00</option>
                <option value="13:30" className="bg-brand-dark">13:30</option>
                <option value="19:00" className="bg-brand-dark">19:00</option>
                <option value="19:30" className="bg-brand-dark">19:30</option>
                <option value="20:00" className="bg-brand-dark">20:00</option>
                <option value="20:30" className="bg-brand-dark">20:30</option>
                <option value="21:00" className="bg-brand-dark">21:00</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-accent" /> Note / Occasione
              </label>
              <textarea rows={3} placeholder="Allergie, occasioni speciali, richieste..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none" />
            </div>
          </>
        );
      case "bakery":
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-accent" /> Cosa Desideri Ordinare
              </label>
              <textarea required rows={3} placeholder="Pane, dolci, torte su misura..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Data Ritiro
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-accent" /> Orario Ritiro
                </label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="" className="bg-brand-dark">Seleziona</option>
                  <option value="08:00" className="bg-brand-dark">08:00</option>
                  <option value="09:00" className="bg-brand-dark">09:00</option>
                  <option value="10:00" className="bg-brand-dark">10:00</option>
                  <option value="11:00" className="bg-brand-dark">11:00</option>
                  <option value="12:00" className="bg-brand-dark">12:00</option>
                  <option value="16:00" className="bg-brand-dark">16:00</option>
                  <option value="17:00" className="bg-brand-dark">17:00</option>
                  <option value="18:00" className="bg-brand-dark">18:00</option>
                </select>
              </div>
            </div>
          </>
        );
      case "mechanic":
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Car className="w-4 h-4 text-brand-accent" /> Modello Veicolo
              </label>
              <input required type="text" placeholder="Es. Fiat Panda 1.2 2020" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-accent" /> Tipo di Servizio
              </label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                <option value="" className="bg-brand-dark">Seleziona</option>
                <option value="tagliando" className="bg-brand-dark">Tagliando</option>
                <option value="revisione" className="bg-brand-dark">Revisione</option>
                <option value="gomme" className="bg-brand-dark">Cambio Gomme</option>
                <option value="freni" className="bg-brand-dark">Freni</option>
                <option value="elettrauto" className="bg-brand-dark">Elettrauto</option>
                <option value="diagnosi" className="bg-brand-dark">Diagnosi</option>
                <option value="altro" className="bg-brand-dark">Altro</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Data
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-accent" /> Orario
                </label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                  <option value="" className="bg-brand-dark">Seleziona</option>
                  <option value="08:00" className="bg-brand-dark">08:00</option>
                  <option value="09:00" className="bg-brand-dark">09:00</option>
                  <option value="10:00" className="bg-brand-dark">10:00</option>
                  <option value="11:00" className="bg-brand-dark">11:00</option>
                  <option value="14:00" className="bg-brand-dark">14:00</option>
                  <option value="15:00" className="bg-brand-dark">15:00</option>
                  <option value="16:00" className="bg-brand-dark">16:00</option>
                  <option value="17:00" className="bg-brand-dark">17:00</option>
                </select>
              </div>
            </div>
          </>
        );
      case "misc": // B&B
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Check-in
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-accent" /> Check-out
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-accent" /> Numero Ospiti
              </label>
              <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors">
                <option value="" className="bg-brand-dark">Seleziona</option>
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n} className="bg-brand-dark">{n} {n === 1 ? "ospite" : "ospiti"}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-accent" /> Note
              </label>
              <textarea rows={3} placeholder="Richieste speciali, arrivo tardivo..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none" />
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-accent" /> Nome
                </label>
                <input required type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-accent" /> Telefono
                </label>
                <input required type="tel" placeholder="+39 3xx xxx xxxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-accent" /> Data
              </label>
              <input required type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors" />
            </div>
          </>
        );
    }
  };

  if (submitted) {
    return (
      <section ref={sectionRef} id="booking" className="py-20 md:py-28 bg-brand-dark">
        <div ref={contentRef} className="max-w-xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Grazie per la Richiesta!
          </h2>
          <p className="text-white/70 text-lg">
            Ti contatteremo al più presto per confermare la tua prenotazione.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="booking" className="py-20 md:py-28 bg-brand-dark">
      <div ref={contentRef} className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">
            Prenotazione
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Prenota Ora
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            Compila il modulo e ti contatteremo per confermare il tuo appuntamento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {getFormFields()}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-semibold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5 mt-4"
          >
            <Calendar className="w-5 h-5" />
            Invia Richiesta
          </button>
          <p className="text-white/40 text-sm text-center">
            La prenotazione sarà confermata telefonicamente o via WhatsApp
          </p>
        </form>
      </div>
    </section>
  );
}

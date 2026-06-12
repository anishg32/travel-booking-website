import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "The glass cabin in Zermatt rewrote what I thought a mountain stay could be. Waking up beneath the Matterhorn, with breakfast hand-delivered through the snow.", name: "Olivia Reyes", role: "Architect, NYC", initials: "OR" },
  { quote: "Every detail — from the fireplace ritual at dusk to the sommelier who appeared at exactly the right moment — was Apple-level perfection.", name: "Hiro Tanaka", role: "Founder, Tokyo", initials: "HT" },
  { quote: "Six countries with Willow House Retreats and not a single misstep. They've quietly become my only travel concierge.", name: "Sophia Lindqvist", role: "Editor, Vogue Scandinavia", initials: "SL" },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Guest Stories</p>
            <h2
              id="testimonials-heading"
              className="mt-4 font-display text-4xl text-balance sm:text-5xl lg:text-6xl"
            >
              Words from
              <span className="italic text-ink/70"> the summit</span>.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink/70">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span><span className="text-ink">4.92</span> avg · 1,256 stays</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass flex flex-col rounded-3xl p-7 transition-[transform,background-color] duration-500 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8 motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                <div className="flex" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-snug text-balance sm:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass-strong text-xs font-medium text-accent"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm">{t.name}</div>
                  <div className="truncate text-xs text-ink/60">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4"
        >
          {[
            { k: "Featured in", v: "Condé Nast · Vogue · Monocle" },
            { k: "Trust score", v: "9.7 / 10" },
            { k: "Repeat guests", v: "68%" },
            { k: "Concierge response", v: "Under 4 minutes" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl px-4 py-4 text-center">
              <div className="text-[10px] uppercase tracking-widest text-ink/50">{s.k}</div>
              <div className="mt-1.5 text-sm text-ink/90">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

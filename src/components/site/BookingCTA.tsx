import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import norway from "@/assets/norway.jpg";

export function BookingCTA() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] glass-strong sm:rounded-[2.5rem]"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={norway}
              alt=""
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="h-full w-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deeper via-deeper/85 to-deeper/20" />
          </div>

          <div className="relative grid items-center gap-10 p-8 sm:gap-12 sm:p-12 md:p-16 lg:grid-cols-2 lg:p-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Your retreat awaits</p>
              <h2
                id="book-heading"
                className="mt-4 font-display text-4xl text-balance sm:text-5xl lg:text-6xl"
              >
                The mountains are
                <br />
                <span className="italic text-accent">calling</span>.
              </h2>
              <p className="mt-5 max-w-md text-ink/75">
                Speak with a Willow House Retreats concierge to design your bespoke escape — from heli-transfers to private chefs,
                every detail handled.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-deeper transition-all duration-300 hover:bg-accent-soft hover:gap-3 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deeper glow-amber"
                >
                  Plan my retreat
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm text-ink/70 transition-colors hover:text-accent focus-visible:text-accent"
                >
                  Or message concierge
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-3 sm:gap-4 lg:ml-auto">
              {[
                { k: "70+", v: "Curated retreats" },
                { k: "7", v: "Countries" },
                { k: "24/7", v: "Concierge" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="glass rounded-2xl p-4 text-center transition-transform duration-500 hover:-translate-y-0.5 sm:p-5 motion-reduce:hover:translate-y-0"
                >
                  <dt className="sr-only">{s.v}</dt>
                  <dd className="font-display text-2xl text-accent sm:text-3xl">{s.k}</dd>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-ink/60 sm:text-[11px]" aria-hidden="true">
                    {s.v}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

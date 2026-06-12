import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import { destinations, formatPrice } from "@/lib/destinations";

export function Destinations() {
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured Destinations</p>
            <h2
              id="destinations-heading"
              className="mt-4 max-w-2xl font-display text-4xl text-balance sm:text-5xl lg:text-6xl"
            >
              Seven countries.
              <br />
              <span className="italic text-ink/70">Endless wonder.</span>
            </h2>
          </div>
          <a
            href="#book"
            className="group inline-flex items-center gap-1 text-sm text-ink/70 transition-colors hover:text-accent focus-visible:text-accent"
          >
            View all retreats
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] hover:border-white/20 motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} — luxury retreat in ${d.region}, ${d.country}`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full scale-[1.02] object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-110 motion-reduce:transform-none"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deeper/90 via-deeper/40 to-transparent transition-opacity duration-700 group-hover:from-deeper" />
                {/* Subtle sheen on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-1 -top-1/2 h-[200%] translate-y-[-40%] rotate-12 bg-gradient-to-b from-white/0 via-white/[0.06] to-white/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:hidden"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-white ring-1 ring-white/20 shadow-lg">
                  {d.country}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 text-xs text-white ring-1 ring-white/20 shadow-lg">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  <span className="sr-only">Rated </span>{d.rating}
                  <span className="sr-only"> out of 5</span>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-display text-3xl leading-tight text-white transition-colors group-hover:text-accent">{d.name}</h3>
                <p className="mt-1.5 text-sm text-ink/70">{d.region}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Amenities">
                  {d.amenities.slice(0, 3).map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-ink/80 transition-colors group-hover:bg-white/[0.08]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-5 transition-colors group-hover:border-white/20">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-ink/60">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      Up to {d.guests} guests · {d.reviews} reviews
                    </div>
                    <div className="mt-2 font-display text-2xl text-accent">
                      <span className="mr-1.5 align-middle font-body text-[10px] uppercase tracking-widest text-ink/50">From</span>
                      {formatPrice(d.price)}
                      <span className="text-xs font-body text-ink/50"> / night</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Reserve ${d.name}`}
                    className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-accent hover:text-deeper focus-visible:bg-accent focus-visible:text-deeper ring-1 ring-white/20 hover:ring-accent"
                  >
                    Reserve
                    <span aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Flame, Snowflake, Waves, Sparkles } from "lucide-react";

const experiences = [
  { icon: Flame, title: "Fireside Evenings", text: "Curated whisky tastings beside crackling pine fires, with private sommeliers from local distilleries." },
  { icon: Snowflake, title: "Heli-Powder Days", text: "Private heli-skiing across untouched glacier basins, guided by world-record alpinists." },
  { icon: Waves, title: "Glacial Hot Springs", text: "Cedar onsens, mineral pools, and northern-light saunas tucked into the wilderness." },
  { icon: Sparkles, title: "Aurora Suppers", text: "Multi-course dining under the lights with chefs flown in from Copenhagen and Kyoto." },
];

export function Experiences() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Interactive Experiences</p>
          <h2
            id="experiences-heading"
            className="mt-4 font-display text-4xl text-balance sm:text-5xl lg:text-6xl"
          >
            Designed around the moments
            <span className="italic text-accent"> that linger</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group glass relative overflow-hidden rounded-3xl p-7 transition-[transform,background-color,border-color] duration-500 hover:-translate-y-1 hover:bg-white/[0.08] motion-reduce:hover:translate-y-0"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
              />
              <e.icon
                className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 font-display text-2xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

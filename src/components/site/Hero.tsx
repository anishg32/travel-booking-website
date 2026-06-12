import { motion, useScroll, useTransform, useReducedMotion, animate } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { CalendarDays, MapPin, Users, ArrowRight, Minus, Plus, Star, Globe, Home } from "lucide-react";
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/swiss.jpg";

const COUNTRIES = ["Switzerland", "Japan", "Canada", "Norway", "Scotland", "USA", "New Zealand"] as const;

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.1]);

  const [destination, setDestination] = useState<string>("Switzerland");
  const [guests, setGuests] = useState(2);

  const destId = useId();
  const inId = useId();
  const outId = useId();

  // Pause hero video when offscreen to save CPU/battery.
  useEffect(() => {
    const v = videoRef.current;
    const el = ref.current;
    if (!v || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Willow House Retreats hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0 bg-black" aria-hidden="true">
        <motion.video
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          className="h-full w-full object-cover opacity-90"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>

      {/* Gradient overlays for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-deeper/75 via-deeper/40 to-deeper" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deeper/85 via-deeper/45 to-transparent" aria-hidden="true" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-end gap-10 px-4 pb-24 pt-28 sm:px-6 sm:pb-20 lg:items-center lg:pb-0 lg:pt-0"
      >
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
              Winter 2026 collection
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.45, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[2.75rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Where the wild
              <br />
              becomes
              <span className="italic text-accent"> yours</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 max-w-md text-base text-ink/80 sm:text-lg leading-relaxed"
            >
              Handpicked luxury mountain retreats across seven countries. Glass lodges, hidden cabins, alpine castles —
              curated for those who seek the extraordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/10 pt-6"
            >
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display text-white"><AnimatedCounter from={0} to={50} />+</span>
                <span className="text-[10px] uppercase tracking-widest text-ink/60 flex items-center gap-1.5"><Home className="w-3.5 h-3.5 text-accent"/> Luxury Lodges</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display text-white"><AnimatedCounter from={0} to={20} />+</span>
                <span className="text-[10px] uppercase tracking-widest text-ink/60 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent"/> Countries</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-display text-white"><AnimatedCounter from={0} to={4.9} decimals={1} />★</span>
                <span className="text-[10px] uppercase tracking-widest text-ink/60 flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-accent"/> Guest Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Booking card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:ml-auto lg:max-w-md mt-12 lg:mt-0"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Search retreats"
              className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all hover:bg-white/5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.6)] group/card"
            >
              <div className="pointer-events-none absolute -inset-px rounded-3xl border border-white/20 transition-all group-hover/card:border-white/30" />
              <div className="flex items-baseline justify-between relative z-10">
                <h2 className="font-display text-2xl tracking-tight text-white">Begin your escape</h2>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">Live</span>
              </div>
              <p className="mt-1.5 text-sm text-ink/70 relative z-10">Find your perfect retreat in seconds.</p>

              <div className="mt-8 space-y-4 relative z-10">
                <Field id={destId} icon={<MapPin className="h-4 w-4" aria-hidden="true" />} label="Destination">
                  <select
                    id={destId}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c} className="bg-deeper text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field id={inId} icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />} label="Check-in">
                    <input
                      id={inId}
                      type="date"
                      defaultValue="2026-02-11"
                      className="w-full bg-transparent text-white outline-none [color-scheme:dark] cursor-pointer"
                    />
                  </Field>
                  <Field id={outId} icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />} label="Check-out">
                    <input
                      id={outId}
                      type="date"
                      defaultValue="2026-02-18"
                      className="w-full bg-transparent text-white outline-none [color-scheme:dark] cursor-pointer"
                    />
                  </Field>
                </div>

                <div className="block rounded-2xl bg-white/5 px-5 py-3.5 ring-1 ring-white/10 transition-all hover:bg-white/10 focus-within:ring-accent/50 focus-within:bg-white/10">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink/70">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Guests
                  </div>
                  <div className="mt-2 flex items-center justify-between text-base text-white">
                    <span aria-live="polite">{guests} {guests === 1 ? "guest" : "guests"}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease guests"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent text-white"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        aria-label="Increase guests"
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent text-white"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="relative z-10 group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-4 text-sm font-semibold text-deeper transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deeper active:scale-[0.98]"
              >
                Search retreats
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <p className="mt-4 text-center text-[11px] uppercase tracking-wide text-ink/50 relative z-10">No fees · Free cancellation up to 30 days</p>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#destinations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink/60 transition-colors hover:text-accent focus-visible:text-accent sm:text-xs"
        aria-label="Scroll to destinations"
      >
        <span>Scroll</span>
        <span aria-hidden="true" className="block h-8 w-px bg-gradient-to-b from-ink/60 to-transparent motion-safe:animate-pulse" />
      </motion.a>
    </section>
  );
}

function Field({
  id,
  icon,
  label,
  children,
}: {
  id?: string;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block rounded-2xl bg-white/5 px-5 py-3.5 ring-1 ring-white/10 transition-all hover:bg-white/10 focus-within:ring-accent/50 focus-within:bg-white/10 cursor-pointer">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink/70">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-base text-white">{children}</div>
    </label>
  );
}

function AnimatedCounter({ from, to, duration = 2, decimals = 0 }: { from: number, to: number, duration?: number, decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals]);

  return <span ref={nodeRef} />;
}

import { motion } from "framer-motion";
import { Menu, Mountain, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#book" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-3 max-w-7xl px-4 sm:mt-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-out sm:px-6 sm:py-3.5 ${
            scrolled 
              ? "bg-deeper/40 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/15" 
              : "bg-transparent ring-1 ring-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-3 text-ink transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full" aria-label="Willow House Retreats home">
            <Mountain className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="font-display text-xl font-medium tracking-wide">Willow House Retreats</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-ink/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="hidden sm:inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-deeper transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deeper"
            >
              Book Stay
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full glass text-ink md:hidden"
            >
              {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            id="mobile-nav"
            aria-label="Mobile"
            className="mt-3 rounded-3xl bg-deeper/80 backdrop-blur-2xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/15 md:hidden"
          >
            <ul className="flex flex-col gap-1.5 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-5 py-3.5 text-ink/90 transition-all hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 sm:hidden">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-accent px-5 py-4 text-center text-sm font-semibold text-deeper transition-all hover:bg-white"
                >
                  Book Stay
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

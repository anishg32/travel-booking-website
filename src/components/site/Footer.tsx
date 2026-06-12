import { ArrowRight, Mountain } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mountain className="h-6 w-6 text-accent" aria-hidden="true" />
              <span className="font-display text-2xl font-medium tracking-wide">Willow House Retreats</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
              Handpicked luxury mountain retreats across seven countries. Designed for those who chase quiet,
              architecture, and altitude.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mt-6 max-w-sm"
              aria-label="Subscribe to the Willow House Retreats journal"
            >
              <label htmlFor="newsletter" className="text-[10px] uppercase tracking-widest text-ink/50">
                The Journal — monthly dispatches
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full glass py-1.5 pl-4 pr-1.5 transition focus-within:ring-2 focus-within:ring-accent/60">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-deeper transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deeper"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-2 min-h-[1rem] text-xs text-ink/55" aria-live="polite">
                {submitted ? "Welcome. Your first dispatch arrives soon." : "No spam. Unsubscribe anytime."}
              </p>
            </form>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-ink/50">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Destinations", href: "#destinations" },
                { label: "Experiences", href: "#experiences" },
                { label: "Stories", href: "#testimonials" },
                { label: "Concierge", href: "#book" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ink/80 transition-colors hover:text-accent focus-visible:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-ink/50">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Press", "Careers", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-ink/80 transition-colors hover:text-accent focus-visible:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-ink/50">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li>
                <a href="mailto:beswinjo70@gmail.com" className="transition-colors hover:text-accent focus-visible:text-accent">
                  beswinjo70@gmail.com
                </a>
                <span className="block text-[10px] uppercase tracking-widest text-ink/50 mt-1">Primary Concierge</span>
              </li>
              <li>
                <a href="mailto:anishff976@gmail.com" className="transition-colors hover:text-accent focus-visible:text-accent">
                  anishff976@gmail.com
                </a>
                <span className="block text-[10px] uppercase tracking-widest text-ink/50 mt-1">Support</span>
              </li>
              <li className="pt-2 text-ink/55">24/7 · Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Willow House Retreats. Where the wild becomes yours.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">Privacy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms</a>
            <a href="#" className="transition-colors hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

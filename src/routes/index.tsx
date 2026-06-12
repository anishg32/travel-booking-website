import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";

// Defer below-the-fold sections so the Hero can paint and become interactive faster.
const Destinations = lazy(() =>
  import("@/components/site/Destinations").then((m) => ({ default: m.Destinations })),
);
const Experiences = lazy(() =>
  import("@/components/site/Experiences").then((m) => ({ default: m.Experiences })),
);
const Testimonials = lazy(() =>
  import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const BookingCTA = lazy(() =>
  import("@/components/site/BookingCTA").then((m) => ({ default: m.BookingCTA })),
);
const Footer = lazy(() =>
  import("@/components/site/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Willow House Retreats — Luxury Mountain Retreats & Alpine Cabins" },
      {
        name: "description",
        content: "Luxury mountain retreats and unforgettable travel experiences around the world.",
      },
      { name: "theme-color", content: "#0b1226" },
      { property: "og:title", content: "Willow House Retreats — Nature's Perfect Hideaways" },
      { property: "og:description", content: "Luxury mountain retreats and unforgettable travel experiences around the world." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Willow House Retreats" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Willow House Retreats — Luxury Mountain Retreats" },
      {
        name: "twitter:description",
        content: "Luxury mountain retreats and unforgettable travel experiences around the world.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Willow House Retreats",
          description: "Luxury mountain retreats and unforgettable travel experiences around the world.",
          areaServed: ["Japan", "Switzerland", "Canada", "USA", "Scotland", "Norway", "New Zealand"],
        }),
      },
    ],
  }),
  component: Index,
});

function SectionFallback() {
  return <div aria-hidden="true" className="h-[60vh]" />;
}

function Index() {
  return (
    <main className="relative min-h-[100svh] overflow-x-hidden bg-deeper text-ink">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-deeper via-dark to-deeper" />
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-3xl" />
      </div>
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Destinations />
          <Experiences />
          <Testimonials />
          <BookingCTA />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

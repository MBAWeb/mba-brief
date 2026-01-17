"use client";

import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsRow } from "./components/StatsRow";
import { PricingCards } from "./components/PricingCards";

const navItems = [
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Proof" },
  { id: "pricing", label: "Pricing" },
];

const features = [
  { title: "Smart summaries", desc: "Get a clean overview in one click—no rereading required." },
  { title: "Action items", desc: "Automatically pulls next steps so nothing gets missed." },
  { title: "Key moments", desc: "Captures decisions, risks, and open questions." },
  { title: "Tone controls", desc: "Choose quick, standard, or detailed output." },
  { title: "Export anywhere", desc: "Copy, Markdown, or share a link with your team." },
  { title: "Privacy-first workflow", desc: "Designed with safe defaults and minimal data exposure." },
];

const stats = [
  { value: "12,000+", label: "summaries generated" },
  { value: "4.8/5", label: "average rating" },
  { value: "30s", label: "average time saved per doc" },
  { value: "99.9%", label: "uptime (concept)" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    per: "",
    tagline: "Great for trying it out",
    features: ["10 summaries / month", "Copy export", "Basic tone controls"],
    cta: "Start free",
    featured: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$12",
    per: "/mo",
    tagline: "For students and professionals",
    features: ["Unlimited summaries", "Action item detection", "Share links + Markdown export"],
    cta: "Go Pro",
    featured: true,
    badge: "Best value",
  },
  {
    name: "Team",
    price: "$24",
    per: "/mo",
    tagline: "For teams that collaborate",
    features: ["Shared workspaces", "Admin controls", "Priority support"],
    cta: "Contact sales",
    featured: false,
    badge: null,
  },
];


function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Get your time back.
              </h2>
              <p className="mt-3 text-white/70">
                Start with your next document. MBA Brief will summarize it into clear
                takeaways and next steps.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {[
                  "Fast summaries in seconds",
                  "Action items you can actually use",
                  "Export to copy or Markdown",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email capture UI (optional, but great for portfolios) */}
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm font-medium">Try the concept demo</p>
              <p className="mt-1 text-sm text-white/70">
                Enter an email to get a “magic link” (concept UI only).
              </p>

              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                >
                  Get access
                </button>
              </form>

              <p className="mt-3 text-xs text-white/50">
                Concept project by MBA Web Studio. No data is actually submitted.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} MBA Web Studio • MBA Brief (Concept)</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#top">
                Back to top
              </a>
              <a className="hover:text-white" href="/projects/mba-brief">
                /projects/mba-brief
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}

function PlaceholderSection({ id, title, text }) {
  return (
    <section id={id} className="py-16">
      <Container>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-white/70">{text}</p>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar navItems={navItems} />
      <Hero />
      <FeaturesGrid features={features} />
      <StatsRow stats={stats} />
      <PricingCards pricingPlans={pricingPlans} />
      <FinalCTA />

    </main>
  );
}
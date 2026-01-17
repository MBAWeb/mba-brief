"use client";

import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

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
    sub: "Great for trying it out",
    features: ["10 summaries / month", "Copy export", "Basic tone controls"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    sub: "For students and professionals",
    features: ["Unlimited summaries", "Action item detection", "Share links + Markdown export"],
    cta: "Go Pro",
    featured: true, // we’ll style this one as the “best value”
  },
  {
    name: "Team",
    price: "$24",
    sub: "For teams that collaborate",
    features: ["Shared workspaces", "Admin controls", "Priority support"],
    cta: "Contact sales",
    featured: false,
  },
];

function FeaturesGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Built to turn content into action
          </h2>
          <p className="mt-3 text-white/70">
            MBA Brief focuses on clarity: fast summaries, clean takeaways, and actionable next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatsRow() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Trusted for clarity
            </h2>
            <p className="mt-3 text-white/70">
              A simple proof section that reinforces credibility without distracting from the product.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="text-2xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-white/50">*Concept metrics for portfolio demonstration.</p>
        </div>
      </Container>
    </section>
  );
}

function PricingCards() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-3 text-white/70">
            Choose a plan that fits your workflow. Upgrade anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "rounded-2xl border p-6",
                plan.featured
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{plan.sub}</p>
                </div>

                {plan.featured && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                    Best value
                  </span>
                )}
              </div>

              <div className="mt-6">
                <p className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                  <span className="text-base font-medium text-white/60">
                    {plan.name === "Free" ? "" : "/mo"}
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={[
                  "mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium",
                  plan.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                {plan.cta}
              </a>

              <p className="mt-3 text-xs text-white/50">
                Concept pricing for portfolio demonstration.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
      <FeaturesGrid />
      <StatsRow />
      <PricingCards />
      <FinalCTA />

    </main>
  );
}

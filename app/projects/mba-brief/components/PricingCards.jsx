import { Container } from "./Container";

export function PricingCards({ pricingPlans }) {
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{plan.name}</p>
                  <p className="mt-2 text-sm text-white/60">{plan.tagline}</p>
                  <p className="mt-5 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="text-sm font-medium text-white/60">
                      {plan.per}
                    </span>
                  </p>
                </div>

                {plan.badge ? (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-7 block w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition ${
                  plan.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>

              <p className="mt-4 text-xs text-white/50">
                Concept pricing for portfolio demonstration.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
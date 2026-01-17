import { Container } from "./Container";

export function StatsRow({ stats }) {
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

          <p className="mt-6 text-xs text-white/50">
            *Concept metrics for portfolio demonstration.
          </p>
        </div>
      </Container>
    </section>
  );
}
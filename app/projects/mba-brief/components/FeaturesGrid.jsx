import { Container } from "./Container";

export function FeaturesGrid({ features }) {
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
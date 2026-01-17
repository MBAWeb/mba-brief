import { Container } from "./Container";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              AI summaries • Action items • Exports
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn long content into clear action in seconds.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              MBA Brief summarizes notes, transcripts, and documents into key takeaways and next
              steps—so you can move faster.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                Try it free
              </a>

              <a
                href="#demo"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                View demo
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Concept project by MBA Web Studio • No credit card
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Summarize</p>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                  Concept UI
                </span>
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white/70">
                Paste notes or a transcript…
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/35 p-3">
                  <p className="text-xs text-white/60">Summary</p>
                  <p className="mt-2 text-sm text-white/80">
                    A clean overview with key takeaways.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/35 p-3">
                  <p className="text-xs text-white/60">Action Items</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-white/80">
                    <li>Send follow-up</li>
                    <li>Draft next steps</li>
                    <li>Set deadlines</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Quick", "Standard", "Detailed", "Export Markdown"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs text-white/50">
              We’ll turn this into a real demo later (optional).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

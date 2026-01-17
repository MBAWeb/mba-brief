"use client";

import { Container } from "./Container";

export function FinalCTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to move faster?
            </h2>
            <p className="mt-3 text-white/70">
              Drop your email and we’ll send you a link when the demo is live.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
              />
              <button
                type="submit"
                className="h-12 rounded-xl bg-white px-5 text-sm font-medium text-black hover:bg-white/90"
              >
                Join the waitlist
              </button>
            </form>

            <p className="mt-4 text-xs text-white/50">
              No spam — just a single email when it’s ready.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
import { Container } from "./Container";

export function Navbar({ navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="font-semibold tracking-tight">
            MBA Brief
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {navItems.map((item, idx) => (
                <a
                    key={`${item.href ?? "nohref"}-${item.label ?? "nolabel"}-${idx}`}
                    href={item.href}
                    className="transition hover:text-white"
                >
                    {item.label}
                </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/30 hover:text-white"
            >
              See pricing
            </a>
            <a
              href="#cta"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Get started
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
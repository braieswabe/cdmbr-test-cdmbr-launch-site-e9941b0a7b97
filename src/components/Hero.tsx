import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.16),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-sm backdrop-blur">
            Modern websites built to convert
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg shadow-black/15 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              {ctaLabel}
            </Link>

            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/15"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { value: "Fast launch", label: "Launch-ready design systems" },
              { value: "Clear ROI", label: "Built for leads and trust" },
              { value: "Responsive", label: "Polished on every screen" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="mt-1 text-sm text-white/75">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

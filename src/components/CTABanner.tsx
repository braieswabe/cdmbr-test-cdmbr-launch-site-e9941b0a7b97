import Link from "next/link";

type CTABannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTABanner({
  headline,
  description,
  buttonLabel,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[var(--color-accent)] px-6 py-12 text-slate-950 shadow-xl shadow-amber-500/20 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-900/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;

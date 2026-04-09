import Link from "next/link";

type PricingTableProps = {
  planName: string;
  price: string;
  description?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

export function PricingTable({
  planName,
  price,
  description = "A balanced package for teams that want a polished presence and a clear path to conversion.",
  features,
  ctaLabel,
  ctaHref,
  popular = false,
}: PricingTableProps) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
        popular
          ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/10"
          : "border-slate-200",
      ].join(" ")}
    >
      {popular ? (
        <div className="absolute right-6 top-6 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </div>
      ) : null}

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          {planName}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-tight text-slate-950">
            {price}
          </span>
          <span className="pb-1 text-sm text-slate-500">/ project</span>
        </div>
      </div>

      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className={[
            "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200",
            popular
              ? "bg-[var(--color-primary)] text-white hover:bg-blue-700"
              : "bg-slate-950 text-white hover:bg-slate-800",
          ].join(" ")}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default PricingTable;

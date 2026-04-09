type FeatureCardProps = {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md">
          {icon ? (
            icon
          ) : (
            <span className="text-sm font-semibold">{number ?? "01"}</span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-slate-950">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default FeatureCard;

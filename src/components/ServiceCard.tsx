type ServiceCardProps = {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function ServiceCard({
  icon,
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:bg-white hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--color-primary)] shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
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

export default ServiceCard;

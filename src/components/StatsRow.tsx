import { cn } from "@/lib/cn";

export type StatItem = {
  label: string;
  value: string;
  description?: string;
};

export type StatsRowProps = {
  title?: string;
  description?: string;
  stats: StatItem[];
  className?: string;
};

export function StatsRow({ title, description, stats, className }: StatsRowProps) {
  return (
    <section className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-2xl">
          {title ? (
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          ) : null}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={`${stat.label}-${stat.value}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl font-bold tracking-tight text-[color:var(--primary)]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium text-[color:var(--foreground)]">
              {stat.label}
            </div>
            {stat.description ? (
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsRow;

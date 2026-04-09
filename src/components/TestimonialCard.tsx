import { cn } from "@/lib/cn";

export type TestimonialCardProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  className?: string;
};

export function TestimonialCard({
  icon,
  title,
  description,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-lg font-semibold text-[color:var(--color-primary)] ring-1 ring-[color:var(--color-primary)]/15 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default TestimonialCard;

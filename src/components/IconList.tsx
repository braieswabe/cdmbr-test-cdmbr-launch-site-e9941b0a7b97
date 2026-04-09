import { cn } from "@/lib/cn";

export type IconListItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type IconListProps = {
  items: IconListItem[];
  className?: string;
};

export function IconList({ items, className }: IconListProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] ring-1 ring-[color:var(--color-primary)]/15">
            {item.icon}
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconList;

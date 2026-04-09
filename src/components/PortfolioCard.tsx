import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type PortfolioCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function PortfolioCard({ icon, title, description, href, className }: PortfolioCardProps) {
  const Wrapper = href ? "a" : "article";

  return (
    <Wrapper
      {...(href ? { href, rel: "noopener noreferrer" } : {})}
      className={cn(
        "group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-[color:var(--secondary)] transition-colors duration-300 group-hover:bg-violet-100">
          {icon}
        </div>
        {href ? (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--secondary)] transition-transform duration-300 group-hover:translate-x-0.5">
            View case <ArrowUpRight className="h-4 w-4" />
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-[color:var(--foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </Wrapper>
  );
}

export default PortfolioCard;

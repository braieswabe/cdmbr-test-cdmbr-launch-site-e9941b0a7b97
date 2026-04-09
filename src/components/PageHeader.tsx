import { cn } from "@/lib/utils";

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h1>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </header>
  );
}

export default PageHeader;

import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoItem = {
  name: string;
  src?: string;
  alt?: string;
};

export type LogoCloudProps = {
  title?: string;
  description?: string;
  logos: LogoItem[];
  className?: string;
};

export function LogoCloud({ title, description, logos, className }: LogoCloudProps) {
  return (
    <section className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-2xl">
          {title ? (
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          ) : null}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex min-h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.alt ?? logo.name}
                width={160}
                height={64}
                className="h-10 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            ) : (
              <span className="text-center text-sm font-semibold tracking-wide text-slate-500">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoCloud;

"use client";

import { CheckCircle2, Circle, Clock3, Sparkles } from "lucide-react";

export type ProcessTimelineStep = {
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
  status?: "completed" | "current" | "upcoming";
};

export type ProcessTimelineProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessTimelineStep[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

function getStepIcon(status: ProcessTimelineStep["status"]) {
  if (status === "completed") return <CheckCircle2 className="h-5 w-5" aria-hidden="true" />;
  if (status === "current") return <Sparkles className="h-5 w-5" aria-hidden="true" />;
  return <Circle className="h-5 w-5" aria-hidden="true" />;
}

export function ProcessTimeline({
  eyebrow = "Our process",
  title,
  description,
  steps,
  ctaLabel,
  ctaHref,
  className = "",
}: ProcessTimelineProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 lg:gap-5">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const isCurrent = step.status === "current";
            const isCompleted = step.status === "completed";

            return (
              <div
                key={`${step.title}-${index}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex items-start gap-4 sm:w-56 sm:flex-col sm:gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors ${
                        isCompleted
                          ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                          : isCurrent
                            ? "border-[color:var(--color-primary)]/20 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]"
                            : "border-slate-200 bg-slate-50 text-slate-400"
                      }`}
                    >
                      {getStepIcon(step.status)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-500">
                          Step {index + 1}
                        </span>
                        {step.duration ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                            {step.duration}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-1 text-xl font-semibold text-[color:var(--foreground)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>

                    {step.deliverables?.length ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[color:var(--color-primary)]" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>

                {!isLast ? (
                  <div className="pointer-events-none absolute bottom-0 left-8 top-[4.25rem] hidden w-px bg-gradient-to-b from-[color:var(--color-primary)]/30 to-transparent sm:block" />
                ) : null}
              </div>
            );
          })}
        </div>

        {ctaLabel && ctaHref ? (
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] px-6 py-6 text-white shadow-lg sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-sm font-medium text-white/80">Ready to move faster?</p>
              <p className="mt-1 text-lg font-semibold">{title}</p>
            </div>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProcessTimeline;

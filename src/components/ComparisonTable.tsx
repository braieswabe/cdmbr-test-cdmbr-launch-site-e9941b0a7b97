"use client";

import { Check, Minus } from "lucide-react";

export type ComparisonFeatureRow = {
  feature: string;
  description?: string;
  values: Record<string, boolean | string>;
};

export type ComparisonTableProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  columns: { key: string; label: string; highlighted?: boolean }[];
  rows: ComparisonFeatureRow[];
  className?: string;
};

function renderValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-2 text-emerald-600">
        <Check className="h-4 w-4" aria-hidden="true" />
        <span className="font-medium">Included</span>
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 text-slate-400">
        <Minus className="h-4 w-4" aria-hidden="true" />
        <span className="font-medium">Not included</span>
      </span>
    );
  }

  return <span className="font-medium text-slate-700">{value}</span>;
}

export function ComparisonTable({
  eyebrow = "Compare options",
  title,
  description,
  columns,
  rows,
  className = "",
}: ComparisonTableProps) {
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

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-slate-50">
                  <th
                    scope="col"
                    className="sticky left-0 z-10 border-b border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                  >
                    Feature
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`border-b border-slate-200 px-5 py-4 text-left text-sm font-semibold ${
                        column.highlighted
                          ? "bg-[color:var(--color-primary)]/5 text-[color:var(--color-primary)]"
                          : "text-slate-900"
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={`${row.feature}-${rowIndex}`}
                    className="transition-colors hover:bg-slate-50/70"
                  >
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-b border-slate-200 bg-white px-5 py-5 text-left align-top"
                    >
                      <div className="font-semibold text-slate-900">{row.feature}</div>
                      {row.description ? (
                        <div className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                          {row.description}
                        </div>
                      ) : null}
                    </th>
                    {columns.map((column) => {
                      const value = row.values[column.key];
                      return (
                        <td
                          key={column.key}
                          className={`border-b border-slate-200 px-5 py-5 align-top text-sm ${
                            column.highlighted ? "bg-[color:var(--color-primary)]/5" : "bg-white"
                          }`}
                        >
                          {value !== undefined ? renderValue(value) : <span className="text-slate-300">—</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;

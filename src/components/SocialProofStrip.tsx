import { Star, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type SocialProofItem = {
  label: string;
  value: string;
  icon?: "star" | "users" | "shield" | "growth";
};

export type SocialProofStripProps = {
  items: SocialProofItem[];
  className?: string;
};

const iconMap = {
  star: Star,
  users: Users,
  shield: ShieldCheck,
  growth: TrendingUp,
} as const;

export function SocialProofStrip({ items, className }: SocialProofStripProps) {
  return (
    <section
      aria-label="Social proof"
      className={cn(
        "grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon ? iconMap[item.icon] : Star;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-900">
                {item.value}
              </p>
              <p className="text-sm text-slate-600">{item.label}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SocialProofStrip;

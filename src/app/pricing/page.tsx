"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { CTABanner, ComparisonTable, FAQAccordion, PageHeader, PricingTable, SectionHeading } from "@/components";

const monthlyPlans = [
  {
    planName: "Launch",
    price: "$1,800",
    description: "For businesses that need a polished starting point with the essentials done well.",
    features: [
      "Up to 5 core pages",
      "Responsive design system",
      "Basic SEO setup",
      "Contact form integration",
      "1 revision round",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    planName: "Growth",
    price: "$3,600",
    description: "Our most popular option for teams that want stronger messaging and better conversion.",
    features: [
      "Up to 10 pages",
      "Strategy workshop",
      "Conversion-focused copy guidance",
      "Performance and accessibility checks",
      "2 revision rounds",
      "Priority launch support",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/contact",
    popular: true,
  },
  {
    planName: "Scale",
    price: "$6,500",
    description: "For larger launches, multi-page builds, or teams that need a more tailored engagement.",
    features: [
      "Custom page architecture",
      "Advanced content planning",
      "Multiple stakeholder reviews",
      "Analytics and tracking support",
      "Ongoing optimization plan",
      "Dedicated launch coordination",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "/contact",
  },
];

const annualPlans = [
  {
    planName: "Launch",
    price: "$18,000",
    description: "Best for teams that want a reliable foundation with annual support included.",
    features: [
      "Up to 5 core pages",
      "Responsive design system",
      "Basic SEO setup",
      "Contact form integration",
      "Annual review session",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    planName: "Growth",
    price: "$36,000",
    description: "The best value for teams that want ongoing improvements and strategic support.",
    features: [
      "Up to 10 pages",
      "Strategy workshop",
      "Conversion-focused copy guidance",
      "Performance and accessibility checks",
      "Quarterly optimization reviews",
      "Priority launch support",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/contact",
    popular: true,
  },
  {
    planName: "Scale",
    price: "$65,000",
    description: "For organizations that need a more comprehensive partnership across the year.",
    features: [
      "Custom page architecture",
      "Advanced content planning",
      "Multiple stakeholder reviews",
      "Analytics and tracking support",
      "Ongoing optimization plan",
      "Dedicated launch coordination",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "/contact",
  },
];

const comparisonColumns = [
  { key: "launch", label: "Launch" },
  { key: "growth", label: "Growth", highlighted: true },
  { key: "scale", label: "Scale" },
];
const comparisonRows = [
  { feature: "Core pages", values: { launch: "Up to 5", growth: "Up to 10", scale: "Custom" } },
  { feature: "Strategy workshop", values: { launch: "—", growth: "Included", scale: "Included" } },
  { feature: "Copy guidance", values: { launch: "Basic", growth: "Included", scale: "Included" } },
  { feature: "Revision rounds", values: { launch: "1", growth: "2", scale: "3+" } },
  { feature: "Launch support", values: { launch: "Standard", growth: "Priority", scale: "Dedicated" } },
];

const faqItems = [
  {
    question: "Do you offer monthly payment options?",
    answer:
      "Yes. We can structure projects with milestone-based payments so the investment is easier to manage while the work stays on track.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Each plan includes the scope listed on the card, plus project management, design collaboration, and launch support. We’ll confirm exact deliverables before work begins.",
  },
  {
    question: "Can you customize a plan?",
    answer:
      "Absolutely. If your needs fall between tiers, we can tailor the scope so you only pay for what will actually move the project forward.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 3 and 8 weeks depending on scope, feedback speed, and content readiness. Larger engagements may take longer.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = useMemo(() => (billingCycle === "monthly" ? monthlyPlans : annualPlans), [billingCycle]);

  return (
    <main>
      <PageHeader
        eyebrow="Pricing"
        title="Clear pricing for teams that want confidence before they commit"
        description="Our pricing is designed to be easy to understand: choose a plan based on your scope, your timeline, and how much support you want. No hidden fees, no vague deliverables, and no pressure."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/5">
            <SectionHeading
              eyebrow="Pricing philosophy"
              title="Simple tiers, transparent scope, and a clear next step"
              description="Every plan includes thoughtful design, responsive layouts, and a process built to keep the project moving. The main difference is depth: how much strategy, content support, and ongoing guidance you need."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-black/10"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Monthly pricing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  billingCycle === "annual"
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-black/10"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Annual pricing
              </button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, label: "Transparent scope" },
                { icon: <Clock3 className="h-5 w-5" />, label: "Predictable timelines" },
                { icon: <Sparkles className="h-5 w-5" />, label: "Conversion-focused" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                    {item.icon}
                  </div>
                  <p className="mt-3 text-sm font-medium text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-8 text-white shadow-xl shadow-black/10">
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Star className="h-4 w-4 fill-current" />
              Most teams choose Growth
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">A balanced package for teams that want a polished presence and a clear path to conversion.</h2>
            <p className="mt-4 text-sm leading-6 text-white/85">
              Growth is the best fit when you want more than a basic website: stronger messaging, better structure, and a smoother experience for prospects.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
              Includes strategy, design, build, and launch support
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plans"
            title="Choose the level of support that matches your goals"
            description="Switch between monthly and annual pricing to compare the investment and see which scope fits your current stage."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingTable key={plan.planName} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Compare options"
          title="A side-by-side view to help you decide faster"
          description="Use this comparison to see what changes as the scope grows. If you’re unsure, start with the plan that best matches your timeline and complexity."
        />
        <div className="mt-10">
          <ComparisonTable
            title="Feature comparison"
            description="A quick way to compare the three plans and identify the best fit."
            columns={comparisonColumns}
            rows={comparisonRows}
          />
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common pricing questions"
            description="A few quick answers to help you move forward with confidence."
          />
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <CTABanner
          headline="Need a custom quote or not sure which plan fits?"
          description="Tell us about your goals and we’ll recommend the most efficient path forward."
          buttonLabel="Contact sales"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Breadcrumbs, PageHeader, SectionHeading } from "@/components";

const faqItems = [
  {
    category: "Getting started",
    question: "What kind of businesses do you work with?",
    answer:
      "We work with founders, growing teams, and established businesses that need a polished website, clearer messaging, and a stronger path to conversion.",
  },
  {
    category: "Getting started",
    question: "How do we begin a project?",
    answer:
      "Start with a short discovery call or contact form submission. We’ll review your goals, timeline, and scope, then recommend the best next step.",
  },
  {
    category: "Services",
    question: "Do you offer strategy, design, and development together?",
    answer:
      "Yes. Most projects include planning, design, and implementation so the final result is cohesive, fast, and ready to launch without handoff gaps.",
  },
  {
    category: "Services",
    question: "Can you work with our existing brand?",
    answer:
      "Absolutely. We can refine your current visual system, improve layout and messaging, or build a site that extends your existing brand with more consistency.",
  },
  {
    category: "Timeline",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but many website projects move from kickoff to launch in 4–8 weeks. Larger builds or content-heavy sites may take longer.",
  },
  {
    category: "Timeline",
    question: "What do you need from us to stay on schedule?",
    answer:
      "Clear goals, timely feedback, and any existing brand or content assets help us move efficiently. We’ll provide a simple checklist at the start.",
  },
  {
    category: "Pricing",
    question: "Do you offer fixed pricing or custom quotes?",
    answer:
      "We offer transparent starting points for common needs and custom quotes for more complex work. That way you can compare options without surprises.",
  },
  {
    category: "Support",
    question: "What happens after launch?",
    answer:
      "We can stay involved with updates, improvements, and support. If you prefer to manage the site yourself, we’ll hand over everything you need to do that confidently.",
  },
  {
    category: "Support",
    question: "How quickly do you respond to questions?",
    answer:
      "We typically respond within one business day. For urgent requests, contact us by phone during office hours for the fastest help.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <PageHeader
          eyebrow="FAQ"
          title="Clear answers for common questions"
          description="This page is organized to help you move quickly from curiosity to confidence. Browse by topic, compare options, and reach out if you still need help."
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Questions and answers"
            title="Everything you need to know before you get started"
            description="We’ve grouped the most common questions by topic so you can find the right answer without digging through a long support thread."
          />

          <div className="mt-8 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl border border-black/10 bg-[var(--background)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-black/5"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{item.category}</p>
                      <p className="mt-1 text-base font-semibold">{item.question}</p>
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-black/10 px-5 py-4 text-sm leading-7 text-black/70">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-8 text-white shadow-lg md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Still need help?</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">We’re happy to answer the rest</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              If your question isn’t covered here, send us a message and we’ll point you in the right direction.
              We can help with project fit, pricing, timelines, and support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-[var(--foreground)] transition hover:opacity-95"
            >
              Contact support <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Review pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
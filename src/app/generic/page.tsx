import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generic",
  description: "Learn more about generic",
};

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";

const relatedLinks = [
  { href: "/services", label: "Explore services" },
  { href: "/pricing", label: "View pricing" },
  { href: "/contact", label: "Contact the team" },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Built for clarity",
    description:
      "Every page is structured to help visitors understand the offer quickly, compare options confidently, and take the next step without friction.",
  },
  {
    icon: ShieldCheck,
    title: "Designed to build trust",
    description:
      "Clear messaging, visible proof points, and consistent calls to action make it easier for people to feel confident in your brand.",
  },
  {
    icon: CheckCircle2,
    title: "Flexible by design",
    description:
      "Use this template for supporting pages, campaign landing pages, policy pages, or any content that needs a polished, professional layout.",
  },
];

const contentSections = [
  {
    title: "A simple structure that keeps attention moving",
    body: "Start with a strong headline, follow with the most important proof, then guide visitors toward the action you want them to take. This page layout is intentionally modular so you can adapt it to different goals without losing consistency.",
  },
  {
    title: "Content that answers real questions",
    body: "Visitors want to know what you do, who it is for, how it works, and what happens next. Use this space to explain the value in plain language, highlight differentiators, and remove uncertainty with specifics.",
  },
  {
    title: "A better path from interest to action",
    body: "The best pages make the next step obvious. Whether that means booking a call, reviewing services, or exploring a portfolio, the goal is to reduce hesitation and create momentum with a clear, low-friction CTA.",
  },
];

export default function GenericPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <NavBar />
      <Hero
        title="A flexible page template for polished, high-converting content"
        subtitle="Use this page for supporting content, campaign pages, or any section of your site that needs a clear message, strong hierarchy, and a professional finish."
        ctaLabel="Start a project"
        ctaHref="/contact"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Generic page" },
          ]}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <PageHeader
              eyebrow="Page overview"
              title="Everything you need for a clean, professional supporting page"
              description="This template is ideal when you need a page that feels complete, credible, and easy to scan. It combines a strong header, useful content blocks, and a clear next step."
            />

            <div className="mt-10 grid gap-6">
              {contentSections.map((section) => (
                <article key={section.title} className="rounded-2xl bg-[var(--background)] p-6">
                  <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                  <p className="mt-3 leading-7 text-black/70">{section.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 text-white shadow-lg">
              <h2 className="text-2xl font-semibold tracking-tight">Why this template works</h2>
              <p className="mt-3 text-white/85">
                It keeps the page focused on one job: helping visitors understand the offer and move forward with confidence.
              </p>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-1 rounded-full bg-white/15 p-2">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1 text-sm text-white/80">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Related links</h3>
              <p className="mt-2 text-sm leading-6 text-black/65">
                Continue exploring the site or take the next step when you are ready.
              </p>
              <div className="mt-6 space-y-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl bg-[var(--background)] px-4 py-3 font-medium transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 text-[var(--primary)]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What to include"
            title="A practical checklist for any supporting page"
            description="Use these content blocks to keep the page useful, persuasive, and easy to navigate."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Clear summary",
                description: "Explain the page purpose in one or two sentences so visitors know they are in the right place.",
              },
              {
                icon: CheckCircle2,
                title: "Helpful details",
                description: "Add the specifics people need to evaluate the offer, including process, scope, and expectations.",
              },
              {
                icon: ShieldCheck,
                title: "Strong CTA",
                description: "End with a direct action that matches the page intent and makes the next step obvious.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <Icon className="h-6 w-6 text-[var(--primary)]" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-black/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a page that feels polished and purposeful?"
        description="Use this template to present your message clearly, support it with proof, and guide visitors to the right next step."
        buttonLabel="Contact us today"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import Link from "next/link";
import { ArrowRight, BarChart3, BriefcaseBusiness, Building2, CheckCircle2, Compass, Globe2, Layers3, ShieldCheck, Sparkles, Target, Users2 } from "lucide-react";
import { CTABanner, FeatureCard, PageHeader, ProcessTimeline, SectionHeading, ServiceCard } from "@/components";

const services = [
  {
    icon: <Compass className="h-6 w-6" />,
    number: "01",
    title: "Strategy & positioning",
    description:
      "Clarify what you sell, who it is for, and why customers should choose you. We turn scattered ideas into a focused message that supports sales, marketing, and leadership alignment.",
    href: "/contact",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    number: "02",
    title: "Website design & build",
    description:
      "Create a polished, responsive website that looks credible on day one and makes it easy for visitors to understand your offer, compare options, and take action.",
    href: "/portfolio",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    number: "03",
    title: "Conversion optimization",
    description:
      "Improve the pages that matter most with clearer calls to action, stronger proof, and better flow so more visitors become qualified leads.",
    href: "/features",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    number: "04",
    title: "Ongoing support",
    description:
      "Keep your site secure, current, and ready for growth with reliable updates, performance checks, and practical improvements over time.",
    href: "/pricing",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    number: "05",
    title: "Content & launch support",
    description:
      "From page copy to launch QA, we help you go live with confidence and a site that feels complete, consistent, and ready to represent your brand.",
    href: "/blog",
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    number: "06",
    title: "Team enablement",
    description:
      "Give your team a clear system for updating content, publishing new pages, and keeping the website aligned with business goals.",
    href: "/careers",
  },
];

const steps = [
  {
    title: "Discovery and goals",
    description:
      "We start with your audience, goals, and current challenges so the work is grounded in business outcomes, not just aesthetics.",
  },
  {
    title: "Plan and scope",
    description:
      "Next we define the pages, content, and priorities that will have the biggest impact, keeping the project focused and efficient.",
  },
  {
    title: "Design and build",
    description:
      "We create a clean, modern experience with responsive layouts, strong hierarchy, and conversion-friendly details throughout.",
  },
  {
    title: "Review and refine",
    description:
      "You review the work, we tighten the details, and we make sure the final result feels accurate, polished, and easy to use.",
  },
  {
    title: "Launch and support",
    description:
      "Once live, we stay available for updates, improvements, and guidance so the site continues to support your growth.",
  },
];

const industries = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Professional services",
    description: "Consultants, agencies, and firms that need a credible presence and a clear path to inquiry.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "B2B companies",
    description: "Teams that want to explain complex offers in a simple, persuasive way.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Growth-focused brands",
    description: "Businesses ready to improve lead quality, conversion rates, and customer trust.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Practical web services built to win trust and drive action"
        description="We help teams sharpen their message, elevate their website, and create a smoother path from first visit to qualified inquiry. The result is a site that feels credible, clear, and ready to support growth."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/5 backdrop-blur">
            <SectionHeading
              eyebrow="What we do"
              title="A full-service approach without the bloat"
              description="Choose a focused engagement or combine services for a more complete launch. Every project is designed to reduce friction, improve clarity, and create measurable momentum."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-8 text-white shadow-xl shadow-black/10">
              <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                <Sparkles className="h-4 w-4" />
                Built for clarity and conversion
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Everything is designed to help the right people say yes faster.</h2>
              <p className="mt-4 text-sm leading-6 text-white/85">
                From strategy to launch, we focus on the details that matter most: clear messaging, strong proof, and a polished experience across every screen size.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-8 shadow-lg shadow-black/5">
              <h3 className="text-lg font-semibold text-white">Why clients choose this approach</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-accent)]" />
                  <span>Clear scope and transparent deliverables from the start.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-accent)]" />
                  <span>Modern design that supports trust, readability, and action.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-accent)]" />
                  <span>Practical recommendations based on business goals, not trends.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A simple process that keeps projects moving"
            description="You always know what happens next. We keep the process structured, collaborative, and efficient so the work stays focused on outcomes."
          />
          <div className="mt-10">
            <ProcessTimeline
              title="From first call to launch"
              description="A straightforward delivery process that keeps momentum high and surprises low."
              steps={steps}
              ctaLabel="Book a consultation"
              ctaHref="/contact"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Who we serve"
          title="Relevant experience across industries and use cases"
          description="We work best with teams that need a professional online presence, stronger lead generation, or a more credible way to explain what they do."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                {industry.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <CTABanner
          headline="Ready to turn your website into a stronger sales tool?"
          description="Let’s talk about your goals, your current site, and the fastest way to improve clarity, credibility, and conversion."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}
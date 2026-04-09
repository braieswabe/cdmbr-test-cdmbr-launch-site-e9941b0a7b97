import { CTABanner, FeatureCard, Hero, SectionHeading } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Professional Website",
  description: "Explore the features, capabilities, and practical benefits that make this website effective for growing teams.",
};

const featureDetails = [
  {
    title: "Conversion-focused page structure",
    description:
      "Every page is organized to help visitors understand the offer quickly, build confidence, and take the next step without friction.",
    benefit: "More qualified inquiries from the same traffic.",
  },
  {
    title: "Flexible content sections",
    description:
      "Reusable sections make it easy to present services, proof, pricing, and calls to action in a way that feels consistent and polished.",
    benefit: "Faster updates and a more cohesive brand experience.",
  },
  {
    title: "Responsive by design",
    description:
      "Layouts adapt cleanly across phones, tablets, and desktops so the experience stays readable and effective everywhere.",
    benefit: "Better usability for every visitor, on every device.",
  },
];

const useCases = [
  {
    title: "Professional services",
    description:
      "Ideal for consultants, agencies, and firms that need to explain expertise clearly and convert interest into booked calls.",
  },
  {
    title: "Growing startups",
    description:
      "Great for teams that need a credible launch presence, a sharper story, and a site that can scale with the business.",
  },
  {
    title: "Established businesses",
    description:
      "Useful for organizations that want to modernize their web presence, improve clarity, and support sales conversations.",
  },
];

const compatibility = [
  "Built with Next.js App Router for fast, modern performance",
  "Tailwind CSS v4 styling for consistent, maintainable design",
  "Accessible components with clear hierarchy and strong contrast",
  "Easy to extend with additional pages, sections, and content",
];

export default function FeaturesPage() {
  return (
    <main>
      <Hero
        title="Features designed to help your website work harder"
        subtitle="A polished, conversion-oriented experience that helps visitors understand your value, trust your team, and take action."
        ctaLabel="Start your project"
        ctaHref="/contact"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading
          eyebrow="Features overview"
          title="Built for clarity, credibility, and conversion"
          description="The site combines strong messaging, modular layouts, and practical content patterns so your audience can move from interest to action with less friction."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon="⚡"
            number="01"
            title="Fast to scan"
            description="Visitors can quickly find the information they need thanks to concise copy, clear headings, and a strong visual hierarchy."
          />
          <FeatureCard
            icon="✓"
            number="02"
            title="Easy to trust"
            description="Proof points, testimonials, and transparent details help reduce hesitation and make your business feel credible."
          />
          <FeatureCard
            icon="↗"
            number="03"
            title="Simple to act on"
            description="Prominent calls to action and focused page flows make it easy for visitors to book, inquire, or request a demo."
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <SectionHeading
            eyebrow="Feature detail blocks"
            title="Practical capabilities that support real business goals"
            description="Each feature is designed to improve the experience for both your visitors and your team."
          />
          <div className="mt-8 space-y-6">
            {featureDetails.map((feature, index) => (
              <article
                key={feature.title}
                className={`grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="space-y-4 lg:[direction:ltr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    Feature {index + 1}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                  <div className="rounded-2xl bg-[var(--color-primary)]/10 p-4 text-sm font-medium text-slate-800">
                    Benefit: {feature.benefit}
                  </div>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] p-8 text-white shadow-lg">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Clear messaging",
                      "Strong calls to action",
                      "Responsive layouts",
                      "Trust-building proof",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading
          eyebrow="Use cases"
          title="Works well for teams with different goals"
          description="Whether you need to generate leads, launch a new offer, or refresh an outdated site, the structure adapts to your needs."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <SectionHeading
            eyebrow="Integration and compatibility"
            title="Modern stack, low maintenance"
            description="The site is built to be easy to maintain, extend, and adapt as your content or goals evolve."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-4">
                {compatibility.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                Why it matters
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                A strong feature set should not just look good—it should make your website easier to use, easier to trust,
                and easier to grow with over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="See how these features can support your next launch"
        description="Talk with us about your goals and we’ll help shape a website that is clear, credible, and built to convert."
        buttonLabel="Request a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
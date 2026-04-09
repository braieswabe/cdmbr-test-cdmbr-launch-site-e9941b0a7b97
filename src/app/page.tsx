import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Compass,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import {
  CTABanner,
  FeatureCard,
  Hero,
  LogoCloud,
  SectionHeading,
  ServiceCard,
  SocialProofStrip,
  StatsRow,
  TestimonialCard,
} from "@/components";

const trustedBy = [
  "Northstar Health",
  "Summit Financial",
  "Brightline Retail",
  "Aster Labs",
  "CivicWorks",
  "Harbor & Co.",
];

const benefits = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "01",
    title: "Clear positioning",
    description:
      "We turn complex offerings into a simple story that helps the right customers understand why you matter in seconds.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    number: "02",
    title: "Trust that converts",
    description:
      "From proof points to polished design, every detail is built to reduce hesitation and make the next step feel safe.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    number: "03",
    title: "Measurable outcomes",
    description:
      "We focus on the metrics that matter—qualified leads, stronger engagement, and a smoother path to inquiry.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    number: "04",
    title: "Guided process",
    description:
      "You get a structured, collaborative workflow that keeps projects moving without unnecessary back-and-forth.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    number: "05",
    title: "Fast turnaround",
    description:
      "We move quickly without sacrificing quality, so your team can launch, iterate, and improve with confidence.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    number: "06",
    title: "Built for teams",
    description:
      "Whether you’re a founder, marketing lead, or operations team, the experience is designed to be easy to adopt.",
  },
];

const services = [
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    number: "01",
    title: "Brand strategy",
    description:
      "Clarify your message, sharpen your positioning, and align your team around a story customers remember.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "02",
    title: "Website design",
    description:
      "Create a polished, conversion-focused site that looks credible and guides visitors toward action.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    number: "03",
    title: "Growth content",
    description:
      "Publish blog, case study, and portfolio content that builds authority and supports your sales process.",
  },
];

const testimonials = [
  {
    icon: <Star className="h-5 w-5" />,
    title: "A sharper story in one sprint",
    description:
      "“We went from a generic homepage to a site that clearly explains our value. Inquiries became more qualified almost immediately.”",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Easy to work with, easy to trust",
    description:
      "“The process was organized, the communication was excellent, and the final result felt premium from day one.”",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "A real lift in confidence",
    description:
      "“Our team finally has a website that matches the quality of our work. It’s made sales conversations much easier.”",
  },
];

const stats = [
  { value: "120+", label: "projects launched" },
  { value: "38%", label: "average lift in inquiries" },
  { value: "4.9/5", label: "client satisfaction" },
  { value: "10 days", label: "typical first draft" },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="A professional website that turns interest into action"
        subtitle="We help service businesses, agencies, and growing teams present a sharper story, build trust faster, and convert more of the right visitors into leads."
        ctaLabel="Book a discovery call"
        ctaHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />

      <section className="border-b border-black/5 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LogoCloud
            title="Trusted by ambitious teams"
            description="Selected by organizations that care about clarity, credibility, and measurable growth."
            logos={trustedBy}
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why clients choose us"
            title="Everything you need to look credible and win better-fit customers"
            description="We combine strategy, design, and conversion-focused content so your website does more than look good—it supports real business outcomes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="A focused approach to professional websites"
              description="We build modern, polished experiences that make your offer easier to understand and easier to buy."
            />
            <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Your website should answer the questions buyers already have:
                What do you do? Why should I trust you? What happens next?
                We design every page to answer those questions quickly and
                confidently.
              </p>
              <p>
                From homepage messaging to service detail pages, we create a
                consistent experience that supports sales, reduces friction,
                and gives your team a stronger foundation for growth.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Learn about our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View recent work
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StatsRow
            title="Built to support real business growth"
            description="We track the outcomes that matter most to service businesses and professional teams."
            stats={stats}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client feedback"
            title="Trusted by teams that need a website they can stand behind"
            description="Clear communication, thoughtful design, and a process that keeps momentum high."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready for a website that feels as professional as your work?"
            description="Let’s create a clear, credible, conversion-focused experience that helps the right people say yes."
            buttonLabel="Start your project"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
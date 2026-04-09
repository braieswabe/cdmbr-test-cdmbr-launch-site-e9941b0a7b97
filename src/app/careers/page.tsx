import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, HeartHandshake, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTABanner, PageHeader, ProcessTimeline, SectionHeading, SocialProofStrip } from "@/components";

export const metadata: Metadata = {
  title: "Careers | Professional Website",
  description:
    "Explore open roles, benefits, and our hiring process. Join a team that values thoughtful work, clear communication, and meaningful growth.",
};

const openRoles = [
  {
    title: "Senior Frontend Developer",
    location: "Remote, US time zones",
    type: "Full-time",
    summary: "Build polished, accessible web experiences with Next.js, React, and modern CSS. You will collaborate closely with design, content, and strategy.",
  },
  {
    title: "Content Strategist",
    location: "Hybrid, New York",
    type: "Full-time",
    summary: "Shape messaging that turns complex services into clear, persuasive stories across websites, campaigns, and sales materials.",
  },
  {
    title: "Client Success Manager",
    location: "Remote",
    type: "Full-time",
    summary: "Own onboarding, communication, and delivery coordination to help clients feel informed, supported, and confident at every step.",
  },
  {
    title: "Design Operations Coordinator",
    location: "Chicago",
    type: "Part-time",
    summary: "Keep projects moving smoothly by organizing assets, timelines, and approvals while supporting a high-quality client experience.",
  },
];

const benefits = [
  "Competitive compensation with transparent salary bands",
  "Flexible schedules and a remote-first culture",
  "Paid time off, holidays, and recharge days",
  "Learning budget for courses, books, and conferences",
  "Regular feedback, mentorship, and growth planning",
  "A respectful team that values craft and accountability",
];

const hiringSteps = [
  {
    title: "Apply online",
    description: "Send your resume, portfolio, or work samples. We review every application carefully and respond with clear next steps.",
  },
  {
    title: "Intro conversation",
    description: "Meet with our team to discuss your background, interests, and what kind of work environment helps you do your best work.",
  },
  {
    title: "Role-specific interview",
    description: "Talk through real scenarios, collaboration style, and the skills most relevant to the role you are pursuing.",
  },
  {
    title: "Offer and onboarding",
    description: "If it is a fit, we move quickly with a transparent offer and a structured onboarding plan so you can start strong.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <section className="border-b border-black/5 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <PageHeader
            eyebrow="Careers"
            title="Join a team that cares about the work and the people doing it"
            description="We are building a thoughtful, collaborative workplace where strong ideas are welcomed, communication is direct, and growth is part of the job."
          />
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-black/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <Users className="h-4 w-4 text-[var(--primary)]" />
              Collaborative team
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
              Clear expectations
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[var(--primary)]" />
              Room to grow
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="careers_intro"
              title="What it is like to work here"
              description="We value practical thinking, clean execution, and honest communication. People here are trusted to own their work, ask questions early, and contribute ideas that improve the final result."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Meaningful projects with visible impact",
                "Supportive feedback and regular 1:1s",
                "Flexible work that respects focus time",
                "A culture that rewards reliability and initiative",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-[var(--accent)]" />
                    <p className="text-sm leading-6 text-black/75">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] p-8 text-white shadow-xl">
            <HeartHandshake className="h-10 w-10 text-white/90" />
            <h2 className="mt-6 text-2xl font-semibold">People-first, performance-minded</h2>
            <p className="mt-4 text-white/85">
              We believe great work happens when people have clarity, autonomy, and the tools they need to do their best. That means thoughtful planning, realistic timelines, and a team that supports one another.
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/90">Typical response time: 5 business days</p>
              <p className="mt-1 text-sm text-white/80">We keep candidates informed at every stage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/[0.02] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="open_roles"
            title="Current openings"
            description="We are hiring for a mix of strategy, delivery, and technical roles. If you do not see a perfect match, we still encourage you to reach out."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {openRoles.map((role) => (
              <article key={role.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black">{role.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-black/65">
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-[var(--primary)]" />
                </div>
                <p className="mt-5 text-sm leading-6 text-black/70">{role.summary}</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline">
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="culture_benefits"
              title="Benefits that support real life"
              description="We offer practical support, not just perks. The goal is to help people stay healthy, keep learning, and do their best work over the long term."
            />
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-black/75">
                  <Sparkles className="mt-1 h-4 w-4 text-[var(--accent)]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[var(--background)] p-8 shadow-sm ring-1 ring-black/5">
            <SectionHeading
              eyebrow="hiring_process"
              title="A hiring process designed to be respectful and clear"
              description="We keep the process focused so candidates can evaluate us as much as we evaluate them."
            />
            <div className="mt-6">
              <ProcessTimeline
                title="How we hire"
                description="A straightforward process with clear communication at every step."
                steps={hiringSteps}
                ctaLabel="Send your application"
                ctaHref="/contact"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-black/[0.02] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SocialProofStrip
            items={[
              "Average candidate response within 5 business days",
              "Remote-friendly team with flexible scheduling",
              "Structured onboarding for every new hire",
              "Growth plans reviewed twice per year",
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Think you would be a great fit?"
        description="Apply for an open role or send a general interest note if you want to be considered for future opportunities."
        buttonLabel="View contact options"
        buttonHref="/contact"
      />
    </main>
  );
}
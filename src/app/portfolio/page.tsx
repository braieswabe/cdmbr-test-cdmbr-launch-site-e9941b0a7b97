import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Layers3, Sparkles } from "lucide-react";
import { Breadcrumbs, CTABanner, PageHeader, PortfolioCard, SectionHeading } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio | Professional Website",
  description:
    "Selected work showcasing polished design, clear messaging, and measurable business impact across websites and digital experiences.",
};

const projects = [
  {
    icon: "01",
    title: "Northstar Advisory website redesign",
    description:
      "Reframed a complex consulting offer into a clear, credible experience that helped prospects understand value faster.",
    href: "/portfolio/northstar-advisory",
    tags: ["Strategy", "UX", "Copywriting"],
  },
  {
    icon: "02",
    title: "Summit Health landing page system",
    description:
      "Built a modular landing page framework that improved campaign consistency and reduced launch time for new services.",
    href: "/portfolio/summit-health",
    tags: ["Landing Pages", "Conversion", "Systems"],
  },
  {
    icon: "03",
    title: "Atlas Studio portfolio refresh",
    description:
      "Created a visual-first portfolio that elevated the work, improved browsing, and made project outcomes easier to scan.",
    href: "/portfolio/atlas-studio",
    tags: ["Brand", "Portfolio", "Visual Design"],
  },
  {
    icon: "04",
    title: "Harbor Finance content hub",
    description:
      "Organized educational content around buyer questions to support organic discovery and stronger authority over time.",
    href: "/portfolio/harbor-finance",
    tags: ["Content", "SEO", "Education"],
  },
  {
    icon: "05",
    title: "Brightline SaaS pricing experience",
    description:
      "Simplified plan comparison and clarified feature differences so visitors could choose with more confidence.",
    href: "/portfolio/brightline-saas",
    tags: ["Pricing", "UX", "SaaS"],
  },
  {
    icon: "06",
    title: "Evergreen nonprofit campaign site",
    description:
      "Designed a warm, trustworthy experience that supported donations, volunteer signups, and community engagement.",
    href: "/portfolio/evergreen-nonprofit",
    tags: ["Nonprofit", "Campaigns", "Accessibility"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <PageHeader
          eyebrow="Selected work"
          title="Projects that combine strong design with measurable business outcomes"
          description="This portfolio highlights websites, landing pages, and content systems built to improve clarity, trust, and conversion."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-black/5 bg-slate-950 p-8 text-white shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              <Sparkles className="h-4 w-4" />
              What we focus on
            </div>
            <div className="mt-8 grid gap-5">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-[var(--color-accent)]" />
                  <h2 className="text-lg font-semibold">Clearer messaging</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  We turn complicated offers into simple, persuasive pages that help the right people understand the value quickly.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-[var(--color-accent)]" />
                  <h2 className="text-lg font-semibold">Reusable systems</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  We design modular components and page patterns so teams can launch faster without losing consistency.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Request a similar project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Featured project"
            title="Northstar Advisory: a clearer path from first visit to qualified inquiry"
            description="A strategic redesign that improved the story, simplified navigation, and made the next step obvious on every key page."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] p-6 text-white shadow-inner">
                <div className="flex h-full flex-col justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Featured case study</p>
                  <div>
                    <h3 className="text-3xl font-semibold">Northstar Advisory</h3>
                    <p className="mt-3 max-w-xl text-white/80">
                      We restructured the homepage, services, and contact flow to reduce friction and present the firm as both expert and approachable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Outcome</p>
                  <p className="mt-2 font-semibold text-slate-950">More qualified inquiries</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Focus</p>
                  <p className="mt-2 font-semibold text-slate-950">Messaging and conversion</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Delivery</p>
                  <p className="mt-2 font-semibold text-slate-950">Strategy to launch</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Results snapshot</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <li>• Clearer service positioning across the site</li>
                <li>• Stronger calls to action on high-intent pages</li>
                <li>• A more polished experience for referral traffic</li>
                <li>• Better structure for future content expansion</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-secondary)]"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <CTABanner
          headline="Need a portfolio or case study page that sells the quality of your work?"
          description="We can help you present projects with more clarity, stronger storytelling, and a layout that makes the value easy to see."
          buttonLabel="Start a project"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}
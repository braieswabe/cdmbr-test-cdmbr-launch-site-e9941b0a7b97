import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Filter, Search, Tag } from "lucide-react";
import { BlogCard, Breadcrumbs, NewsletterSignup, PageHeader, SectionHeading } from "@/components";

export const metadata: Metadata = {
  title: "Blog | Professional Website",
  description:
    "Practical articles on growth, design, and customer experience for teams that want clearer messaging and stronger conversion.",
};

const featuredPost = {
  category: "Strategy",
  title: "How to turn a polished website into a reliable lead engine",
  description:
    "A practical framework for clarifying your offer, reducing friction, and guiding visitors toward action without sounding pushy.",
  date: "April 8, 2026",
  href: "/blog/turn-website-into-lead-engine",
};

const posts = [
  {
    icon: "01",
    title: "The 7-page structure that helps service businesses convert faster",
    description:
      "See how a focused site architecture can answer key questions sooner and move qualified visitors toward contact.",
    href: "/blog/7-page-structure-service-businesses",
    category: "Conversion",
    date: "April 2, 2026",
  },
  {
    icon: "02",
    title: "What to include on a pricing page when buyers are comparing options",
    description:
      "A transparent pricing layout can reduce hesitation, improve trust, and shorten the sales cycle.",
    href: "/blog/pricing-page-best-practices",
    category: "Pricing",
    date: "March 28, 2026",
  },
  {
    icon: "03",
    title: "Writing homepage copy that explains value in under 10 seconds",
    description:
      "Learn how to lead with outcomes, support them with proof, and keep the message easy to scan on mobile.",
    href: "/blog/homepage-copy-under-10-seconds",
    category: "Copywriting",
    date: "March 21, 2026",
  },
  {
    icon: "04",
    title: "Why testimonials work better when they describe a specific result",
    description:
      "Generic praise is easy to ignore. Specific outcomes make your credibility feel real and memorable.",
    href: "/blog/testimonials-that-build-trust",
    category: "Trust",
    date: "March 14, 2026",
  },
  {
    icon: "05",
    title: "A simple content plan for teams that want steady organic traffic",
    description:
      "Build a repeatable publishing system around buyer questions, not random topics that never compound.",
    href: "/blog/content-plan-organic-traffic",
    category: "SEO",
    date: "March 7, 2026",
  },
  {
    icon: "06",
    title: "How to make your contact page feel welcoming, not transactional",
    description:
      "Small details like response times, expectations, and next steps can make more people reach out.",
    href: "/blog/contact-page-best-practices",
    category: "Experience",
    date: "February 28, 2026",
  },
];

const categories = [
  "All topics",
  "Strategy",
  "Conversion",
  "Copywriting",
  "Pricing",
  "Trust",
  "SEO",
  "Experience",
];

export default function BlogPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              <CalendarDays className="h-4 w-4" />
              Featured article
            </div>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {featuredPost.category}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {featuredPost.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {featuredPost.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>{featuredPost.date}</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <span>8 min read</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={featuredPost.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-secondary)]"
                >
                  Read featured article
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-black/5 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              <Search className="h-4 w-4" />
              Browse by topic
            </div>
            <div className="mt-6 grid gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  <span>{category}</span>
                  <Filter className="h-4 w-4 text-white/50" />
                </button>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">What readers get here</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Clear advice on messaging, conversion, content planning, and the small details that make a site feel credible.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading
          eyebrow="Recent articles"
          title="Practical ideas for teams that want better results from their website"
          description="Every post is written to help you make a decision, improve a page, or sharpen your content strategy."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Content filters"
            title="Find the right article faster"
            description="Use categories to jump straight to the topic that matches your current goal."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.slice(1).map((category) => (
              <Link
                key={category}
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <Tag className="h-4 w-4" />
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <NewsletterSignup
          title="Get practical insights in your inbox"
          description="Monthly updates on growth, design, and customer experience—written for teams that want clear ideas they can use right away."
          buttonLabel="Subscribe"
          placeholder="Enter your email address"
        />
      </section>
    </main>
  );
}
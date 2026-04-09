import { CTABanner, PageHeader, SectionHeading, TestimonialCard } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Professional Website",
  description: "Read customer testimonials, ratings, and outcome-focused case highlights from teams that trust our work.",
};

const testimonials = [
  {
    icon: "★",
    title: "Clear communication from day one",
    description:
      "The team translated our goals into a polished website that feels credible, modern, and easy to navigate. We saw more qualified inquiries within the first month.",
    author: "Maya Chen",
    company: "Founder, Northstar Studio",
    rating: 5,
  },
  {
    icon: "★",
    title: "A smoother buying journey",
    description:
      "Our new site makes it much easier for prospects to understand what we do and why it matters. The structure alone improved engagement across key pages.",
    author: "Jordan Patel",
    company: "Marketing Director, Brightline Consulting",
    rating: 5,
  },
  {
    icon: "★",
    title: "Fast, thoughtful, and strategic",
    description:
      "They balanced design quality with practical conversion thinking. The result is a site that looks premium and supports sales conversations better than before.",
    author: "Elena Brooks",
    company: "Operations Lead, Summit Health Group",
    rating: 5,
  },
  {
    icon: "★",
    title: "Exactly the level of polish we needed",
    description:
      "We wanted a website that would reflect the quality of our service. The final product feels sharp, trustworthy, and aligned with our brand.",
    author: "Chris Morgan",
    company: "Managing Partner, Harbor Legal",
    rating: 5,
  },
  {
    icon: "★",
    title: "Better clarity for our audience",
    description:
      "The messaging is concise, the layout is easy to scan, and the calls to action are much more effective. It has made our marketing efforts easier to support.",
    author: "Priya Singh",
    company: "Growth Lead, Atlas Finance",
    rating: 5,
  },
  {
    icon: "★",
    title: "A reliable partner throughout",
    description:
      "From planning to launch, everything was handled with care. We appreciated the transparency, the pace, and the attention to detail.",
    author: "Daniel Rivera",
    company: "CEO, Meridian Advisory",
    rating: 5,
  },
];

const caseHighlights = [
  {
    title: "Qualified leads increased by 38%",
    description:
      "A clearer service structure and stronger calls to action helped a consulting firm turn more visitors into booked discovery calls.",
  },
  {
    title: "Bounce rate dropped by 21%",
    description:
      "A cleaner homepage and better content hierarchy made it easier for visitors to find what they needed and keep exploring.",
  },
  {
    title: "Sales team saved hours each week",
    description:
      "A more informative website reduced repetitive questions and gave prospects the context they needed before reaching out.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by teams that need a website to do real work"
        description="These reviews reflect what matters most: clear communication, stronger credibility, and measurable business outcomes."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-sm md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Rating summary
          </p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-5xl font-semibold text-slate-950">5.0</span>
            <div className="pb-1">
              <Stars rating={5} />
              <p className="mt-1 text-sm text-slate-600">Average rating from 6 client reviews</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Communication</span>
              <span className="font-semibold">5.0</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-full rounded-full bg-[var(--color-primary)]" />
            </div>
            <div className="flex items-center justify-between">
              <span>Design quality</span>
              <span className="font-semibold">5.0</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-full rounded-full bg-[var(--color-secondary)]" />
            </div>
            <div className="flex items-center justify-between">
              <span>Business impact</span>
              <span className="font-semibold">5.0</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[92%] rounded-full bg-[var(--color-accent)]" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-sm md:col-span-2">
          <SectionHeading
            eyebrow="Customer feedback"
            title="What clients say after launch"
            description="We focus on clarity, trust, and conversion so the website supports your business long after the project is complete."
            className="text-white"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Responsive communication and clear milestones",
              "A polished brand presence that feels premium",
              "Better-qualified leads and stronger inquiry quality",
              "Content that explains the offer without jargon",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real reviews from real clients"
          description="A selection of customer experiences that highlight the value of a well-designed, conversion-focused website."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-3xl">
              <TestimonialCard
                icon={testimonial.icon}
                title={testimonial.title}
                description={
                  <div className="space-y-4">
                    <Stars rating={testimonial.rating} />
                    <p>{testimonial.description}</p>
                    <div>
                      <p className="font-semibold text-slate-950">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading
          eyebrow="Case highlights"
          title="Outcomes that matter to your business"
          description="Short, measurable wins that show how better messaging, structure, and design can improve performance."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {caseHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Outcome
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Ready to turn trust into action?"
        description="Book a consultation to talk through your goals, timeline, and the kind of website that will support growth."
        buttonLabel="Book a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
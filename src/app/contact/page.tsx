"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs, Button, PageHeader, SectionHeading } from "@/components";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <PageHeader
          eyebrow="Contact"
          title="Talk to the right team, faster"
          description="Whether you need a quote, support, or a strategic conversation, we’ll point you to the best next step and respond with clear, useful guidance."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Send a message"
            title="Tell us what you’re trying to achieve"
            description="Share a few details and we’ll route your message to the right person. For urgent support, call us directly during business hours."
          />

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                <div>
                  <p className="font-semibold">Thanks — we received your message.</p>
                  <p className="mt-1 text-sm leading-6">
                    A member of our team will reply within one business day. If your request is urgent, call
                    <Link className="ml-1 font-medium underline" href="tel:+1-555-014-2024">
                      +1 (555) 014-2024
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  placeholder="jordan@company.com"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Phone
                <input
                  name="phone"
                  type="tel"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  placeholder="+1 (555) 014-2024"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Topic
                <select
                  name="topic"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  defaultValue="General inquiry"
                >
                  <option>General inquiry</option>
                  <option>Project quote</option>
                  <option>Support request</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                placeholder="Tell us about your goals, timeline, and any details that would help us respond well."
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" className="justify-center sm:w-auto">
                Send message
              </Button>
              <p className="text-sm text-black/60">
                We typically reply within one business day. For immediate help, call our office.
              </p>
            </div>
          </form>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-3xl border border-black/5 bg-[var(--background)] p-8 shadow-sm">
            <SectionHeading
              eyebrow="Contact details"
              title="Reach us directly"
              description="Choose the channel that fits your needs best. We keep response times transparent so you know what to expect."
            />
            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <Mail className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <Link className="text-black/70 underline transition hover:text-black" href="mailto:hello@northstarstudio.com">
                    hello@northstarstudio.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <Phone className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <Link className="text-black/70 underline transition hover:text-black" href="tel:+1-555-014-2024">
                    +1 (555) 014-2024
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-black/70">1200 Market Street, Suite 400, San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <Clock3 className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-black/70">Monday–Friday, 9:00 AM–5:30 PM PT</p>
                  <p className="text-black/60">Average response time: under 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Location"
              title="Visit us in person"
              description="If you’re nearby, we’re happy to meet at our office by appointment. The map area below can be connected to your preferred provider."
            />
            <div className="mt-6 rounded-3xl border border-dashed border-black/15 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--primary)]/10 p-6">
              <div className="flex min-h-64 items-center justify-center rounded-2xl bg-white/70 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-[var(--primary)]" />
                  <p className="mt-3 font-semibold">Map placeholder</p>
                  <p className="mt-1 text-sm text-black/60">Embed your office map or directions here.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Need help now?"
              title="Helpful links"
              description="If your question is simple, these pages may get you an answer faster than waiting for a reply."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Visit FAQ <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:border-[var(--primary)]"
              >
                Explore services
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:border-[var(--primary)]"
              >
                View pricing
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
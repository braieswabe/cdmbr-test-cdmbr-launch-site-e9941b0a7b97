"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type NewsletterSignupProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  placeholder?: string;
  onSubmit?: (email: string) => Promise<void> | void;
  className?: string;
};

export function NewsletterSignup({
  title = "Get practical insights in your inbox",
  description = "Monthly updates on growth, design, and customer experience—written for teams that want clear ideas they can use right away.",
  buttonLabel = "Subscribe",
  placeholder = "Enter your email address",
  onSubmit,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      await onSubmit?.(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <Mail className="h-3.5 w-3.5" />
            Newsletter
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "success" ? (
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Subscribed
                </span>
              ) : (
                buttonLabel
              )}
            </button>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            No spam, ever. Unsubscribe anytime. We respect your inbox.
          </p>
        </form>
      </div>
    </motion.section>
  );
}

export default NewsletterSignup;

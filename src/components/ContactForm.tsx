"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, Mail, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export type ContactFormProps = {
  className?: string;
  onSubmit?: (data: FormState) => Promise<void> | void;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (values.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (values.company.trim().length < 2) nextErrors.company = "Tell us your company name.";
    if (values.message.trim().length < 20)
      nextErrors.message = "Share a few details so we can respond thoughtfully.";

    return nextErrors;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(form);
      setSubmitted(true);
      setForm(initialState);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={cn("w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8", className)}>
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
          Start the conversation
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Tell us what you&apos;re building, what&apos;s blocking progress, and what a successful outcome looks like.
          We&apos;ll reply with clear next steps.
        </p>
      </div>

      {submitted ? (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">Thanks — your message is on its way.</p>
            <p className="mt-1 text-sm leading-6">
              We typically respond within one business day with a thoughtful, practical reply.
            </p>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Full name"
            icon={<User className="h-4 w-4" />}
            value={form.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Jordan Lee"
            error={errors.name}
          />
          <Field
            label="Email address"
            icon={<Mail className="h-4 w-4" />}
            value={form.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="jordan@company.com"
            error={errors.email}
            type="email"
          />
        </div>

        <Field
          label="Company"
          icon={<MessageSquare className="h-4 w-4" />}
          value={form.company}
          onChange={(value) => handleChange("company", value)}
          placeholder="Northstar Studio"
          error={errors.company}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">Project details</label>
          <textarea
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Share your goals, timeline, budget range, or any constraints we should know about."
            rows={6}
            className={cn(
              "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4",
              errors.message
                ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                : "border-slate-200 focus:border-[color:var(--primary)] focus:ring-blue-100"
            )}
          />
          {errors.message ? <p className="mt-2 text-sm text-rose-600">{errors.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? "Sending message..." : "Send inquiry"}
        </button>

        <p className="text-sm leading-6 text-slate-500">
          By submitting this form, you agree to be contacted about your inquiry. We respect your inbox and never share your details.
        </p>
        {!isValid ? null : null}
      </form>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  icon: React.ReactNode;
};

function Field({ label, value, onChange, placeholder, error, type = "text", icon }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[color:var(--foreground)]">{label}</label>
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm transition-all duration-200 focus-within:ring-4",
          error
            ? "border-rose-300 focus-within:border-rose-500 focus-within:ring-rose-100"
            : "border-slate-200 focus-within:border-[color:var(--primary)] focus-within:ring-blue-100"
        )}
      >
        <span className="text-slate-400">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
      {error ? <p className="mt-2 text-sm text-rose-600">{error}</p> : null}
    </div>
  );
}

export default ContactForm;

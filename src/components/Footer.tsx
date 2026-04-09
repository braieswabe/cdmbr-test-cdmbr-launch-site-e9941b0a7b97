import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Page", href: "/generic" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "X", href: "https://www.x.com", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-base font-bold text-white shadow-lg shadow-blue-500/20">
              P
            </span>
            <div>
              <p className="text-lg font-semibold text-white">Professional website</p>
              <p className="text-sm text-slate-400">Modern digital presence for ambitious teams.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Build trust faster with a polished website that explains your value clearly,
            guides visitors to action, and supports growth across every stage of the buyer journey.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                >
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Stay in the loop
          </h2>
          <p className="text-sm leading-6 text-slate-400">
            Get practical updates on website strategy, conversion improvements, and content ideas
            that help your business stand out.
          </p>
          <form className="space-y-3">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <div className="flex rounded-2xl border border-white/10 bg-white/5 p-1">
              <Mail className="ml-3 h-5 w-5 self-center text-slate-400" />
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-xs leading-5 text-slate-500">
            No spam. Just useful insights and occasional product updates.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Professional website. All rights reserved.</p>
          <p>Designed for clarity, trust, and measurable growth.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
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

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-slate-100"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
            P
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              Professional website
            </span>
            <span className="text-xs text-slate-500">Modern. Clear. Conversion-ready.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Book a call
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            View pricing
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-slate-200/70 bg-white/95 transition-all duration-300 ease-out`}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Book a call
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              View pricing
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

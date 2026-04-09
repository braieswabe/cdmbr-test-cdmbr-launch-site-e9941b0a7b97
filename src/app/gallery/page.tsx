import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, ImageIcon, LayoutGrid, PlayCircle, Sparkles } from "lucide-react";
import { CTABanner, GalleryGrid, PageHeader, SectionHeading } from "@/components";

export const metadata: Metadata = {
  title: "Gallery | Professional Website",
  description:
    "Browse a curated gallery of brand visuals, product shots, event coverage, and creative assets designed to build trust and showcase quality.",
};

const galleryItems = [
  {
    id: "brand-launch",
    title: "Brand launch campaign",
    description: "A polished visual system for a new product launch, including hero imagery, social crops, and landing page assets.",
    imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brand launch campaign showcasing hero imagery and landing page assets",
    category: "Branding",
  },
  {
    id: "executive-portraits",
    title: "Executive portrait series",
    description: "Consistent headshots and team portraits designed for about pages, press kits, and LinkedIn profiles.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional executive portrait with clean background",
    category: "Portraits",
  },
  {
    id: "product-detail",
    title: "Product detail shots",
    description: "Close-up photography that highlights materials, craftsmanship, and the features customers care about most.",
    imageSrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up product photography highlighting craftsmanship and detail",
    category: "Product",
  },
  {
    id: "event-coverage",
    title: "Client event coverage",
    description: "Event imagery that captures energy, attendance, and the moments that matter for post-event marketing.",
    imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Client event coverage showing atmosphere and engagement",
    category: "Events",
  },
  {
    id: "workspace-culture",
    title: "Workspace and culture",
    description: "Authentic office photography that helps candidates and customers understand the team behind the brand.",
    imageSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern workspace showing authentic team culture",
    category: "Culture",
  },
  {
    id: "hero-concepts",
    title: "Website hero concepts",
    description: "High-impact visuals built to support homepage messaging, service pages, and campaign landing pages.",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bold website hero concept with strong visual hierarchy",
    category: "Web",
  },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="border-b border-black/5 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <PageHeader
            eyebrow="Gallery"
            title="A visual collection built to show quality at a glance"
            description="Explore a curated set of brand visuals, product imagery, and event coverage that help visitors understand the standard of work before they ever book a call."
          />
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-black/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <ImageIcon className="h-4 w-4 text-[var(--primary)]" />
              Brand photography
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <Camera className="h-4 w-4 text-[var(--primary)]" />
              Product and lifestyle
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2">
              <PlayCircle className="h-4 w-4 text-[var(--primary)]" />
              Motion-ready assets
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="gallery_intro"
              title="What to look for in this collection"
              description="Each image is selected to demonstrate clarity, consistency, and commercial usefulness. The goal is not just to look polished, but to support real business goals across web, social, and sales materials."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Consistent lighting and color treatment across every set",
                "Compositions designed for web, print, and social cropping",
                "Authentic moments that feel credible, not staged",
                "Assets that support conversion, recruiting, and brand trust",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-[var(--accent)]" />
                    <p className="text-sm leading-6 text-black/75">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 text-white shadow-xl">
            <LayoutGrid className="h-10 w-10 text-white/90" />
            <h2 className="mt-6 text-2xl font-semibold">Built for decision-makers</h2>
            <p className="mt-4 text-white/85">
              Whether you are reviewing a photographer, creative partner, or in-house asset library, this gallery is organized to make quality easy to assess.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li>• Clear captions for context and use case</li>
              <li>• Responsive grid layout for fast scanning</li>
              <li>• Expanded viewing for closer inspection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black/[0.02] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="image_grid"
            title="Selected work"
            description="A responsive gallery that balances visual impact with practical detail, so visitors can quickly understand the range and quality of the work."
          />
          <div className="mt-10">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-[var(--primary)]">
                <ImageIcon className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">caption_strip</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="lightbox_view"
            title="Open images in a focused view"
            description="Use the lightbox experience to inspect composition, detail, and presentation without losing context."
          />
          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.slice(0, 6).map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02]">
                  <Image src={item.imageSrc} alt={item.imageAlt} width={400} height={224} className="h-56 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="mt-1 text-sm text-black/65">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-black/60">
              Tip: pair this gallery with a strong <Link href="/portfolio" className="font-medium text-[var(--primary)] underline-offset-4 hover:underline">portfolio page</Link> to show both breadth and depth.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to present your work with more clarity?"
        description="Create a gallery that helps visitors see the quality, range, and attention to detail behind your brand."
        buttonLabel="Start a project"
        buttonHref="/contact"
      />
    </main>
  );
}
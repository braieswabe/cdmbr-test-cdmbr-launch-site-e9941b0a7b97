"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category?: string;
};

export type GalleryGridProps = {
  items: GalleryItem[];
  className?: string;
};

export function GalleryGrid({ items, className }: GalleryGridProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {item.category ? (
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                {item.category}
              </div>
            ) : null}
          </div>

          <div className="space-y-2 p-5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default GalleryGrid;

"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export type ModalLightboxProps = {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

export function ModalLightbox({
  open,
  title,
  description,
  children,
  onClose,
  className = "",
}: ModalLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-lightbox-title"
      aria-describedby={description ? "modal-lightbox-description" : undefined}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-slate-950/70 backdrop-blur-sm transition-opacity"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <h2 id="modal-lightbox-title" className="text-lg font-semibold text-slate-900 sm:text-xl">
              {title}
            </h2>
            {description ? (
              <p id="modal-lightbox-description" className="mt-1 text-sm leading-6 text-slate-600">
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-auto bg-slate-50 p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLightbox;

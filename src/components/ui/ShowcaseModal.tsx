"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { properties } from "@/data/properties";
import { dispatchOpenProperty } from "@/lib/events";

const SLIDE_MS = 4200;

const slides = properties.flatMap((p) =>
  p.gallery.slice(0, 2).map((room) => ({
    image: room.image,
    room: room.room,
    property: p,
  }))
);

export default function ShowcaseModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [wasOpen, setWasOpen] = useState(open);

  // Restart the reel from the top each time the modal opens — adjusting
  // state during render avoids an extra effect + render pass.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setIndex(0);
      setPaused(false);
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Re-armed on every index change (auto or manual) so a manual click never
  // gets immediately overridden by a stale timer, and paused so hovering the
  // reel (or the explicit pause control) freezes it in place.
  useEffect(() => {
    if (!open || paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, [open, paused, index]);

  const slide = slides[index];

  const handleViewProperty = () => {
    dispatchOpenProperty(slide.property.id);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <motion.div
            className={`showcase-panel${paused ? " paused" : ""}`}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close showcase-close" aria-label="Close" onClick={onClose}>
              ✕
            </button>

            <div className="showcase-progress">
              {slides.map((s, i) => (
                <button
                  key={`${s.property.id}-${s.room}`}
                  className="showcase-progress-seg"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                >
                  {i < index && <span className="showcase-progress-fill done" />}
                  {i === index && (
                    <span key={index} className="showcase-progress-fill active" />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="showcase-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: SLIDE_MS / 1000 + 0.4, ease: "linear" },
                }}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.property.name} — ${slide.room}`}
                  fill
                  sizes="90vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="showcase-scrim" />

            <div className="showcase-caption">
              <p className="showcase-eyebrow">Featured Across India</p>
              <h3>{slide.property.name}</h3>
              <p className="showcase-meta">
                {slide.property.location} · {slide.property.priceLabel}
              </p>
              <button className="btn btn-primary btn-small" onClick={handleViewProperty}>
                View Property
              </button>
            </div>

            <div className="showcase-nav">
              <button
                aria-label="Previous slide"
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
              >
                ←
              </button>
              <button
                aria-label={paused ? "Play" : "Pause"}
                onClick={() => setPaused((p) => !p)}
              >
                {paused ? "▶" : "❚❚"}
              </button>
              <button
                aria-label="Next slide"
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
              >
                →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

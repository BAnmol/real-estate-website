"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <p className="eyebrow">Client Stories</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Loved by <em>buyers &amp; sellers</em>
            </h2>
          </Reveal>
        </div>

        <Reveal className="testimonial-slider" delay={0.15}>
          <div
            className="testimonial-avatars"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`testimonial-avatar${i === index ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
              >
                <Image src={t.image} alt={t.name} width={64} height={64} />
              </button>
            ))}
          </div>

          <div
            className="testimonial-track"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                className="testimonial-slide active"
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
              >
                <p className="quote">&ldquo;{current.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <strong>{current.name}</strong>
                  <span>{current.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-controls">
            <button aria-label="Previous testimonial" onClick={() => goTo(index - 1)}>
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={i === index ? "active" : ""}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button aria-label="Next testimonial" onClick={() => goTo(index + 1)}>
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

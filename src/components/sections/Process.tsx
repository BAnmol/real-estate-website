"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    index: "01",
    title: "Browse & Discover",
    body: "Filter through curated listings by location, price, and style — each with full 3D previews.",
  },
  {
    index: "02",
    title: "Tour in 3D",
    body: "Step inside from anywhere. Walk every room, check every angle, before you ever visit in person.",
  },
  {
    index: "03",
    title: "Close With Confidence",
    body: "Connect with a dedicated agent, schedule an in-person visit, and close knowing exactly what you're getting.",
  },
];

const WAVE_PATH =
  "M0,40 C220,90 480,0 720,40 C960,80 1220,10 1440,50 L1440,100 L0,100 Z";

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-wave process-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill="#0e3b2c" />
        </svg>
      </div>
      <div className="process-wave process-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill="#0e0d0b" />
        </svg>
      </div>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <p className="eyebrow">How It Works</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Three steps to <em>your next home</em>
            </h2>
          </Reveal>
        </div>

        <div className="process-track">
          <div className="process-line">
            <motion.i
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 0.84, 0.44, 1] }}
            />
          </div>
          {steps.map((step, i) => (
            <Reveal key={step.index} className="process-step" delay={i * 0.1}>
              <span className="process-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

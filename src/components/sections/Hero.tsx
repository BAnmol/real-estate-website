"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { DragState } from "@/types/scene";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const EASE = [0.16, 0.84, 0.44, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};
const wordVariant = {
  hidden: { opacity: 0, y: "110%" },
  show: { opacity: 1, y: "0%", transition: { duration: 1.1, ease: EASE } },
};

const lines = [
  ["Step", "Inside"],
  ["Before", "You", "Move", "In"],
];

export default function Hero({
  loaded,
  onOpenShowcase,
}: {
  loaded: boolean;
  onOpenShowcase: () => void;
}) {
  const dragState = useRef<DragState>({
    rotation: 0,
    dragging: false,
    pointerX: 0,
    pointerY: 0,
  });
  const lastX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const updatePointer = (clientX: number, clientY: number) => {
    dragState.current.pointerX = (clientX / window.innerWidth - 0.5) * 2;
    dragState.current.pointerY = (clientY / window.innerHeight - 0.5) * 2;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragState.current.dragging = true;
    lastX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updatePointer(e.clientX, e.clientY);
    if (dragState.current.dragging) {
      const delta = e.clientX - lastX.current;
      dragState.current.rotation += delta * 0.008;
      lastX.current = e.clientX;
    }
  };

  const endDrag = () => {
    dragState.current.dragging = false;
    setIsDragging(false);
  };

  return (
    <section className="hero" id="top">
      <div
        className={`hero-canvas-wrap${isDragging ? " dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <HeroScene dragState={dragState} />
      </div>
      <div className="hero-gradient" />
      <span className="hero-drag-hint">Drag the model to explore</span>

      <div className="container hero-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Photorealistic 3D Real Estate
          </motion.p>
          <h1 className="hero-title">
            {lines.map((line, li) => (
              <span className="line" key={li}>
                {line.map((word, wi) => (
                  <motion.span
                    className="word"
                    key={wi}
                    variants={wordVariant}
                    style={{ marginRight: "0.28em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <motion.p className="hero-sub" variants={fadeUp}>
            Explore immersive 3D walkthroughs, cinematic virtual tours, and
            premium listings — every home, rendered in stunning reality.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#properties" className="btn btn-primary">
              Explore Properties
            </a>
            <button className="btn btn-ghost play-btn" onClick={onOpenShowcase}>
              <span className="play-icon">
                <i />
              </span>
              Watch Showcase
            </button>
          </motion.div>
          <motion.div className="hero-badges" variants={fadeUp}>
            <div className="badge">
              <strong>500+</strong>
              <span>Properties Sold</span>
            </div>
            <div className="badge">
              <strong>3D</strong>
              <span>Virtual Tours</span>
            </div>
            <div className="badge">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-cue-line">
          <i />
        </div>
      </div>
    </section>
  );
}

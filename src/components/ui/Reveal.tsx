"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 0.84, 0.44, 1] as const;

const base: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function Reveal({
  children,
  type = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  type?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}) {
  const v = base[type];
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: v.hidden,
        show: { ...v.show, transition: { duration: 1, ease: EASE, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

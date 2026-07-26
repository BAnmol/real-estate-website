"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.44, 1] as const;

// A pediment/gateway glyph — an abstracted architectural entrance rather
// than a literal house icon. Rendered as fine gold linework with no
// background container, so it reads as a mark, not a UI button.
export default function Logo({
  size = 40,
  interactive = true,
}: {
  size?: number;
  interactive?: boolean;
}) {
  const uid = useId();
  const strokeId = `aris-mark-${uid}`;

  return (
    <motion.svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 80 64"
      aria-hidden="true"
      initial="hidden"
      animate="visible"
      whileHover={interactive ? "hover" : undefined}
      variants={{ hover: { scale: 1.07, transition: { duration: 0.3, ease: EASE } } }}
      style={{ transformOrigin: "50% 50%", overflow: "visible" }}
    >
      <defs>
        <linearGradient id={strokeId} x1="8" y1="8" x2="72" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e3ba7c" />
          <stop offset="55%" stopColor="#b8863f" />
          <stop offset="100%" stopColor="#8f6427" />
        </linearGradient>
      </defs>

      {/* Roofline / pediment — draws itself in */}
      <motion.polyline
        points="10,50 40,8 70,50"
        fill="none"
        stroke={`url(#${strokeId})`}
        strokeWidth={4.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 0.65, ease: EASE } },
        }}
      />

      {/* Threshold line — draws in after the roofline settles */}
      <motion.line
        x1="4"
        y1="58"
        x2="76"
        y2="58"
        stroke={`url(#${strokeId})`}
        strokeWidth={3.5}
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.45, ease: EASE, delay: 0.55 },
          },
        }}
      />

      {/* Apex accent — a small jewel-like seal completing the mark */}
      <motion.circle
        cx="40"
        cy="8"
        r="4.2"
        fill="#0e3b2c"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 380, damping: 13, delay: 0.85 },
          },
          hover: { fill: "#1f6b4d" },
        }}
        style={{ transformOrigin: "40px 8px" }}
      />
    </motion.svg>
  );
}

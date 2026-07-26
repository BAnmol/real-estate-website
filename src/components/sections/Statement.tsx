"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.44, 1] as const;

export default function Statement() {
  return (
    <section className="statement">
      <div className="container statement-inner">
        <motion.h2
          className="statement-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          Step inside. Fall in love. <em>Move in.</em>
        </motion.h2>
        <svg
          className="statement-underline"
          viewBox="0 0 600 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M2,12 C100,2 150,22 250,12 C350,2 400,22 500,12 C550,7 570,17 598,10"
            fill="none"
            stroke="#b98a4e"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          />
        </svg>
      </div>
    </section>
  );
}

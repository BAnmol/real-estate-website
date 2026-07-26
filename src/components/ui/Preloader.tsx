"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.random() * 18;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        setProgress(pct);
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
        }, 300);
      } else {
        setProgress(pct);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!hidden && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <div className="preloader-inner">
            <div className="preloader-mark">
              <Logo size={44} />
            </div>
            <span className="preloader-logo">ARIS</span>
            <div className="preloader-bar">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateActivity, type ActivityEvent } from "@/data/activity";

export default function LiveActivity() {
  const [dismissed, setDismissed] = useState(false);
  const [shown, setShown] = useState(false);
  const [event, setEvent] = useState<ActivityEvent>(generateActivity);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) setShown(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!shown || dismissed) return;
    const interval = setInterval(() => {
      setEvent(generateActivity());
    }, 7000);
    return () => clearInterval(interval);
  }, [shown, dismissed]);

  return (
    <AnimatePresence>
      {shown && !dismissed && (
        <motion.div
          className="live-activity"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <span className="live-activity-dot" />
          <AnimatePresence mode="wait">
            <motion.span
              key={event.text}
              className="live-activity-text"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {event.text} · <strong>{event.meta}</strong>
            </motion.span>
          </AnimatePresence>
          <button
            className="live-activity-close"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

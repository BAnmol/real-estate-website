"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 0.84, 0.44, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, target]);

  return { ref, value: value.toFixed(decimals) };
}

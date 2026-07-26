"use client";

import { useCountUp } from "@/hooks/useCountUp";
import Reveal from "@/components/ui/Reveal";

function Stat({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  delay,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const { ref, value } = useCountUp(target, decimals);
  return (
    <Reveal className="stat" delay={delay}>
      <span className="stat-num" ref={ref as React.RefObject<HTMLSpanElement>}>
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        <Stat target={1200} suffix="+" label="Properties Listed" delay={0} />
        <Stat target={32} label="Cities Covered" delay={0.08} />
        <Stat target={850} prefix="₹" suffix="+ Cr" label="In Total Sales" delay={0.16} />
        <Stat target={4.9} decimals={1} suffix="/5" label="Client Rating" delay={0.24} />
      </div>
    </section>
  );
}

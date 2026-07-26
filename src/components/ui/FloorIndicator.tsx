"use client";

import { useEffect, useState } from "react";

const floors = [
  { id: "top", label: "Arrival" },
  { id: "properties", label: "The Collection" },
  { id: "features", label: "Experience" },
  { id: "process", label: "The Process" },
  { id: "neighborhoods", label: "Neighborhoods" },
  { id: "faq", label: "Answers" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function FloorIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = floors
      .map((f) => document.getElementById(f.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = floors.findIndex((f) => f.id === entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="floor-indicator" aria-hidden="true">
      <div className="floor-readout">
        <span className="floor-current">{String(active + 1).padStart(2, "0")}</span>
        <span className="floor-total">/{String(floors.length).padStart(2, "0")}</span>
      </div>
      <div className="floor-track">
        {floors.map((f, i) => (
          <a
            href={`#${f.id}`}
            className={`floor-item${i === active ? " active" : ""}`}
            key={f.id}
            tabIndex={-1}
          >
            <span className="floor-dot" />
            <span className="floor-tooltip">{f.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

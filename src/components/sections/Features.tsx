"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    num: "01",
    title: "Interactive 3D Walkthroughs",
    body: "Pan, zoom, and roam freely through every room. Our real-time 3D engine renders each property with true-to-life lighting, materials, and depth — right in your browser.",
    points: ["No app or headset required", "Loads in under a second", "Works on any device"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1100&auto=format&fit=crop",
    alt: "Interactive 3D walkthrough of a living room",
  },
  {
    num: "02",
    title: "360° Virtual Tours",
    body: "Step inside with immersive, photo-based tours captured directly from within the space — complete with floor-plan navigation and hotspot details.",
    points: ["Captured on location", "Floor plan integration", "Shareable in one click"],
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1100&auto=format&fit=crop",
    alt: "360 degree virtual tour of a modern kitchen",
    reverse: true,
  },
  {
    num: "03",
    title: "Instant Virtual Staging",
    body: "See any space fully furnished in seconds. Swap styles, layouts, and finishes on the fly to help buyers picture the home as their own.",
    points: ["Multiple style presets", "Real-time material swaps", "Exportable renders"],
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1100&auto=format&fit=crop",
    alt: "Virtual staging of an empty room",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <p className="eyebrow">The Experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Every listing, <em>brought to life</em>
            </h2>
          </Reveal>
        </div>

        {features.map((f) => (
          <div className={`feature-row${f.reverse ? " reverse" : ""}`} key={f.num}>
            <Reveal type={f.reverse ? "right" : "left"} className="feature-media">
              <Image src={f.image} alt={f.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <div className="feature-media-frame" />
            </Reveal>
            <Reveal type={f.reverse ? "left" : "right"} className="feature-text">
              <span className="feature-num">{f.num}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <ul className="feature-list">
                {f.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

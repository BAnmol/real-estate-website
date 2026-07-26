"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { properties } from "@/data/properties";
import { neighborhoods } from "@/data/neighborhoods";
import { dispatchCityFilter } from "@/lib/events";

export default function Neighborhoods() {
  const handleClick = (city: string) => {
    dispatchCityFilter(city);
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="neighborhoods" id="neighborhoods">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <p className="eyebrow">Where We Operate</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Six cities, <em>one standard</em>
            </h2>
          </Reveal>
        </div>

        <div className="neighborhood-grid">
          {neighborhoods.map((n, i) => {
            const count = properties.filter((p) => p.city === n.city).length;
            return (
              <Reveal type="scale" delay={i * 0.06} key={n.city}>
                <button
                  className="neighborhood-card"
                  onClick={() => handleClick(n.city)}
                  aria-label={`View properties in ${n.city}`}
                >
                  <div className="neighborhood-media">
                    <Image
                      src={n.image}
                      alt={n.city}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="neighborhood-info">
                    <h3>{n.city}</h3>
                    <p>{n.tagline}</p>
                    <span className="neighborhood-count">
                      {count} {count === 1 ? "Property" : "Properties"} →
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

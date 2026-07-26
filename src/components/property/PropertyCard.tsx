"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Property } from "@/data/properties";

export default function PropertyCard({
  property,
  onView,
}: {
  property: Property;
  onView: () => void;
}) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [8, -8]);
  const rotateY = useTransform(mx, [0, 1], [-8, 8]);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - bounds.left) / bounds.width);
    my.set((e.clientY - bounds.top) / bounds.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onView();
    }
  };

  return (
    <motion.article
      layout
      className="property-card"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onView}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${property.tag.toLowerCase()} of ${property.name}`}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
    >
      <div className="property-media">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <span className="tag">{property.tag}</span>
        <div className="property-view-overlay">
          <span className="property-view-btn">View {property.tag}</span>
        </div>
      </div>
      <div className="property-info">
        <div className="property-top">
          <h3>{property.name}</h3>
          <span className="price">{property.priceLabel}</span>
        </div>
        <p className="property-loc">{property.location}</p>
        <ul className="property-meta">
          <li>{property.beds} Beds</li>
          <li>{property.baths} Baths</li>
          <li>{property.sqft.toLocaleString()} sqft</li>
        </ul>
      </div>
    </motion.article>
  );
}

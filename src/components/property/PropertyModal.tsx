"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Property } from "@/data/properties";
import TourStage from "./TourStage";

const EASE = [0.16, 0.84, 0.44, 1] as const;

export default function PropertyModal({
  property,
  onClose,
}: {
  property: Property | null;
  onClose: () => void;
}) {
  const [roomIndex, setRoomIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lastId, setLastId] = useState(property?.id);

  // Reset the active room when a different property opens — adjusting state
  // during render (rather than in an Effect) avoids an extra render pass.
  if (property?.id !== lastId) {
    setLastId(property?.id);
    setRoomIndex(0);
    setDirection(1);
  }

  useEffect(() => {
    if (!property) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [property, onClose]);

  const goToRoom = (i: number) => {
    setDirection(i > roomIndex ? 1 : -1);
    setRoomIndex(i);
  };

  const room = property?.gallery[roomIndex];

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <motion.div
            className="property-modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close property-modal-close"
              aria-label="Close"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="property-modal-tour">
              <div className="property-modal-tour-badge">
                <span
                  className={`tour-badge-icon${
                    property.tag === "360° Tour" ? " spin" : " cube"
                  }`}
                />
                {property.tag} Preview
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                {room && (
                  <motion.div
                    key={room.image}
                    className="property-modal-image"
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 40 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <TourStage room={room} tag={property.tag} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="property-modal-rooms">
                {property.gallery.map((g, i) => (
                  <button
                    key={g.room}
                    className={`room-tab${i === roomIndex ? " active" : ""}`}
                    onClick={() => goToRoom(i)}
                  >
                    {g.room}
                  </button>
                ))}
              </div>
            </div>

            <div className="property-modal-details">
              <span
                className={`status-pill${
                  property.status === "Ready to Move" ? " ready" : " construction"
                }`}
              >
                {property.status}
              </span>
              <h3>{property.name}</h3>
              <p className="property-modal-loc">{property.location}</p>
              <div className="property-modal-price">{property.priceLabel}</div>

              <ul className="property-modal-stats">
                <li>
                  <strong>{property.beds}</strong>
                  <span>Beds</span>
                </li>
                <li>
                  <strong>{property.baths}</strong>
                  <span>Baths</span>
                </li>
                <li>
                  <strong>{property.sqft.toLocaleString()}</strong>
                  <span>Sqft</span>
                </li>
              </ul>

              <p className="property-modal-desc">{property.description}</p>

              <div className="property-modal-amenities">
                {property.amenities.map((a) => (
                  <span key={a} className="amenity-chip">
                    {a}
                  </span>
                ))}
              </div>

              <p className="property-modal-rera">RERA: {property.rera}</p>

              <div className="property-modal-actions">
                <a href="#contact" className="btn btn-primary" onClick={onClose}>
                  Schedule a Visit
                </a>
                <a href="#contact" className="btn btn-outline" onClick={onClose}>
                  Contact Agent
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

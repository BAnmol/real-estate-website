"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { GalleryRoom, Property } from "@/data/properties";

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export default function TourStage({
  room,
  tag,
}: {
  room: GalleryRoom;
  tag: Property["tag"];
}) {
  const isPano = tag === "360° Tour";
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const wiggle = useRef<{ stop: () => void } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const rawA = useMotionValue(0);
  const rawB = useMotionValue(0);
  const a = useSpring(rawA, { stiffness: 140, damping: 22, mass: 0.4 });
  const b = useSpring(rawB, { stiffness: 140, damping: 22, mass: 0.4 });

  // Cosmetic compass readout that sweeps with the pano drag — reinforces the
  // "you're spinning inside a 360° room" feeling rather than mapping to any
  // real-world bearing.
  const angle = useTransform(a, (v) => Math.round(((v / 4) % 360 + 360) % 360));
  const angleText = useMotionTemplate`${angle}°`;

  // A brief, cancellable "wiggle" on mount hints that the tour is draggable —
  // the moment the user takes over, we stop it so it never fights their input.
  useEffect(() => {
    const targetA = isPano ? [0, -22, 16, 0] : [0, -7, 5, 0];
    const controls = animate(rawA, targetA, {
      duration: 1.7,
      times: [0, 0.45, 0.78, 1],
      ease: "easeInOut",
      delay: 0.6,
    });
    wiggle.current = controls;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    wiggle.current?.stop();
    dragging.current = true;
    setIsDragging(true);
    last.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };

    if (isPano) {
      const bounds = containerRef.current?.getBoundingClientRect();
      const maxX = bounds ? bounds.width * 0.28 : 100;
      const maxY = bounds ? bounds.height * 0.22 : 60;
      rawA.set(clamp(rawA.get() + dx * 1.3, -maxX, maxX));
      rawB.set(clamp(rawB.get() + dy * 1.3, -maxY, maxY));
    } else {
      rawA.set(clamp(rawA.get() + dx * 0.15, -16, 16));
      rawB.set(clamp(rawB.get() - dy * 0.15, -12, 12));
    }
  };

  const endDrag = () => {
    dragging.current = false;
    setIsDragging(false);
    if (!isPano) {
      rawA.set(0);
      rawB.set(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`tour-stage${isDragging ? " dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <motion.div
        className={isPano ? "tour-pano" : "tour-tilt"}
        style={
          isPano
            ? { x: a, y: b }
            : { rotateY: a, rotateX: b, transformPerspective: 1200 }
        }
      >
        <Image
          src={room.image}
          alt={room.room}
          fill
          sizes="(max-width: 860px) 100vw, 60vw"
          style={{ objectFit: "cover" }}
          priority
          draggable={false}
        />
      </motion.div>
      <span className="tour-drag-hint">
        <i className="tour-drag-hint-icon" />
        Drag to look around
      </span>
      {isPano && (
        <span className="tour-compass">
          <i className="tour-compass-dot" />
          <motion.span>{angleText}</motion.span>
        </span>
      )}
    </div>
  );
}

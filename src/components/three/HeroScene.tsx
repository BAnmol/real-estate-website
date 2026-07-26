"use client";

/**
 * react-hooks/purity and react-hooks/immutability (React Compiler readiness
 * rules) flag the direct mutation of refs/three.js objects inside useFrame
 * below. That mutation is the standard, required react-three-fiber pattern
 * for per-frame animation — this project doesn't enable the React Compiler.
 */
/* eslint-disable react-hooks/purity, react-hooks/immutability */

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { DragState } from "@/types/scene";

const INK = "#2a271f";
const ACCENT = "#b98a4e";
const EMERALD = "#0e3b2c";
const GLASS = "#ece6d8";

function pickBuildingColor() {
  const r = Math.random();
  if (r < 0.16) return ACCENT;
  if (r < 0.32) return EMERALD;
  return INK;
}

type BuildingDef = {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  floatOffset: number;
  floatSpeed: number;
};

function useBuildingLayout(count: number): BuildingDef[] {
  return useMemo(() => {
    const defs: BuildingDef[] = [];
    for (let i = 0; i < count; i++) {
      const w = 0.45 + Math.random() * 0.6;
      const d = 0.45 + Math.random() * 0.6;
      const h = 0.6 + Math.random() * 2.3;
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const radius = 1.6 + Math.random() * 2.2;
      defs.push({
        position: [
          Math.cos(angle) * radius,
          h / 2 - 0.9,
          Math.sin(angle) * radius * 0.6,
        ],
        size: [w, h, d],
        color: pickBuildingColor(),
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.5,
      });
    }
    return defs;
  }, [count]);
}

function Building({ def }: { def: BuildingDef }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = def.position[1];
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(...def.size)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y =
      baseY + Math.sin(t * def.floatSpeed + def.floatOffset) * 0.06;
  });

  return (
    <mesh ref={ref} position={def.position}>
      <boxGeometry args={def.size} />
      <meshStandardMaterial color={def.color} roughness={0.6} metalness={0.1} flatShading />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#fffdf9" transparent opacity={0.18} />
      </lineSegments>
    </mesh>
  );
}

function HouseModel() {
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!group.current) return;
    let raf: number;
    const start = performance.now();
    const animateScale = () => {
      const elapsed = (performance.now() - start) / 1000;
      const delay = 0.6;
      const dur = 1.8;
      const p = Math.min(Math.max((elapsed - delay) / dur, 0), 1);
      // simple elastic-out approximation
      const eased =
        p === 0 || p === 1
          ? p
          : Math.pow(2, -10 * p) * Math.sin(((p - 0.075) * (2 * Math.PI)) / 0.3) + 1;
      const s = Math.max(eased, 0.001);
      group.current?.scale.setScalar(s);
      if (p < 1) raf = requestAnimationFrame(animateScale);
    };
    raf = requestAnimationFrame(animateScale);
    return () => cancelAnimationFrame(raf);
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.25) * 0.15;
  });

  return (
    <group ref={group} position={[0, 0.1, 1.6]} scale={0.001}>
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[2.1, 1.15, 1.8]} />
        <meshStandardMaterial color={GLASS} roughness={0.35} metalness={0.2} flatShading />
      </mesh>
      <mesh position={[0, 0.75, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.68, 0.95, 4]} />
        <meshStandardMaterial color={ACCENT} roughness={0.4} metalness={0.25} flatShading />
      </mesh>
    </group>
  );
}

function Particles({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = isMobile ? 90 : 180;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20 + 2;
      arr[i * 3 + 1] = Math.random() * 6 - 1.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, [isMobile]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={ACCENT} size={0.032} transparent opacity={0.45} />
    </points>
  );
}

function SceneContents({
  dragState,
  isMobile,
}: {
  dragState: React.MutableRefObject<DragState>;
  isMobile: boolean;
}) {
  const heroGroup = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const buildings = useBuildingLayout(isMobile ? 8 : 13);
  const scrollFactor = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollFactor.current = Math.min(
        window.scrollY / window.innerHeight,
        1
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, delta) => {
    const ds = dragState.current;
    if (!ds.dragging) {
      ds.rotation += delta * 0.06;
    }
    if (heroGroup.current) {
      heroGroup.current.rotation.y = ds.rotation;
      heroGroup.current.position.y = -1.1 - scrollFactor.current * 0.6;
    }

    camera.position.x += (ds.pointerX * 1.2 - camera.position.x) * 0.03;
    camera.position.y += (2.4 - ds.pointerY * 0.6 - camera.position.y) * 0.03;
    camera.position.y -= scrollFactor.current * 0.002;
    camera.lookAt(0, 0.2, 0);
  });

  return (
    <>
      <fog attach="fog" args={["#f7f5f1", 6, 18]} />
      <hemisphereLight args={["#fff6e8", "#36302a", 0.9]} />
      <directionalLight position={[6, 10, 6]} color="#ffe9c7" intensity={1.1} />
      <directionalLight position={[-8, 4, -6]} color={ACCENT} intensity={0.6} />

      <group
        ref={heroGroup}
        position={[3.6, -1.1, -1]}
        scale={isMobile ? 0.68 : 0.86}
      >
        <group>
          {buildings.map((def, i) => (
            <Building key={i} def={def} />
          ))}
        </group>
        <HouseModel />
      </group>

      <Particles isMobile={isMobile} />
      <gridHelper args={[40, 40, "#d8d2c4", "#e4dfd3"]} position={[0, -1.9, 0]} />
    </>
  );
}

export default function HeroScene({
  dragState,
}: {
  dragState: React.MutableRefObject<DragState>;
}) {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 760px)").matches;

  return (
    <Canvas
      camera={{ position: [0, 2.4, 13], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <SceneContents dragState={dragState} isMobile={isMobile} />
    </Canvas>
  );
}

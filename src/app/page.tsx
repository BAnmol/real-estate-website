"use client";

import { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloorIndicator from "@/components/ui/FloorIndicator";
import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Properties from "@/components/sections/Properties";
import Statement from "@/components/sections/Statement";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Neighborhoods from "@/components/sections/Neighborhoods";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import ShowcaseModal from "@/components/ui/ShowcaseModal";
import LiveActivity from "@/components/ui/LiveActivity";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <ScrollProgress />
      <FloorIndicator />
      <Nav />

      <main>
        <Hero loaded={loaded} onOpenShowcase={() => setShowcaseOpen(true)} />
        <Stats />
        <Properties />
        <Statement />
        <Features />
        <Process />
        <Neighborhoods />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <ShowcaseModal open={showcaseOpen} onClose={() => setShowcaseOpen(false)} />
      <LiveActivity />
    </>
  );
}

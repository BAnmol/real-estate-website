"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="cta" id="contact">
      <div
        className="cta-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="cta-overlay" />
      <div className="container cta-content">
        <Reveal>
          <p className="eyebrow">Ready When You Are</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2>
            Find your dream property,
            <br />
            <em>rendered in reality.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              aria-label="Email address"
              disabled={status === "submitting"}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Book a Tour"}
            </button>
          </form>
        </Reveal>
        <motion.p
          className={`cta-note${status === "error" ? " error" : ""}`}
          animate={{ opacity: status === "idle" ? 0 : 1 }}
        >
          {status === "success" &&
            "Thank you — a member of our team will reach out shortly."}
          {status === "error" && "Please enter a valid email address."}
          {status === "submitting" && "Just a moment…"}
        </motion.p>
      </div>
    </section>
  );
}

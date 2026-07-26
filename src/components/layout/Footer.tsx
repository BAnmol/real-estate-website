"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="nav-logo">
            <Logo size={34} />
            ARIS<span>.</span>
          </a>
          <p>
            Real estate, rendered in reality. Photorealistic 3D tours for
            every listing, everywhere.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="X / Twitter">X</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#properties">Properties</a>
          <a href="#features">Experience</a>
          <a href="#process">Process</a>
          <a href="#neighborhoods">Cities</a>
          <a href="#faq">Answers</a>
          <a href="#testimonials">Clients</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col footer-newsletter">
          <h4>Stay Updated</h4>
          <p>New listings, market insights, and 3D showcases — straight to your inbox.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Newsletter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe">
              {sent ? "✓" : "→"}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        ARIS
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ARIS Estates. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

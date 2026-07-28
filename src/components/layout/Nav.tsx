"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "#properties", label: "Properties" },
  { href: "#features", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "Answers" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={clsx("nav", scrolled && "scrolled")}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <Logo size={34} />
            ARIS<span>.</span>
          </a>
          <nav className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-small nav-cta">
            Book a Tour
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }} />
            <motion.span animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
          >
            <button
              className="modal-close mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

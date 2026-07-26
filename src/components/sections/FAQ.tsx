"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/faq";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <p className="eyebrow">Questions</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Frequently <em>asked</em>
            </h2>
          </Reveal>
        </div>

        <Reveal className="faq-list" delay={0.15}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    <i />
                    <i />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
                    >
                      <p className="faq-answer">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

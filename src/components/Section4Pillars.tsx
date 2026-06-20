"use client";

import { motion } from "motion/react";
import ScrollSection from "./ScrollSection";

const pillarHover = {
  scale: 1.02,
  y: -4,
  transition: { type: "spring", stiffness: 400, damping: 12 },
} as const;

export default function Section4Pillars() {
  return (
    <ScrollSection>
      <h2>Professional Pillars</h2>
      <div className="pillars">
        <motion.article className="card" whileHover={pillarHover}>
          <h3>Multidisciplinary practice</h3>
          <p>
            Jose brings together photography, graphic design, UX thinking,
            front-end development, CMS implementation, and software programming.
          </p>
        </motion.article>

        <motion.article className="card" whileHover={pillarHover}>
          <h3>Remote-first independence</h3>
          <p>
            His career anticipated the modern digital nomad model by showing
            that high-quality digital work can happen across cities, countries,
            and time zones.
          </p>
        </motion.article>

        <motion.article className="card" whileHover={pillarHover}>
          <h3>Open-source values</h3>
          <p>
            His work favors accessible, self-managed systems that give clients
            control over their own digital presence.
          </p>
        </motion.article>

        <motion.article className="card" whileHover={pillarHover}>
          <h3>Human-centered web</h3>
          <p>
            Jose&apos;s approach treats websites as living tools for
            communication, business growth, and user empowerment, not just
            technical products.
          </p>
        </motion.article>
      </div>
    </ScrollSection>
  );
}

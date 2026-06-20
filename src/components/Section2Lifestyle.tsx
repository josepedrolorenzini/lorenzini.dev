"use client";

import { motion } from "motion/react";
import ScrollSection from "./ScrollSection";

const cardHover = {
  scale: 1.03,
  rotate: 0.5,
  transition: { type: "spring", stiffness: 300, damping: 15 },
} as const;

export default function Section2Lifestyle() {
  return (
    <ScrollSection>
      <h2>The Three-Continent Lifestyle</h2>
      <div className="cards">
        <motion.article className="card" whileHover={cardHover}>
          <h3>Chile: The Creative Foundation</h3>
          <p>
            Jose&apos;s creative roots began in Chile, where he studied Photography
            and Graphic Design at Instituto Profesional ARCOS. That formation
            gave his digital work a strong visual foundation: composition, image
            culture, communication, and sensitivity to how people experience
            what they see.
          </p>
          <p>
            In Valparaiso, he developed Viento del Sur as a studio focused on
            practical digital tools, self-managed websites, and web solutions
            that helped clients participate more confidently in the digital
            economy.
          </p>
        </motion.article>

        <motion.article className="card" whileHover={cardHover}>
          <h3>Australia: The Technical Evolution</h3>
          <p>
            In Sydney, Jose expanded his creative practice into a more technical
            professional identity. His Australian chapter strengthened his
            software development, JavaScript, web programming, and modern
            delivery standards.
          </p>
          <p>
            This made his profile unusually hybrid: a designer with a
            photographer&apos;s eye, a developer&apos;s logic, and the ability to
            translate between business goals, visual systems, and working code.
          </p>
        </motion.article>

        <motion.article className="card" whileHover={cardHover}>
          <h3>Europe: The Philosophical Edge</h3>
          <p>
            Jose&apos;s European experience added an independent, open-source,
            craft-oriented dimension to his practice. It reinforced a belief
            that digital tools should empower users instead of locking them into
            closed systems.
          </p>
          <p>
            This influence shaped a working style based on portability,
            transparency, self-management, and digital freedom.
          </p>
        </motion.article>
      </div>
    </ScrollSection>
  );
}

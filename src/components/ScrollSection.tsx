"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type ScrollSectionProps = {
  children: ReactNode;
};

const sectionVariants = {
  hidden: {
    y: 36,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

export default function ScrollSection({ children }: ScrollSectionProps) {
  return (
    <motion.section
      className="scroll-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.section>
  );
}
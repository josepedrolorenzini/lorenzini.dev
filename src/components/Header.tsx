"use client";

import { motion } from "motion/react";

const gaudiSpring = {
  type: "spring",
  stiffness: 70,
  damping: 16,
  mass: 1.1,
} as const;

const trencadisContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} as const;

const trencadisItem = {
  hidden: { y: 25, opacity: 0, rotate: -1.5 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: gaudiSpring,
  },
} as const;

const organicHover = {
  scale: 1.2,
  rotate: 0.5,
  transition: { type: "spring", stiffness: 200, damping: 10 },
} as const;

const drawerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
} as const;

const dragInteraction = {
  scale: 1.08,
  rotate: 3,
} as const;

export default function Header() {
  return (
    <motion.header
      className="hero"
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="kicker"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={organicHover}
      >
        Professional Biography
      </motion.p>

      <motion.h1
        drag
        dragMomentum={false}
        whileDrag={dragInteraction}
        dragSnapToOrigin
      >
        JosePedro Lorenzini
      </motion.h1>

      <motion.p
        className="lead"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...gaudiSpring, delay: 0.15 }}
        whileHover={organicHover}
      >
        A Chilean-Italian Full Stack Web Developer professional + Digital
        Multimedia Web Architect, Graphic Designer and Photographer whose career
        has moved across Chile, Latinoamerica, California, Australia & New
        Zealand, Spain and France through web development, open-source tools,
        Web 3, Cloud computing, remote Friendship collaboration, and independent
        digital strategy.
      </motion.p>

      <motion.div
        className="meta-grid"
        aria-label="Career summary"
        variants={trencadisContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="meta-item"
          variants={trencadisItem}
          whileHover={organicHover}
          drag
          dragMomentum={false}
          whileDrag={dragInteraction}
        >
          <strong>Identity</strong>
          Full stack Web developer and Digital architect, designer, and
          photographer.
        </motion.div>

        <motion.div
          className="meta-item"
          variants={trencadisItem}
          whileHover={organicHover}
          drag
          dragMomentum={false}
          whileDrag={dragInteraction}
        >
          <strong>Studio</strong>
          vientodelsur.cl, operating from 2009.
        </motion.div>

        <motion.div
          className="meta-item"
          variants={trencadisItem}
          whileHover={organicHover}
          drag
          dragMomentum={false}
          whileDrag={dragInteraction}
        >
          <strong>Base</strong>
          Sydney, Australia.
        </motion.div>

        <motion.div
          className="meta-item"
          variants={trencadisItem}
          whileHover={organicHover}
          drag
          dragMomentum={false}
          whileDrag={dragInteraction}
        >
          <strong>Philosophy</strong>
          Digital freedom, open-source culture, and user autonomy.
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

"use client";
import { motion } from "motion/react";
import ScrollSection from "./ScrollSection";
const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 },
};

export default function Section1Pioneer() {
  return (
    <ScrollSection>
      <motion.h2
        variants={fadeRight}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        A Second-Wave Digital Pioneer
      </motion.h2>
      <div className="content">
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Jose Pedro Lorenzini belongs to the second wave of the web: the
          generation that arrived after the first technical builders of internet
          infrastructure and began shaping how people, businesses, and creative
          workers could actually live and work through the web.
        </motion.p>
        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          His contribution is not framed as the invention of the Chilean
          internet itself, but as part of the next chapter: bringing design,
          usability, content management, remote service delivery, and digital
          independence into the daily life of small businesses, creative
          studios, and international clients.
        </motion.p>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Through Estudio Viento del Sur, founded in 2009, Jose built a
          remote-first digital practice before remote work became a global norm.
          His path connected Valparaiso and Sydney through websites, content
          systems, client strategy, and a working model based on trust, agility,
          and cross-cultural collaboration.
        </motion.p>
        <motion.div
          className="quote"
          variants={fadeRight}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          If the first wave of the web was about connectivity, Jose&apos;s
          second wave has been about autonomy: helping people use the web to
          work, publish, grow, and move freely.
        </motion.div>
      </div>
    </ScrollSection>
  );
}

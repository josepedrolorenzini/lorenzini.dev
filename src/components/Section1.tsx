"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

export default function Section1() {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    const diff = current - previous;

    if (diff === 0) {
      return;
    }

    const direction = diff > 0 ? "down" : "up";
    setScrollDirection(direction);

    controls.start({
      y: direction === "down" ? -18 : 18,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 22,
        mass: 0.9,
      },
    });

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    resetTimer.current = setTimeout(() => {
      controls.start({
        y: 0,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 20,
          mass: 1,
        },
      });
    }, 140);
  });

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  return (
    <motion.section
      animate={controls}
      initial={false}
      data-scroll-direction={scrollDirection}
    >
      <motion.h2>A Second-Wave Digital Pioneer</motion.h2>
      <div className="content">
        <p>
          Jose Pedro Lorenzini belongs to the second wave of the web: the
          generation that arrived after the first technical builders of internet
          infrastructure and began shaping how people, businesses, and creative
          workers could actually live and work through the web.
        </p>
        <p>
          His contribution is not framed as the invention of the Chilean
          internet itself, but as part of the next chapter: bringing design,
          usability, content management, remote service delivery, and digital
          independence into the daily life of small businesses, creative
          studios, and international clients.
        </p>
        <p>
          Through Estudio Viento del Sur, founded in 2009, Jose built a
          remote-first digital practice before remote work became a global norm.
          His path connected Valparaiso and Sydney through websites, content
          systems, client strategy, and a working model based on trust, agility,
          and cross-cultural collaboration.
        </p>
        <div className="quote">
          If the first wave of the web was about connectivity, Jose`s second
          wave has been about autonomy: helping people use the web to work,
          publish, grow, and move freely.
        </div>
      </div>
    </motion.section>
  );
}

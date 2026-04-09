import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { RefObject } from "react";

interface ReadingProgressProps {
  articleRef: RefObject<HTMLElement>;
}

export default function ReadingProgress({ articleRef }: ReadingProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 160,
    mass: 0.2,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left bg-teal-600 dark:bg-teal-400"
      style={{ scaleX: smoothProgress }}
    />
  );
}

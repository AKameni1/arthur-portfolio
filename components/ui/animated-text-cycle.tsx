import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
  containerClassName?: string;
}

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
  containerClassName = "",
}: Readonly<AnimatedTextCycleProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure the width of the container
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [currentIndex, className, containerClassName, words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Container animation for the whole word
  const containerVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* Measure container, invisible but with same classes as the visible one */}
      <div
        ref={measureRef}
        className={`pointer-events-none absolute opacity-0 ${containerClassName}`}
        style={{ visibility: "hidden", position: "absolute" }}
        aria-hidden="true"
      >
        <span className={className} style={{ whiteSpace: "nowrap" }}>
          {words[currentIndex]}
        </span>
      </div>

      {/* Container for the animated text */}
      <motion.div
        className={`relative inline-block ${containerClassName}`}
        animate={{
          width: width ? `${width}px` : "auto",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            mass: 1.2,
          },
        }}
        style={{ overflow: "hidden", display: "inline-block" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getLogoForTechnology } from "./logo-mapper";

export default function StackItem({
  technology,
  className,
}: Readonly<{ technology: string; className?: string }>) {
  return (
    <motion.div
      layout
      initial="initial"
      whileTap="animate"
      whileHover="animate"
      className={cn(
        "flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800",
        className,
      )}
    >
      <motion.span
        variants={{ animate: { paddingRight: 2 } }}
        transition={{ type: "spring" }}
      >
        {getLogoForTechnology(technology)}
      </motion.span>
      <motion.span
        variants={{
          initial: { width: 0 },
          animate: { width: "auto" },
          exit: { width: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {technology}
      </motion.span>
    </motion.div>
  );
}

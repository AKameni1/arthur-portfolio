"use client";

import { motion } from "framer-motion";
import Project from "./project";
import { projects } from "@/constants";
import { cn } from "@/lib/utils";

export default function Projects({
  numberOfProjects = 3,
  className,
}: Readonly<{
  numberOfProjects?: number;
  className?: string;
}>) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className={cn("flex gap-4", className)}
    >
      {projects.slice(0, numberOfProjects).map((project) => (
        <motion.div
          key={project.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                easeInOut: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <Project project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

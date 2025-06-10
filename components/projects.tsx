"use client";

import { motion } from "framer-motion";
import Project from "./project";
import { projects } from "@/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Projects({
  className,
}: Readonly<{
  numberOfProjects?: number;
  className?: string;
}>) {
  const t = useTranslations("Projects");
  return (
    <>
      <section className="relative mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-100">
          {t.rich("title", {
            lot: (chunks: React.ReactNode) => (
              <span className="text-cyan-500">{chunks}</span>
            ),
          })}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          {t("description")}
        </p>
      </section>
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
        className={cn(
          "mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        {projects.map((project) => (
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
    </>
  );
}

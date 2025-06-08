"use client";

import { motion } from "framer-motion";
import AnimatedTextCycle from "./ui/animated-text-cycle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Projects from "./projects";

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const t = useTranslations();
  const animatedWords = t.raw("AnimatedRoles") as string[];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.18, delayChildren: 0.1 },
        },
      }}
      className="flex flex-col gap-4"
    >
      <motion.section
        className="flex flex-col space-x-4 sm:flex-row sm:items-center"
        variants={itemVariants}
      >
        <motion.div initial={false} variants={itemVariants}>
          <h1 className="text-2xl font-bold tracking-tighter text-neutral-800 drop-shadow-lg md:text-4xl dark:text-white">
            Arthur Kameni
          </h1>
        </motion.div>
        <AnimatedTextCycle
          words={animatedWords}
          className="text-sm text-neutral-500 dark:text-neutral-400"
          containerClassName="relative order-first mx-1 mb-2 flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 pt-0 shadow-[var(--shadow-aceternity)] sm:order-last sm:mx-0 sm:mb-0"
        />
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="max-w-2xl pt-4 text-sm leading-loose tracking-wide text-neutral-600 md:text-base dark:text-neutral-300">
          {t("Description.short")}
        </h2>
        <motion.div
          className="flex flex-col justify-center gap-4 text-sm sm:flex-row sm:justify-start"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/projects"
              className="group flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
            >
              {t("ViewMyProjects")}
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={16}
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/contact"
              className="text-neutral-600 transition-colors duration-300 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              {t("ContactMe.title")}
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Quick Summary */}
      <motion.section className="py-16" variants={itemVariants}>
        <div className="max-w-3xl">
          <h3 className="mb-6 text-2xl font-bold tracking-tighter text-neutral-800 md:text-3xl dark:text-white">
            {t("AboutMe")}
          </h3>
          <p className="text-md mx-auto max-w-3xl pt-4 leading-loose tracking-wide text-neutral-600 md:text-base dark:text-neutral-300">
            {t("Description.details")}
          </p>
        </div>
      </motion.section>

      {/* Recent Projects */}
      <motion.section className="py-8" variants={itemVariants}>
        <div className="max-w-5xl">
          <h3 className="mb-6 text-2xl font-bold tracking-tighter text-neutral-800 md:text-3xl dark:text-white">
            {t("RecentProjects")}
          </h3>
          <Projects className="not-md:flex-wrap" />
        </div>
      </motion.section>
    </motion.div>
  );
}

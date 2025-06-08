"use client";

import { projects as defaultProjects } from "@/constants";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import StackItem from "./stack-item";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function Project({
  project = defaultProjects[0],
}: Readonly<{ project?: Project }>) {
  const { theme } = useTheme();
  const t = useTranslations();
  const imageSrc =
    theme === "dark" && project.darkSrc ? project.darkSrc : project.src;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      whileHover={{ boxShadow: "var(--shadow-aceternity)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      key={project.title}
      className="group relative w-full max-w-xs overflow-hidden rounded-2xl"
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          alt={project.title}
          width={300}
          height={300}
          className="relative z-40 aspect-video w-full rounded-xl object-cover transition-all duration-200 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
          <div className="absolute inset-0 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,var(--color-neutral-600)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-600)_1px,transparent_1px)]",
              )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle_at_bottom_center,transparent_10%,black_50%)] dark:bg-black"></div>
          </div>

          {/* Description */}
          <div className="relative z-20">
            <h2 className="mt-2 font-medium tracking-tight text-neutral-700 dark:text-neutral-200">
              {project.title}
            </h2>
            <p className="mt-2 line-clamp-3 max-w-[17rem] text-sm text-neutral-500 transition-all duration-300 group-hover:line-clamp-none dark:text-neutral-400">
              {t(project.descriptionKey)}
            </p>
          </div>

          {/* Stack */}
          <div className="relative z-20 mt-2 flex max-w-[14rem] flex-wrap gap-1">
            <LayoutGroup>
              {project.stack.map((stack) => (
                <StackItem
                  key={stack}
                  technology={stack}
                  className="-mr-3 hover:z-10"
                />
              ))}
            </LayoutGroup>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

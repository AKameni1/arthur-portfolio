"use client";

import { socialLinks, skillsCategories } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations();
  const categories = t.raw("About.skillsCategories") as Array<{
    category: string;
    skills: string[];
  }>;

  // Animation variants
  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
    hidden: {},
  };
  const categoryVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.6 },
    },
  };

  return (
    <>
      <section className="relative mx-auto flex max-w-5xl flex-col justify-between space-y-10 md:mt-20 md:flex-row md:space-y-0 md:space-x-10">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-100">
            {t.rich("About.title", {
              name: (chunks: React.ReactNode) => (
                <span className="text-cyan-500">{chunks}</span>
              ),
            })}
          </h1>
          <p className="mt-8 max-w-2xl tracking-wide text-neutral-600 md:text-base md:leading-loose dark:text-neutral-300">
            {t("About.description.first")}
          </p>
        </div>

        <div className="order-first mb-2 md:order-last">
          <Image
            src="/arthur.webp"
            alt="Arthur Kameni"
            width={200}
            height={200}
            className="rounded-2xl"
          />

          <div className="mt-3 flex justify-start space-x-2 md:justify-center">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors duration-300 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                aria-label={`${t("social.ariaLabel")} ${href}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-10 max-w-5xl">
        <p className="mt-8 text-sm tracking-wide text-neutral-600 md:text-base md:leading-loose dark:text-neutral-300">
          {t("About.description.third")}
        </p>
      </section>

      {/* Skills */}
      <section className="relative mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-100">
          {t("About.skillsTitle")}
        </h2>
        <motion.div
          className="mt-8 space-y-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsCategories.map((cat, idx) => {
            const catText = categories[idx];
            if (!catText) return null;
            return (
              <motion.div
                key={cat.id}
                className="space-y-6"
                variants={categoryVariants}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${cat.color}`}
                    variants={iconVariants}
                  >
                    <span className="text-white">{cat.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    {catText.category}
                  </h3>
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {catText.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex + 1}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
                      }}
                      className="flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-3 text-center font-medium text-neutral-700 transition-colors hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

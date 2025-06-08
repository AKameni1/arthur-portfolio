"use client";

import { socialLinks } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations();

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

        <div className="order-first md:order-last">
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
        {/* <p className="mt-8 text-sm tracking-wide text-neutral-600 md:text-base md:leading-loose dark:text-neutral-300">
          {t("About.description.fourth")}
        </p> */}
      </section>
    </>
  );
}

"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { navigationLinks } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

export default function Header() {
  const t = useTranslations();
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = useLocale();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="z-[100] mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-8 sm:justify-between">
      <div className="hidden w-full justify-between lg:flex">
        <nav className="flex items-center justify-between gap-8 rounded-2xl border border-zinc-200 bg-white px-4 py-2 antialiased dark:border-zinc-700/60 dark:bg-zinc-800">
          <Link
            href="/"
            className="mr-4 flex items-center justify-center gap-2 text-sm font-bold dark:text-white"
          >
            <Image
              src="/arthur.webp"
              alt="Arthur Profile"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <span>Arthur Kameni</span>
          </Link>

          <div className="flex items-center gap-2">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative p-2 text-sm font-medium dark:text-white"
              >
                {hovered === index && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 size-full rounded-md bg-neutral-100 dark:bg-zinc-700"
                  ></motion.span>
                )}
                <span className="relative z-10">{t(link.translationKey)}</span>
              </Link>
            ))}
            {/* Separator */}
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
        <a
          href={
            locale === "en" ? "/arthur_resume-en.pdf" : "/arthur_resume-fr.pdf"
          }
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#6b7280] to-[#4b5563] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_20px_rgba(0,0,0,.1),_0_3px_6px_rgba(0,0,0,.05)] transition duration-150 hover:opacity-80 hover:shadow-[rgba(0,1,0,.2)_0_2px_8px] active:outline-none dark:from-[#464d55] dark:to-[#25292e] dark:text-white dark:shadow-[0_10px_20px_rgba(0,0,0,.1),_0_3px_6px_rgba(0,0,0,.05)] dark:hover:shadow-[rgba(0,1,0,.2)_0_2px_8px]"
        >
          {t("CV")}
        </a>
      </div>
      <div className="flex w-full lg:hidden">
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="mr-4 flex items-center justify-center gap-2 text-sm font-bold dark:text-white"
          >
            <Image
              src="/arthur.webp"
              alt="Arthur Profile"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <span>Arthur Kameni</span>
          </Link>
          <button
            className="flex size-6 items-center justify-center text-zinc-900 focus:outline-none dark:text-zinc-100"
            aria-label={
              mobileOpen ? t("MobileMenu.close") : t("MobileMenu.open")
            }
            onClick={() => setMobileOpen(true)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[200] flex flex-col bg-white/95 backdrop-blur-md dark:bg-zinc-900/95"
            >
              <div className="flex items-center justify-between px-6 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold dark:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/arthur.webp"
                    alt="Arthur Profile"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span>Arthur Kameni</span>
                </Link>
                <button
                  className="flex size-6 items-center justify-center text-zinc-900 focus:outline-none dark:text-zinc-100"
                  aria-label={t("MobileMenu.close")}
                  onClick={() => setMobileOpen(false)}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M6 18L18 6"
                    />
                  </svg>
                </button>
              </div>
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                  },
                }}
                className="mt-8 flex flex-col items-start gap-4 px-8"
              >
                {navigationLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="block w-full rounded-lg px-2 py-3 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(link.translationKey)}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="mt-2 w-full"
                >
                  <ThemeToggle />
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="w-full"
                >
                  <LanguageSwitcher />
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="mt-4 w-full"
                >
                  <a
                    href={
                      locale === "en"
                        ? "/arthur_resume-en.pdf"
                        : "/arthur_resume-fr.pdf"
                    }
                    target="_blank"
                    className="block w-full rounded-lg bg-gradient-to-b from-[#6b7280] to-[#4b5563] px-4 py-3 text-center text-base font-medium text-white shadow-md transition-all duration-150 hover:bg-zinc-700/80 focus:outline-none dark:from-[#464d55] dark:to-[#25292e] dark:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("CV")}
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

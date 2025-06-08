"use client";

import { navigationLinks, socialLinks } from "@/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="mx-auto max-w-6xl border-t border-slate-900/5 px-8 py-10">
      <div className="flex flex-col items-center justify-center py-10">
        <Link
          href="/"
          className="mr-4 flex items-center justify-center gap-2 text-xl font-bold dark:text-white"
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

        <nav className="mt-4 flex justify-center gap-4 sm:space-y-0 sm:space-x-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium dark:text-white"
            >
              {t(link.translationKey)}
            </Link>
          ))}
        </nav>

        <p className="mt-8 border-t pt-4 text-center text-sm font-light dark:border-zinc-800 dark:text-zinc-200">
          &copy; {new Date().getFullYear()} Arthur Kameni.{" "}
          {t("Confidential.description")}.
        </p>

        <div className="mt-2 flex justify-center gap-2">
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
    </footer>
  );
}

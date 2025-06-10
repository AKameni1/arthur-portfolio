"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { AlertTriangle } from "lucide-react";

export default function CatchAllPage() {
  const t = useTranslations("Error");
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <span className="rounded-full bg-red-100 p-4 dark:bg-red-900/30">
          <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
        </span>
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
          404
        </h1>
        <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
          {t("notFoundTitle")}
        </h2>
        <p className="max-w-md text-neutral-600 dark:text-neutral-300">
          {t("notFoundMessage")}
        </p>
        <Link
          href="/"
          className="mt-4 rounded bg-gradient-to-r from-neutral-600 to-neutral-800 px-6 py-2 font-semibold text-white shadow-xs transition-colors duration-300 hover:from-neutral-700 hover:to-neutral-900"
        >
          {t("backHome")}
        </Link>
      </motion.div>
    </main>
  );
}

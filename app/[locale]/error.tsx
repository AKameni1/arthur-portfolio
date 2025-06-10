"use client"; // Error boundaries must be Client Components

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
}: Readonly<{
  error: Error & { digest?: string };
}>) {
  const t = useTranslations("Error");
  const [showDetails, setShowDetails] = useState(false);
  const supportEmail = "arthur.kamenitchualeu@gmail.com";

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <AnimatePresence>
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
            Oops!
          </h1>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
            {t("serverErrorTitle")}
          </h2>
          <p className="max-w-md text-neutral-600 dark:text-neutral-300">
            {t.rich(
              "serverErrorMessage",
              {
                email: (chunks: React.ReactNode) => (
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-neutral-600 underline duration-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {chunks}
                  </a>
                ),
              },
              { email: supportEmail },
            )}
          </p>
          {error?.message && (
            <div>
              <button
                onClick={() => setShowDetails((v) => !v)}
                className="mb-2 text-sm text-neutral-600 underline hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                {showDetails ? t("hideDetails") : t("showDetails")}
              </button>
              <AnimatePresence>
                {showDetails && (
                  <motion.pre
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto max-w-lg overflow-x-auto rounded bg-red-100 px-4 py-2 text-left text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300"
                  >
                    {error.message}
                  </motion.pre>
                )}
              </AnimatePresence>
            </div>
          )}
          <Link
            href="/"
            className="mt-4 rounded bg-gradient-to-r from-neutral-600 to-neutral-800 px-6 py-2 font-semibold text-white shadow-xs transition-colors duration-300 hover:from-neutral-700 hover:to-neutral-900"
          >
            {t("backHome")}
          </Link>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

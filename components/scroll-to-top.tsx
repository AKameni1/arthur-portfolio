"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const SCROLL_THRESHOLD = 300; // Show button after scrolling 300px

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Navigation");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={cn(
            "fixed right-8 bottom-8 z-50",
            "flex h-10 w-10 items-center justify-center rounded-full",
            "bg-white/80 text-neutral-700 shadow-lg backdrop-blur-sm",
            "dark:bg-neutral-800/80 dark:text-neutral-200",
            "hover:bg-white dark:hover:bg-neutral-800",
            "focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:focus:ring-neutral-600",
            "cursor-pointer transition-colors duration-200",
          )}
          aria-label={t("scrollToTop")}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

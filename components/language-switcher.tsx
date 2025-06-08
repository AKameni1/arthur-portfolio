"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/constants";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
          "bg-white/5 text-neutral-700 hover:bg-white/10",
          "dark:bg-neutral-800/50 dark:text-neutral-200 dark:hover:bg-neutral-800",
          "transition-colors duration-200",
          "focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:focus:ring-neutral-600",
        )}
        aria-label={t("switchLanguage")}
      >
        <Globe className="size-4" />
        <span>{currentLanguage?.name}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="z-[1000] w-20">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            asChild
            className={cn(
              "flex items-center gap-2",
              language.code === currentLocale &&
                "bg-neutral-100 dark:bg-neutral-700",
            )}
          >
            <Link href={pathname} locale={language.code}>
              <span className="flex-1">{language.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

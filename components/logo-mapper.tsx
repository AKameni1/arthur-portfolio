import Image from "next/image";
import { IconCode } from "@tabler/icons-react";
import { cn, logoMap } from "@/lib/utils";

export function getLogoForTechnology(technology: string) {
  const logo = logoMap[technology];

  if (!logo) {
    return (
      <IconCode className="size-4 text-neutral-600 dark:text-neutral-400" />
    );
  }

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={24}
      height={24}
      className={cn(
        "size-4 text-neutral-600 dark:text-neutral-400",
        logo.className,
      )}
    />
  );
}

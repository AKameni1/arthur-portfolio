import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logoMap: Record<string, TechnologyLogo> = {
  // Frontend
  "Next.js": {
    src: "/icons/next-js.svg",
    alt: "Next.js",
    className: "dark:invert",
  },
  React: {
    src: "/icons/react.svg",
    alt: "React",
  },
  TypeScript: {
    src: "/icons/typescript.svg",
    alt: "TypeScript",
  },
  JavaScript: {
    src: "/icons/javascript.svg",
    alt: "JavaScript",
  },
  HTML: {
    src: "/icons/html.svg",
    alt: "HTML",
  },
  CSS: {
    src: "/icons/css.svg",
    alt: "CSS",
  },
  "Tailwind CSS": {
    src: "/icons/tailwind-css.svg",
    alt: "Tailwind CSS",
  },

  // Backend
  NestJS: {
    src: "/icons/nestjs.svg",
    alt: "NestJS",
    className: "dark:invert",
  },
  Python: {
    src: "/icons/python.svg",
    alt: "Python",
  },
  "C#": {
    src: "/icons/c#.svg",
    alt: "C#",
  },

  // Databases
  MongoDB: {
    src: "/icons/mongodb.svg",
    alt: "MongoDB",
  },
  PostgreSQL: {
    src: "/icons/postgresql.svg",
    alt: "PostgreSQL",
  },
  SQLite: {
    src: "/icons/sqlite.svg",
    alt: "SQLite",
  },
  "Neon Database": {
    src: "/icons/neondb.svg",
    alt: "NeonDB",
  },
  Prisma: {
    src: "/icons/prisma.svg",
    alt: "Prisma",
    className: "dark:invert",
  },

  // Cloud & Tools
  "Google Cloud": {
    src: "/icons/google-cloud.svg",
    alt: "Google Cloud",
  },
  "Google Sheets": {
    src: "/icons/google-sheets.svg",
    alt: "Google Sheets",
  },
  GraphQL: {
    src: "/icons/graphql.svg",
    alt: "GraphQL",
  },
};

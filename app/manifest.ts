import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arthur Kameni - Full Stack Developer",
    short_name: "Arthur Kameni",
    description:
      "Portfolio de développeur full-stack spécialisé en React, Next.js, TypeScript et Node.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/arthur.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/arthur.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
    categories: ["technology", "business", "productivity"],
    lang: "fr-CA",
    dir: "ltr",
    scope: "/",
    prefer_related_applications: false,
  };
}

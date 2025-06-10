import type { Metadata } from "next";

export const defaultSEO: SEOConfig = {
  title: "Arthur Kameni - Full Stack Developer",
  description:
    "Développeur full-stack passionné spécialisé dans React, Next.js, TypeScript et Node.js. Créateur d'applications web, mobile et desktop innovantes.",
  keywords: [
    "développeur full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "développement web",
    "développement mobile",
    "portfolio",
    "Arthur Kameni",
    "Ottawa",
    "Canada",
  ],
  openGraph: {
    title: "Arthur Kameni - Full Stack Developer",
    description:
      "Développeur full-stack passionné spécialisé dans React, Next.js, TypeScript et Node.js. Créateur d'applications web, mobile et desktop innovantes.",
    type: "website",
    images: ["/og/home.svg", "/arthur.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Kameni - Full Stack Developer",
    description:
      "Développeur full-stack passionné spécialisé dans React, Next.js, TypeScript et Node.js.",
    images: ["/og/home.svg", "/arthur.webp"],
  },
};

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: "Arthur Kameni - Full Stack Developer | Portfolio",
    description:
      "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes. Spécialisé en React, Next.js, TypeScript et Node.js.",
    keywords: [
      "développeur full-stack",
      "portfolio",
      "React",
      "Next.js",
      "TypeScript",
      "développement web",
      "Arthur Kameni",
      "Ottawa",
    ],
    openGraph: {
      title: "Arthur Kameni - Full Stack Developer | Portfolio",
      description:
        "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes.",
      type: "website",
      images: ["/og/home.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Arthur Kameni - Full Stack Developer | Portfolio",
      description:
        "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes.",
      images: ["/og/home.svg", "/arthur.webp"],
    },
  },
  about: {
    title: "À propos - Arthur Kameni | Développeur Full Stack",
    description:
      "Découvrez mon parcours, mes compétences et ma passion pour le développement. Diplômé de La Cité Collégiale, je crée des solutions innovantes.",
    keywords: [
      "à propos",
      "compétences",
      "parcours",
      "formation",
      "La Cité Collégiale",
      "développeur full-stack",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "À propos - Arthur Kameni | Développeur Full Stack",
      description:
        "Découvrez mon parcours, mes compétences et ma passion pour le développement.",
      type: "profile",
      images: ["/og/about.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "À propos - Arthur Kameni | Développeur Full Stack",
      description:
        "Découvrez mon parcours, mes compétences et ma passion pour le développement.",
      images: ["/og/about.svg", "/arthur.webp"],
    },
  },
  projects: {
    title: "Projets - Arthur Kameni | Portfolio de Développement",
    description:
      "Explorez mes projets de développement : applications web, systèmes de gestion, bots et plus. Chaque projet démontre mon expertise technique.",
    keywords: [
      "projets",
      "applications web",
      "système de gestion",
      "bot",
      "React",
      "Next.js",
      "portfolio",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "Projets - Arthur Kameni | Portfolio de Développement",
      description:
        "Explorez mes projets de développement : applications web, systèmes de gestion, bots et plus.",
      type: "website",
      images: [
        "/og/projects.svg",
        "/images/lms-cover.png",
        "/images/coop-bot-cover.png",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projets - Arthur Kameni | Portfolio de Développement",
      description:
        "Explorez mes projets de développement : applications web, systèmes de gestion, bots et plus.",
      images: ["/og/projects.svg", "/images/lms-cover.png"],
    },
  },
  experience: {
    title: "Expérience - Arthur Kameni | Parcours Professionnel",
    description:
      "Mon parcours professionnel : diplômé de La Cité Collégiale, développeur bénévole et passionné par l'innovation technologique.",
    keywords: [
      "expérience",
      "parcours professionnel",
      "La Cité Collégiale",
      "développeur bénévole",
      "formation",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "Expérience - Arthur Kameni | Parcours Professionnel",
      description:
        "Mon parcours professionnel : diplômé de La Cité Collégiale, développeur bénévole et passionné par l'innovation.",
      type: "profile",
      images: ["/og/experience.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Expérience - Arthur Kameni | Parcours Professionnel",
      description:
        "Mon parcours professionnel : diplômé de La Cité Collégiale, développeur bénévole et passionné par l'innovation.",
      images: ["/og/experience.svg", "/arthur.webp"],
    },
  },
  contact: {
    title: "Contact - Arthur Kameni | Développeur Full Stack",
    description:
      "Contactez-moi pour discuter de vos projets de développement. Disponible pour des opportunités de collaboration et d'emploi.",
    keywords: [
      "contact",
      "collaboration",
      "emploi",
      "projets",
      "développement",
      "Arthur Kameni",
      "Ottawa",
    ],
    openGraph: {
      title: "Contact - Arthur Kameni | Développeur Full Stack",
      description:
        "Contactez-moi pour discuter de vos projets de développement. Disponible pour des opportunités de collaboration et d'emploi.",
      type: "website",
      images: ["/og/contact.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact - Arthur Kameni | Développeur Full Stack",
      description:
        "Contactez-moi pour discuter de vos projets de développement.",
      images: ["/og/contact.svg", "/arthur.webp"],
    },
  },
  notFound: {
    title: "Page non trouvée - Arthur Kameni",
    description:
      "La page que vous recherchez n'existe pas. Retournez à l'accueil pour explorer mon portfolio de développement.",
    keywords: ["page non trouvée", "404", "portfolio", "Arthur Kameni"],
    openGraph: {
      title: "Page non trouvée - Arthur Kameni",
      description:
        "La page que vous recherchez n'existe pas. Retournez à l'accueil pour explorer mon portfolio.",
      type: "website",
      images: ["/og/home.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary",
      title: "Page non trouvée - Arthur Kameni",
      description:
        "La page que vous recherchez n'existe pas. Retournez à l'accueil pour explorer mon portfolio.",
      images: ["/og/home.svg", "/arthur.webp"],
    },
  },
};

export function generateMetadata(
  config: SEOConfig,
  locale?: string,
  canonicalUrl?: string,
): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthur-portfolio.vercel.app";
  const canonical = canonicalUrl ?? baseUrl;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(", "),
    authors: [{ name: "Arthur Kameni" }],
    creator: "Arthur Kameni",
    publisher: "Arthur Kameni",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: config.openGraph.title,
      description: config.openGraph.description,
      url: canonical,
      siteName: "Arthur Kameni - Portfolio",
      images: config.openGraph.images.map((img) => ({
        url: `${baseUrl}${img}`,
        width: 1200,
        height: 630,
        alt: config.openGraph.title,
      })),
      locale: locale ?? "fr_CA",
      type: config.openGraph.type,
    },
    twitter: {
      card: config.twitter.card as "summary" | "summary_large_image",
      title: config.twitter.title,
      description: config.twitter.description,
      images: config.twitter.images.map((img) => `${baseUrl}${img}`),
      creator: "@arthurkameni",
    },
    alternates: {
      canonical: canonical,
      languages: {
        "fr-CA": `${baseUrl}/fr`,
        "en-CA": `${baseUrl}/en`,
      },
    },
    category: "technology",
    classification: "Portfolio de développeur",
    other: {
      "theme-color": "#2563eb",
      "color-scheme": "light dark",
    },
  };
}

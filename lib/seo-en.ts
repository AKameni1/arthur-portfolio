import type { Metadata } from "next";

export const defaultSEOEn: SEOConfig = {
  title: "Arthur Kameni - Full Stack Developer",
  description:
    "Passionate full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Creator of innovative web, mobile, and desktop applications.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "web development",
    "mobile development",
    "portfolio",
    "Arthur Kameni",
    "Ottawa",
    "Canada",
  ],
  openGraph: {
    title: "Arthur Kameni - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Creator of innovative web, mobile, and desktop applications.",
    type: "website",
    images: ["/og/home.svg", "/arthur.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Kameni - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: ["/og/home.svg", "/arthur.webp"],
  },
};

export const seoConfigsEn: Record<string, SEOConfig> = {
  home: {
    title: "Arthur Kameni - Full Stack Developer | Portfolio",
    description:
      "Passionate full-stack developer creating innovative web, mobile, and desktop applications. Specialized in React, Next.js, TypeScript, and Node.js.",
    keywords: [
      "full-stack developer",
      "portfolio",
      "React",
      "Next.js",
      "TypeScript",
      "web development",
      "Arthur Kameni",
      "Ottawa",
    ],
    openGraph: {
      title: "Arthur Kameni - Full Stack Developer | Portfolio",
      description:
        "Passionate full-stack developer creating innovative web, mobile, and desktop applications.",
      type: "website",
      images: ["/og/home.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Arthur Kameni - Full Stack Developer | Portfolio",
      description:
        "Passionate full-stack developer creating innovative web, mobile, and desktop applications.",
      images: ["/og/home.svg", "/arthur.webp"],
    },
  },
  about: {
    title: "About - Arthur Kameni | Full Stack Developer",
    description:
      "Discover my journey, skills, and passion for development. Graduate from La Cité Collégiale, I create innovative solutions.",
    keywords: [
      "about",
      "skills",
      "journey",
      "education",
      "La Cité Collégiale",
      "full-stack developer",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "About - Arthur Kameni | Full Stack Developer",
      description: "Discover my journey, skills, and passion for development.",
      type: "profile",
      images: ["/og/about.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "About - Arthur Kameni | Full Stack Developer",
      description: "Discover my journey, skills, and passion for development.",
      images: ["/og/about.svg", "/arthur.webp"],
    },
  },
  projects: {
    title: "Projects - Arthur Kameni | Development Portfolio",
    description:
      "Explore my development projects: web applications, management systems, bots, and more. Each project demonstrates my technical expertise.",
    keywords: [
      "projects",
      "web applications",
      "management system",
      "bot",
      "React",
      "Next.js",
      "portfolio",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "Projects - Arthur Kameni | Development Portfolio",
      description:
        "Explore my development projects: web applications, management systems, bots, and more.",
      type: "website",
      images: [
        "/og/projects.svg",
        "/images/lms-cover.png",
        "/images/coop-bot-cover.png",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects - Arthur Kameni | Development Portfolio",
      description:
        "Explore my development projects: web applications, management systems, bots, and more.",
      images: ["/og/projects.svg", "/images/lms-cover.png"],
    },
  },
  experience: {
    title: "Experience - Arthur Kameni | Professional Journey",
    description:
      "My professional journey: graduate from La Cité Collégiale, volunteer developer, and passionate about technological innovation.",
    keywords: [
      "experience",
      "professional journey",
      "La Cité Collégiale",
      "volunteer developer",
      "education",
      "Arthur Kameni",
    ],
    openGraph: {
      title: "Experience - Arthur Kameni | Professional Journey",
      description:
        "My professional journey: graduate from La Cité Collégiale, volunteer developer, and passionate about innovation.",
      type: "profile",
      images: ["/og/experience.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Experience - Arthur Kameni | Professional Journey",
      description:
        "My professional journey: graduate from La Cité Collégiale, volunteer developer, and passionate about innovation.",
      images: ["/og/experience.svg", "/arthur.webp"],
    },
  },
  contact: {
    title: "Contact - Arthur Kameni | Full Stack Developer",
    description:
      "Contact me to discuss your development projects. Available for collaboration and employment opportunities.",
    keywords: [
      "contact",
      "collaboration",
      "employment",
      "projects",
      "development",
      "Arthur Kameni",
      "Ottawa",
    ],
    openGraph: {
      title: "Contact - Arthur Kameni | Full Stack Developer",
      description:
        "Contact me to discuss your development projects. Available for collaboration and employment opportunities.",
      type: "website",
      images: ["/og/contact.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact - Arthur Kameni | Full Stack Developer",
      description: "Contact me to discuss your development projects.",
      images: ["/og/contact.svg", "/arthur.webp"],
    },
  },
  notFound: {
    title: "Page Not Found - Arthur Kameni",
    description:
      "The page you are looking for does not exist. Return to the home page to explore my development portfolio.",
    keywords: ["page not found", "404", "portfolio", "Arthur Kameni"],
    openGraph: {
      title: "Page Not Found - Arthur Kameni",
      description:
        "The page you are looking for does not exist. Return to the home page to explore my portfolio.",
      type: "website",
      images: ["/og/home.svg", "/arthur.webp"],
    },
    twitter: {
      card: "summary",
      title: "Page Not Found - Arthur Kameni",
      description:
        "The page you are looking for does not exist. Return to the home page to explore my portfolio.",
      images: ["/og/home.svg", "/arthur.webp"],
    },
  },
};

export function generateMetadataEn(
  config: SEOConfig,
  locale?: string,
  canonicalUrl?: string,
): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthurkameni.com";
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
      locale: locale ?? "en_CA",
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
    classification: "Developer Portfolio",
    other: {
      "theme-color": "#2563eb",
      "color-scheme": "light dark",
    },
  };
}

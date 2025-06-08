import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";

export const navigationLinks: NavigationLinks[] = [
  {
    translationKey: "Navigation.about",
    href: "/about",
  },
  {
    translationKey: "Navigation.projects",
    href: "/projects",
  },
  {
    translationKey: "Navigation.experience",
    href: "/experience",
  },
  {
    translationKey: "Navigation.contact",
    href: "/contact",
  },
] as const;

export const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export const projects: Project[] = [
  {
    title: "University Library Management System",
    src: "/images/lms-cover.png",
    href: "https://lms-university.vercel.app/",
    description:
      "A library management system for a university that allows students to borrow and return books, and for librarians to manage the library.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon Database"],
  },
  {
    title: "Coop-bot",
    src: "/images/coop-bot-cover.png",
    darkSrc: "/images/coop-bot-cover-dark.png",
    href: "https://coop-bot-eight.vercel.app/",
    description:
      "A bot that allows students to obtain information about the coop mode in College La Cité.",
    stack: ["Python", "React", "Google Sheets", "TypeScript"],
  },
] as const;

export const socialLinks: SocialLinks[] = [
  {
    href: "https://github.com/AKameni1",
    icon: React.createElement(IconBrandGithub),
  },
  {
    href: "https://www.linkedin.com/in/arthur-kameni-b30000250/",
    icon: React.createElement(IconBrandLinkedin),
  },
  {
    href: "https://www.instagram.com/arthur.kameni/",
    icon: React.createElement(IconBrandInstagram),
  },
  {
    href: "https://www.x.com/arthur.kameni.549",
    icon: React.createElement(IconBrandX),
  },
];

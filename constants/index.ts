import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { BriefcaseBusiness, Code, GraduationCap } from "lucide-react";
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
    descriptionKey: "Projects.universityLmsDesc",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon Database"],
  },
  {
    title: "Coop-bot",
    src: "/images/coop-bot-cover.png",
    darkSrc: "/images/coop-bot-cover-dark.png",
    href: "https://coop-bot-eight.vercel.app/",
    descriptionKey: "Projects.coopBotDesc",
    stack: ["Python", "React", "Google Sheets", "TypeScript"],
  },
  {
    title: "Library Management System",
    src: "/images/lms-desktop-cover.png",
    href: "https://github.com/AKameni1/Arthur_Jayson_Ilan_UA2",
    descriptionKey: "Projects.desktopLmsDesc",
    stack: ["C#", "ASP.NET", "SQLite", "Entity Framework"],
  },
] as const;

export const socialLinks: SocialLinks[] = [
  {
    href: "https://github.com/AKameni1",
    icon: React.createElement(IconBrandGithub),
  },
  {
    href: "https://www.linkedin.com/in/arthur-kameni-0a8ba4291",
    icon: React.createElement(IconBrandLinkedin),
  },
  {
    href: "https://www.instagram.com/arthur_coder1/",
    icon: React.createElement(IconBrandInstagram),
  },
  {
    href: "https://x.com/Arthur233013647",
    icon: React.createElement(IconBrandX),
  },
];

export const experiencesData: Experience[] = [
  {
    id: "graduated",
    icon: React.createElement(GraduationCap),
  },
  {
    id: "volunteer",
    icon: React.createElement(BriefcaseBusiness),
  },
  {
    id: "fullstack",
    icon: React.createElement(Code),
  },
] as const;

type NavigationLinks = {
  translationKey: string;
  href: string;
};

type ThemeToggleProps = {
  className?: string;
};

type Language = {
  code: "en" | "fr";
  name: string;
};

type Project = {
  title: string;
  src: string;
  darkSrc?: string;
  href: string;
  description: string;
  stack: string[];
};

type TechnologyLogo = {
  src: string;
  alt: string;
  className?: string;
};

type SocialLinks = {
  href: string;
  icon: React.ReactElement;
};

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
  descriptionKey: string;
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

type Experience = {
  id: string;

  icon: React.ReactElement;
};

type SkillsCategory = {
  id: string;
  icon: React.ReactElement;
  color: string;
};

type SEOConfig = {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type:
      | "website"
      | "article"
      | "book"
      | "profile"
      | "music.song"
      | "music.album"
      | "music.playlist"
      | "music.radio_station"
      | "video.movie"
      | "video.episode"
      | "video.tv_show"
      | "video.other";
    images: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
};

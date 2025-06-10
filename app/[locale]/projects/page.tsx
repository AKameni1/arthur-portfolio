import type { Metadata } from "next";
import Projects from "@/components/projects";
import { seoConfigs, generateMetadata as generateMetadataFr } from "@/lib/seo";
import { seoConfigsEn, generateMetadataEn } from "@/lib/seo-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthur-portfolio.vercel.app";
  const canonicalUrl = locale === "en" ? `${baseUrl}/en/projects` : `${baseUrl}/fr/projects`;

  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.projects, locale, canonicalUrl);
  }

  return generateMetadataFr(seoConfigs.projects, locale, canonicalUrl);
}

export default function ProjectsPage() {
  return <Projects />;
}

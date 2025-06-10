import type { Metadata } from "next";
import Experience from "@/components/experience";
import { seoConfigs, generateMetadata as generateMetadataFr } from "@/lib/seo";
import { seoConfigsEn, generateMetadataEn } from "@/lib/seo-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthur-portfolio.vercel.app";
  const canonicalUrl = locale === "en" ? `${baseUrl}/en/experience` : `${baseUrl}/fr/experience`;
  
  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.experience, locale, canonicalUrl);
  }
  
  return generateMetadataFr(seoConfigs.experience, locale, canonicalUrl);
}

export default function ExperiencePage() {
  return <Experience />;
}

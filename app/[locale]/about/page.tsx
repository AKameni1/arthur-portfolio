import type { Metadata } from "next";
import About from "@/components/about";
import { seoConfigs, generateMetadata as generateMetadataFr } from "@/lib/seo";
import { seoConfigsEn, generateMetadataEn } from "@/lib/seo-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthurkameni.com";
  const canonicalUrl = locale === "en" ? `${baseUrl}/en/about` : `${baseUrl}/fr/about`;

  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.about, locale, canonicalUrl);
  }

  return generateMetadataFr(seoConfigs.about, locale, canonicalUrl);
}

export default function AboutPage() {
  return <About />;
}

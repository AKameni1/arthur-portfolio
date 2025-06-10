import type { Metadata } from "next";
import Home from "@/components/home";
import { seoConfigs, generateMetadata as generateMetadataFr } from "@/lib/seo";
import { seoConfigsEn, generateMetadataEn } from "@/lib/seo-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthur-portfolio.vercel.app";
  const canonicalUrl = locale === "en" ? `${baseUrl}/en` : `${baseUrl}/fr`;

  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.home, locale, canonicalUrl);
  }

  return generateMetadataFr(seoConfigs.home, locale, canonicalUrl);
}

export default function HomePage() {
  return <Home />;
}

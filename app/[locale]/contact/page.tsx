import type { Metadata } from "next";
import Contact from "@/components/contact";
import { seoConfigs, generateMetadata as generateMetadataFr } from "@/lib/seo";
import { seoConfigsEn, generateMetadataEn } from "@/lib/seo-en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://arthurkameni.com";
  const canonicalUrl = locale === "en" ? `${baseUrl}/en/contact` : `${baseUrl}/fr/contact`;

  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.contact, locale, canonicalUrl);
  }

  return generateMetadataFr(seoConfigs.contact, locale, canonicalUrl);
}

export default function ContactPage() {
  return <Contact />;
}

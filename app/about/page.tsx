import type { Metadata } from "next";
import AboutClient from "./about-client";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `About Prasan Bora — Software Engineer & Full Stack Developer`,
  description: `About ${SITE.fullName}: a software engineer building web, mobile, backend, and AI products. Read Prasan Bora's bio, career timeline, and writing.`,
  path: "/about",
  type: "profile",
  keywords: [
    "About Prasan Bora",
    "Prasan Bora bio",
    "Prasan Bora career",
    "Prasan Bora resume",
    "Prasan Bora experience",
    "Prasan Bora software engineer",
    ...SITE.keywords,
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="ld-about-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutClient />
    </>
  );
}

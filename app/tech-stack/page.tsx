import type { Metadata } from "next";
import { SkillsAndServices } from "@/components/tech-stack/stack-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Tech Stack & Skills — Prasan Bora`,
  description: `Technologies and tools ${SITE.fullName} works with: Next.js, React Native, NestJS, TypeScript, Node.js, PostgreSQL, AWS, Docker, AI integrations, and more.`,
  path: "/tech-stack",
  keywords: [
    "Prasan Bora tech stack",
    "Prasan Bora skills",
    "Prasan Bora Next.js",
    "Prasan Bora React Native",
    "Prasan Bora NestJS",
    "Prasan Bora TypeScript",
    ...SITE.keywords,
  ],
});

export default function TechStackPage() {
  return (
    <>
      <JsonLd
        id="ld-techstack-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tech Stack", path: "/tech-stack" },
        ])}
      />
      <SkillsAndServices />
    </>
  );
}

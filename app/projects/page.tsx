import type { Metadata } from "next";
import ProjectsClient from "./projects-client";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Projects by Prasan Bora — Open Source & Side Projects`,
  description: `Open-source side projects by ${SITE.fullName}: full-stack apps, real-time chat, browser extensions, games, and more — all built to learn and ship.`,
  path: "/projects",
  keywords: [
    "Prasan Bora projects",
    "Prasan Bora open source",
    "Prasan Bora GitHub",
    "Prasan Bora side projects",
    ...SITE.keywords,
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        id="ld-projects-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <ProjectsClient />
    </>
  );
}

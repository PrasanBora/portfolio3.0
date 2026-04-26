import type { Metadata } from "next";
import HomeClient from "./home-client";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildMetadata,
  professionalServiceJsonLd,
  SITE,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.fullName} — ${SITE.role} | Portfolio`,
  description: `${SITE.fullName} is a ${SITE.role} from India. Explore Prasan Bora's portfolio: featured work, projects, experience, and tech stack across web, mobile, and AI.`,
  path: "/",
  type: "profile",
});

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-service" data={professionalServiceJsonLd()} />
      <HomeClient />
    </>
  );
}

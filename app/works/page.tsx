import type { Metadata } from "next";
import WorksClient from "./works-client";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, SITE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Work — Selected Projects by Prasan Bora`,
  description: `Selected work by ${SITE.fullName}: AI platforms, SaaS, e-commerce, and client websites built with Next.js, React Native, NestJS, and TypeScript.`,
  path: "/works",
  keywords: [
    "Prasan Bora work",
    "Prasan Bora projects",
    "Prasan Bora portfolio",
    "Chefadora developer",
    "Korperheil website",
    "Himalayan Valley e-commerce",
    ...SITE.keywords,
  ],
});

const works = [
  {
    name: "Chefadora",
    url: "https://www.chefadora.com/cooking-ai",
    image: absoluteUrl("/images/works/chefadora-hero.png"),
    description:
      "AI-powered cooking assistant. Built Cooking Mode and AI agents end-to-end.",
  },
  {
    name: "Korperheil",
    url: "https://korperheil.com",
    image: absoluteUrl("/images/projects/physio-hero.png"),
    description: "Physiotherapy clinic website focused on speed and conversions.",
  },
  {
    name: "Himalayan Valley",
    url: "https://www.himalayanvalleyproduct.com/",
    image: absoluteUrl("/images/works/himalayan-valley-hero.png"),
    description:
      "Full-stack premium tea e-commerce platform with SSR, headless CMS, and edge caching.",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Selected Work by ${SITE.fullName}`,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: works.length,
  itemListElement: works.map((w, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "CreativeWork",
      name: w.name,
      url: w.url,
      image: w.image,
      description: w.description,
      author: { "@id": `${SITE.url}/#person` },
    },
  })),
};

export default function WorksPage() {
  return (
    <>
      <JsonLd
        id="ld-works-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/works" },
        ])}
      />
      <JsonLd id="ld-works-list" data={itemListJsonLd} />
      <WorksClient />
    </>
  );
}

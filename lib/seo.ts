import type { Metadata } from "next";

export const SITE = {
  name: "Prasan Bora",
  fullName: "Prasan Bora",
  role: "Software Engineer & Full Stack Developer",
  shortDescription:
    "Prasan Bora — Software Engineer and Full Stack Developer building web, mobile, and AI products with Next.js, React Native, NestJS, and TypeScript.",
  longDescription:
    "Prasan Bora is a software engineer and full stack developer based in India. He builds scalable web applications, React Native mobile apps, NestJS backends, and AI-powered features. Explore Prasan Bora's portfolio, projects, work experience, and tech stack.",
  url: "https://www.prasanbora.app",
  domain: "prasanbora.app",
  locale: "en_US",
  email: "prasanbora23@gmail.com",
  twitterHandle: "@prasan_bora",
  ogImage: "/opengraph-image",
  themeColor: "#0a0a0a",
  social: {
    github: "https://github.com/PrasanBora",
    linkedin: "https://www.linkedin.com/in/prasan-bora-943293184/",
    leetcode: "https://leetcode.com/u/unknown__/",
    instagram: "https://www.instagram.com/prasan_bora/",
    devto: "https://dev.to/prasan_bora",
  },
  jobTitle: "Software Engineer",
  workCompany: "Chefadora",
  location: {
    country: "India",
    countryCode: "IN",
  },
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Vercel",
    "Docker",
    "AI Agents",
    "OpenAI API",
    "System Design",
    "Performance Optimization",
  ],
  keywords: [
    "Prasan Bora",
    "Prasan Bora Developer",
    "Prasan Bora Portfolio",
    "Prasan Bora Software Engineer",
    "Software Developer Prasan Bora",
    "Full Stack Developer Prasan Bora",
    "Prasan Bora Chefadora",
    "Prasan Bora React Native",
    "Prasan Bora Next.js",
    "Prasan Bora India",
    "Prasan Bora projects",
    "Prasan Bora resume",
    "Prasan Bora GitHub",
    "Prasan Bora LinkedIn",
  ],
} as const;

export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: readonly string[];
};

export function buildMetadata(input: BuildMetaInput): Metadata {
  const { title, description, path, image, type = "website", keywords } = input;
  const url = absoluteUrl(path);
  const ogImage = image ?? SITE.ogImage;
  const ogImageAbs = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: [...(keywords ?? SITE.keywords)],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      siteName: SITE.fullName,
      title,
      description,
      locale: SITE.locale,
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 630,
          alt: `${SITE.fullName} — ${SITE.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
      creator: SITE.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.fullName,
    alternateName: ["Prasan", "Prasan B"],
    url: SITE.url,
    image: absoluteUrl("/images/profile/profile.png"),
    jobTitle: SITE.jobTitle,
    description: SITE.longDescription,
    email: `mailto:${SITE.email}`,
    worksFor: {
      "@type": "Organization",
      name: SITE.workCompany,
      url: "https://www.chefadora.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE.location.countryCode,
    },
    nationality: {
      "@type": "Country",
      name: SITE.location.country,
    },
    sameAs: [
      SITE.social.github,
      SITE.social.linkedin,
      SITE.social.leetcode,
      SITE.social.instagram,
      SITE.social.devto,
    ],
    knowsAbout: [...SITE.knowsAbout],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: `${SITE.fullName} — Portfolio`,
    description: SITE.shortDescription,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#person` },
    author: { "@id": `${SITE.url}/#person` },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.fullName} — Software Engineering & Full Stack Development`,
    url: SITE.url,
    image: absoluteUrl("/images/profile/profile.png"),
    description:
      "Freelance and full-time software engineering services by Prasan Bora — web apps, mobile apps, backend APIs, performance fixes, and technical consulting.",
    provider: { "@id": `${SITE.url}/#person` },
    areaServed: { "@type": "Country", name: "Worldwide" },
    serviceType: [
      "Web Application Development",
      "Mobile App Development",
      "Backend API Development",
      "Performance Optimization",
      "Technical Consulting",
      "Code Review",
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

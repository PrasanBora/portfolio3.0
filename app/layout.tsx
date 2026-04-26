import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Suspense } from "react";
import { PageTransition } from "@/components/ui/page-transition";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SITE,
  absoluteUrl,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — ${SITE.role}`,
    template: `%s | ${SITE.fullName}`,
  },
  description: SITE.longDescription,
  applicationName: SITE.fullName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  category: "technology",
  keywords: [...SITE.keywords],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — ${SITE.role}`,
    description: SITE.longDescription,
    locale: SITE.locale,
    images: [
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} — ${SITE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullName} — ${SITE.role}`,
    description: SITE.shortDescription,
    images: [absoluteUrl(SITE.ogImage)],
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add Google/Bing verification tokens here when available.
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <JsonLd id="ld-person" data={personJsonLd()} />
        <JsonLd id="ld-website" data={websiteJsonLd()} />
      </head>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <SiteHeader />
          <main
            id="main-content"
            className="min-h-dvh bg-background text-foreground"
          >
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}

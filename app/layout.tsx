import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "prasanbora App",
  description: "Created with prasanbora",
  generator: "prasanbora.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <SiteHeader />
          <main className="min-h-dvh bg-background text-foreground">
            {children}
          </main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}

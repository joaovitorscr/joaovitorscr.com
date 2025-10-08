import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { StructuredData } from "@/components/structured-data";
import { TooltipProvider } from "@/components/ui/tooltip";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as "en" | "pt",
    namespace: "metadata",
  });

  const baseUrl = "https://joaovitorscr.com";

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    keywords: [
      "João Vitor",
      "Frontend Developer",
      "Web Developer",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Portfolio",
      "Desenvolvedor Frontend",
    ],
    authors: [{ name: "João Vitor" }],
    creator: "João Vitor",
    publisher: "João Vitor",
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
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        pt: `${baseUrl}/pt`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: "joaovitorscr.com",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/icon-512.png`,
          width: 512,
          height: 512,
          alt: "João Vitor - Frontend Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@joaovitorscr",
      images: [`${baseUrl}/icon-512.png`],
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: t("title"),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${nunitoSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

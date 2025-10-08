import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { TooltipProvider } from "@/components/ui/tooltip";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// TODO: Find out a way to create localized descriptions for better SEO
export const metadata: Metadata = {
    title: "joaovitorscr | Web Developer",
};

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

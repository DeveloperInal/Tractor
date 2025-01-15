import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { notFound } from "next/navigation";
import {JSX, ReactNode} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TitanTrucks - Надёжные грузовые машины",
    description: "Широкий выбор грузовой техники для любых задач",
};

interface LayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

// Изменяем `RootLayout` для корректной работы с `params`
export default async function RootLayout({ children, params }: LayoutProps) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            <Navigation />
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

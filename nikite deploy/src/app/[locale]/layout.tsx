import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
import "./globals.css";
import Navigation from "@/components/Navigation";
import {notFound} from "next/navigation";

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

export default async function RootLayout({
                                       children,
                                       params: {locale}
                                   }: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
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

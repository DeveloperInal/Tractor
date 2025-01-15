"use client"
import { useState } from "react";
import { Unbounded } from "next/font/google";
import { SplitText } from "@/components/ui/splitText";
import TranslateSwitcher from "@/components/ui/traslate-switcher";
import {useTranslations} from "next-intl";

const manrope = Unbounded({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-manrope',
});

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations("MainPage.navbar");

    return (
        <nav className="absolute top-0 left-0 right-0 z-50" style={manrope.style}>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8">
                <div className="flex justify-between items-center relative z-20">
                    {/* Logo */}
                    <SplitText
                        text="TitanTrucks"
                        className="text-4xl font-bold text-white"
                        href="#hero"
                    />

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center gap-16">
                            {[t("home"), t("technique"), t("benefits"), t("partners")].map((item) => (
                                <SplitText
                                    key={item}
                                    text={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-primary transition-colors font-medium"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Language Switcher */}
                    <div className="hidden lg:block">
                        <TranslateSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${
                        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    } lg:hidden fixed top-0 left-0 right-0 bg-[#2A2C2B] transition-all duration-300 ease-in-out pt-24 pb-8 px-4 z-10`}
                >
                    <div className="flex flex-col items-center gap-6 bg-[#2A2C2B]">
                        {[t("home"), t("technique"), t("benefits"), t("partners")].map((item) => (
                            <SplitText
                                key={item}
                                text={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg text-white hover:text-primary transition-colors"
                            />
                        ))}
                        <div className="pt-4">
                            <TranslateSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

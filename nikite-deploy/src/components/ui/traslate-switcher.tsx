'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import {useTranslations, useLocale} from "next-intl";
import { useRouter, Locale } from '@/i18n/routing'
import {useTransition} from "react";

interface Language {
    code: string
    label: string
    flag: string
}

const languages: Language[] = [
    { code: "az", label: 'Azərbaycan', flag: '/az.svg' },
    { code: "ru", label: 'Русский', flag: '/ru.svg' },
    { code: "en", label: 'English', flag: '/us.svg' },
]

export default function TranslateSwitcher() {
    const t = useTranslations('LanguageSwitcher')
    const locale = useLocale()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const currentLang = languages.find(lang => lang.code === locale) || languages[0]

    const handleLanguageChange = (newLocale: Locale) => {
        startTransition(() => {
            router.replace('/', {locale: newLocale})
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:text-white hover:bg-transparent focus:bg-transparent"
                >
                    <Image
                        src={currentLang.flag}
                        alt={t('flagAlt', { language: currentLang.label })}
                        width={24}
                        height={16}
                        className="rounded"
                    />
                    <span className="font-medium text-black">{currentLang.code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code as Locale)}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={language.flag}
                            alt={t('flagAlt', { language: language.label })}
                            width={24}
                            height={17}
                            className="rounded"
                        />
                        <span className='text-black'>{language.code.toUpperCase()}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


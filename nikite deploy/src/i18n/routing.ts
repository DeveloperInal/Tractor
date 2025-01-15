import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['az', 'ru', 'en'] as const;
export type Locale = typeof locales[number];

export const routing = defineRouting({
    locales,
    defaultLocale: 'az',
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);
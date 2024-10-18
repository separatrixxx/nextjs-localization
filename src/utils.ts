import { NextRouter } from 'next/router';
import { useLocale } from './useLocale';


// Function to set locale
export function setLocale(key: string): string {
    const { router, locales } = useLocale();
    const currentLocale = router.locale || 'en';

    const localesMap = locales.reduce((acc, locale) => {
        acc[locale.locale] = locale;
        return acc;
    }, {} as Record<string, Record<string, any>>);

    return localesMap[currentLocale]?.[key] || localesMap['en']?.[key] || key;
}

// Change locale
export function changeLocale(router: NextRouter, locale: string): void {
    router.push(router.asPath, router.asPath, { locale });
}

import { NextRouter } from 'next/router';
import { useLocale } from './useLocale';
import { GlobalLocale } from './types';


// Function to set locale
export function setLocale(key: string, value?: string): string {
    const { router, locales } = useLocale();

    const currentLocale = router.locale || 'en';

    const localesMap = locales.reduce((acc, locale) => {
        acc[locale.locale] = locale;
        return acc;
    }, {} as Record<string, Record<string, any>>);

    let localizedText = localesMap[currentLocale]?.[key] || localesMap['en']?.[key] || key;

    // If there is a value parameter, replace $$$ with value
    if (value) {
        localizedText = localizedText.replace(/\$\$\$/g, value);
    }

    return localizedText;
}

// Change locale
export function changeLocale(router: NextRouter, locale: string): void {
    router.push(router.asPath, router.asPath, { locale });
}

// Get the current locale from the router or return the default 'en'
export function getCurrentLocale(): string {
    const { router } = useLocale();

    return router.locale || 'en';
}

// Get a list of all available locales in the current context
export function getAvailableLocales(): string[] {
    const { locales } = useLocale();

    return locales.map(locale => locale.locale);
}

// Get a list of all global locales with their codes, languages, countries and flags
export function getAllGlobalLocales() {
    const localesFull: string[] = [
        'ar_AA', 'be_BY', 'bg_BG', 'ca_ES', 'cs_CZ', 'da_DK', 'de_CH', 'de_DE', 'el_GR', 'en_AU', 'en_BE', 'en_GB',
        'en_JP', 'en_US', 'en_ZA', 'es_ES', 'fi_FI', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR', 'hr_HR', 'hu_HU', 'is_IS',
        'it_CH', 'it_IT', 'iw_IL', 'ja_JP', 'ko_KR', 'lt_LT', 'lv_LV', 'mk_MK', 'nl_BE', 'nl_NL', 'no_NO', 'pl_PL',
        'pt_BR', 'pt_PT', 'ro_RO', 'ru_RU', 'sh_SP', 'sk_SK', 'sl_SL', 'sq_AL', 'sv_SE', 'th_TH', 'tr_TR', 'uk_UA',
        'zh_CN', 'zh_TW'
    ];

    const languages: string[] = [
        'Arabic', 'Belarusian', 'Bulgarian', 'Catalan', 'Czech', 'Danish', 'Swiss German', 'German', 'Greek', 'Australian English',
        'Belgian English', 'British English', 'Japanese English', 'American English', 'South African English', 'Spanish',
        'Finnish', 'Belgian French', 'Canadian French', 'Swiss French', 'French', 'Croatian', 'Hungarian', 'Icelandic',
        'Swiss Italian', 'Italian', 'Hebrew', 'Japanese', 'Korean', 'Lithuanian', 'Latvian', 'Macedonian', 'Belgian Dutch',
        'Dutch', 'Norwegian', 'Polish', 'Brazilian Portuguese', 'Portuguese', 'Romanian', 'Russian', 'Serbian', 'Slovak',
        'Slovenian', 'Albanian', 'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Simplified Chinese', 'Traditional Chinese'
    ];

    const countries: string[][] = [
        ['Saudi Arabia', 'United Arab Emirates', 'Egypt', 'Algeria'], ['Belarus'], ['Bulgaria'], ['Spain'], ['Czech Republic'],
        ['Denmark'], ['Switzerland'], ['Germany'], ['Greece'], ['Australia'], ['Belgium'], ['United Kingdom'], ['Japan'],
        ['United States'], ['South Africa'], ['Spain'], ['Finland'], ['Belgium'], ['Canada'], ['Switzerland'], ['France'],
        ['Croatia'], ['Hungary'], ['Iceland'], ['Switzerland'], ['Italy'], ['Israel'], ['Japan'], ['South Korea'], ['Lithuania'],
        ['Latvia'], ['Macedonia'], ['Belgium'], ['Netherlands'], ['Norway'], ['Poland'], ['Brazil'], ['Portugal'], ['Romania'],
        ['Russia', 'Belarus', 'Kazakhstan', 'Ukraine'], ['Serbia'], ['Slovakia'], ['Slovenia'], ['Albania'], ['Sweden'],
        ['Thailand'], ['Turkey'], ['Ukraine'], ['China'], ['Taiwan']
    ];

    const flags: string[] = [
        '🇸🇦', '🇧🇾', '🇧🇬', '🇪🇸', '🇨🇿', '🇩🇰', '🇨🇭', '🇩🇪', '🇬🇷', '🇦🇺', '🇧🇪', '🇬🇧', '🇯🇵', '🇺🇸', '🇿🇦', '🇪🇸',
        '🇫🇮', '🇧🇪', '🇨🇦', '🇨🇭', '🇫🇷', '🇭🇷', '🇭🇺', '🇮🇸', '🇨🇭', '🇮🇹', '🇮🇱', '🇯🇵', '🇰🇷', '🇱🇹', '🇱🇻',
        '🇲🇰', '🇧🇪', '🇳🇱', '🇳🇴', '🇵🇱', '🇧🇷', '🇵🇹', '🇷🇴', '🇷🇺', '🇷🇸', '🇸🇰', '🇸🇮', '🇦🇱', '🇸🇪', '🇹🇭',
        '🇹🇷', '🇺🇦', '🇨🇳', '🇹🇼'
    ];

    const globalLocales: GlobalLocale[] = localesFull.map((locale, index) => ({
        locale,
        language: languages[index],
        country: countries[index],
        flag: flags[index],
    }));

    return globalLocales;
}

// Get locale data by locale code
export function getLocaleData(locale: string): GlobalLocale | undefined {
    return getAllGlobalLocales().find(item => item.locale === locale);
}

import { NextRouter } from 'next/router';


// Type for locales
export type LocaleFiles = Record<string, any>[];

// Context type
export type LocaleContextType = {
    locales: LocaleFiles,
    router: NextRouter,
};

export type GlobalLocale = {
    locale: string,
    language: string,
    country: string[],
    flag: string,
};

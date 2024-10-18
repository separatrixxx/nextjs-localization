import { createContext } from 'react';
import { NextRouter } from 'next/router';


// Type for locales
export type LocaleFiles = Record<string, any>[];

// Context type
export type LocaleContextType = {
    locales: LocaleFiles;
    router: NextRouter;
};

// Create context
export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

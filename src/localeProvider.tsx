import React, { ReactNode } from 'react';
import { NextRouter } from 'next/router';
import { LocaleFiles } from './types';
import { LocaleContext } from './context';


// Provider to wrap components
type LocaleProviderProps = {
    children: ReactNode;
    locales: LocaleFiles;
    router: NextRouter;
};

export function LocaleProvider({ children, locales, router }: LocaleProviderProps) {
    return (
        <LocaleContext.Provider value={{ locales: locales, router }}>
            {children}
        </LocaleContext.Provider>
    );
}

import React, { ReactNode } from 'react';
import { NextRouter } from 'next/router';
import { LocaleContext, LocaleFiles } from './context';


// Provider to wrap components
type LocaleProviderProps = {
    children: ReactNode;
    localesArray: LocaleFiles;
    router: NextRouter;
};

export function LocaleProvider({ children, localesArray, router }: LocaleProviderProps) {
    return (
        <LocaleContext.Provider value={{ locales: localesArray, router }}>
            {children}
        </LocaleContext.Provider>
    );
}

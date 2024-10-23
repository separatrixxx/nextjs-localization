import { createContext } from 'react';
import { LocaleContextType } from './types';

// Create context
export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

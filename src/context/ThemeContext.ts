import { createContext } from 'react';

interface ContextType {
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextType | undefined>(undefined);
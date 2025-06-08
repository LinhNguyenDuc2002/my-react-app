import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { LightTheme, DarkTheme } from './theme';
import { Locale } from '../i18n/i18n';

interface ContextType {
    toggleTheme: () => void;
    changeLocale: (localeKey: keyof typeof Locale) => void;
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [locale, setLocale] = useState(Locale.en);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    const changeLocale = (localeKey: keyof typeof Locale) => {
        setLocale(Locale[localeKey]);
    };

    return (
        <AppContext.Provider value={{ toggleTheme, changeLocale }}>
            <ConfigProvider
                locale={locale}
                theme={{ token: isDarkMode ? DarkTheme.token : LightTheme.token }}>
                {children}
            </ConfigProvider>
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
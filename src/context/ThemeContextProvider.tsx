import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { ConfigProvider } from "antd";
import { DarkTheme, LightTheme } from "../themes/theme";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ConfigProvider
                theme={{ 
                    token: isDarkMode ? DarkTheme.token : LightTheme.token,
                    components: isDarkMode ? DarkTheme.components : LightTheme.components,
                }}>
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }

    return context;
};

export const useThemeContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
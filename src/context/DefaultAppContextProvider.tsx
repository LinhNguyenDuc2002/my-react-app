import React from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './AppContext';
import handleResponse from '../utils/handleError';

// destructuring, allow to get children from props directly
export const DefaultAppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const fetchData = (path: string, fetchParams: RequestInit) => {
        const newParams = { ...fetchParams };

        const newPath = `/api/${path}`;
        const cleanPath = newPath.replace(/([^:]\/)\/+/g, "$1"); // Cleanup duplicated slashes

        return fetch(cleanPath, newParams).then(handleResponse);
    }

    return (
        <AppContext.Provider value={{ fetchData }}>
            {children}
        </AppContext.Provider>
    );
};
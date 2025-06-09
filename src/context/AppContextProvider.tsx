import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './AppContext';

// destructuring, allow to get children from props directly
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<string>('Hello, World!');

    

    return (
        <AppContext.Provider value={{ value, setValue }}>
        {children}
        </AppContext.Provider>
    );
};
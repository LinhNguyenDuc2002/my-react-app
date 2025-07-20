import { createContext } from 'react';

interface MyContextType {
    fetchData: (path: string, fetchParams: RequestInit) => Promise<any>;
}

export const AppContext = createContext<MyContextType | undefined>(undefined);
import { createContext } from 'react';

// define data type for context
interface MyContextType {
    fetchData: (path: string, fetchParams: RequestInit) => Promise<any>; // represent a value in the future
}

export const AppContext = createContext<MyContextType | undefined>(undefined);
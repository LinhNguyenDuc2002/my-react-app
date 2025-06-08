import { createContext, useContext } from 'react';

// define data type for context
interface MyContextType {
  value: string;
  setValue: (value: string) => void;
  fetchData: () => Promise<void>; // represent a value in the future
}

export const AppContext = createContext<MyContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
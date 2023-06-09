import { createContext, ReactNode, useContext, useState } from "react";
import { cookies } from 'next/headers';

interface LanguageProviderProps {
    children: ReactNode;
}

interface LanguageContextData {
    language: string,
    changeLanguage: (newLang: string) => void,
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData)



export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState('br');

    function changeLanguage(newLanguage: string) {
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    return context
}
import { createContext, ReactNode } from 'react'

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext('');

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    return (
        <AuthContext.Provider value='bruno'>
            {children}
        </AuthContext.Provider>
    )
}
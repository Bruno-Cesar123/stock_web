import { createContext, ReactNode, useCallback, useContext } from 'react'
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}
interface AuthContextData {
    signIn(credentials: SignInCredentials): Promise<void>;
}
interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthContextProvider({ children }: AuthContextProviderProps) {

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        })

        console.log(response.data)
    }, [])
    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider')
    }

    return context;
}

export { AuthContextProvider, useAuth }
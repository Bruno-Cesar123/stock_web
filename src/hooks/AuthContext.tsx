import { createContext, ReactNode, useCallback, useContext, useState, useMemo } from 'react'
import Cookies from 'universal-cookie';

import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }

interface AuthState {
    token: string;
    user: User;
  }
interface AuthContextData {
    signIn(credentials: SignInCredentials): Promise<void>;
    user: User;
    token: string;
}
interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthContextProvider({ children }: AuthContextProviderProps) {
    const cookies = useMemo(
        () => new Cookies(),
    [])

    const [data, setData] = useState<AuthState>(() => {
        const token = cookies.get('@App:token');
        const user = cookies.get('@App:user');
    
        if (token && user) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          return { token, user };
        }
    
        return {} as AuthState;
      });


    const signIn = useCallback(async ({ email, password }) => {

        const response = await api.post('sessions', {
            email,
            password,
        })
        const { token, user } = response.data
        cookies.set('@App:token', token)
        cookies.set('@App:user', JSON.stringify(user))

        console.log(cookies.get('@App:user'))

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({ token, user });

    }, [cookies])
    return (
        <AuthContext.Provider value={{signIn, user: data.user, token: data.token}}>
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
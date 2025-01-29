import React, { useState, createContext, ReactNode, useEffect } from "react";
import { Alert } from "react-native"; 

import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api"


type AuthContextData = {
    token: string | null;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
    const [token, setToken] = useState<string | null >('');

    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const isAuthenticated = !!token;

    useEffect(() => {

        async function getToken(){
            // Pegar o token salvo do usuário
            const token = await AsyncStorage.getItem('@token');

            // Verificar se há dados salvos
            if(token){
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                setToken(token);
            }

            setLoading(false);
        }

        getToken();

    }, [])

    async function signIn({ email, password }: SignInProps){
        setLoadingAuth(true);

        try {
            const response = await api.post('/user/login', {
                email, password
            })

            const { token } = response.data;

            await AsyncStorage.setItem('@token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setToken(token)

            setLoadingAuth(false);

        } catch (error) {
            console.log('Erro ao acessar', error)
            Alert.alert(
                "Erro",
                "Erro ao acessar."
            )
            setLoadingAuth(false);
        }
    }

    async function signOut(){
        await AsyncStorage.clear()
        .then(() => {
            setToken('')
        })
    }

    return(
        <AuthContext.Provider 
            value={{ 
                token, 
                isAuthenticated, 
                signIn, 
                loadingAuth, 
                loading, 
                signOut
                }}
        >
            {children}
        </AuthContext.Provider>
    )
}
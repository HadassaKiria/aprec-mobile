import React, { useState, useContext } from 'react';
import { View, Image, Alert } from 'react-native';

import { s } from "./styles"

import { AuthContext } from "../../contexts/AuthContext"
import { Button } from "../../components/button"
import { InputLogin } from '../../components/input-login.tsx';


export default function SignIn(){
    const { signIn } = useContext(AuthContext)

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function handleLogin(){

        if(!email.trim() || !password.trim()){
            Alert.alert(
                "Campos vazios",
                "E-mail e senha devem ser preenchidos!"
            )
            return;
        }

        if(!isValidEmail(email)){
            Alert.alert(
                "E-mail inválido",
                "Por favor, insira um e-mail válido."
            )
            return;
        }

        await signIn({ email, password })
    }

    return(
        <View style={s.container}>
            <Image
                style={s.logo}
                source={require('../../assets/logo.png')}
            />

            <InputLogin
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            >
            </InputLogin>
            <Button
                title="Entrar" 
                onPress={handleLogin}>
            </Button>
            <Button 
                title="Cadastrar" 
                onPress={() => ""}
                variant="outline">
            </Button>

        </View>
    )
}
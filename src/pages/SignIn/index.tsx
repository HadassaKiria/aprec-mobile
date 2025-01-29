import React, { useState, useContext } from 'react';
import { View, Image, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { s } from "./styles"

import { AuthContext } from "../../contexts/AuthContext"
import { Button } from "../../components/button"
import { InputLogin } from '../../components/input-login.tsx';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { StackParamsList } from '../../routes/auth.routes';

export default function SignIn(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const { signIn } = useContext(AuthContext)

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginLoading, setIsLoginLoading ] = useState(false);
    const [ isSignUpLoading, setIsSignUpLoading ] = useState(false);

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

        setIsLoginLoading(true);

        await signIn({ email, password });

        setIsLoginLoading(false);
    }

    async function handleSignUp(){
        navigation.navigate('SignUp')
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
                onPress={handleLogin}
                loading={isLoginLoading}
            />
            <Button 
                title="Cadastrar" 
                onPress={handleSignUp}
                variant="outline"
                loading={isSignUpLoading}
            />

        </View>
    )
}
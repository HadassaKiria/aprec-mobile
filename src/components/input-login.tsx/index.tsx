import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { Input } from "../input"
import { s } from "./styles"

type Props = {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}

export function InputLogin({ email, setEmail, password, setPassword }: Props){
    
    return(
        <View style={s.container}>
            <Input
                label='E-mail'
                placeholder='Digite seu e-mail'
                keyboardType='email-address'
                inputText={email}
                onChangeText={setEmail}
            />

            <Input
                label='Senha'
                placeholder='Digite sua senha'
                keyboardType='default'
                inputText={password}
                secureText={true}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => console.log("Redirecionar para recuperação de senha")}>
                <Text style={s.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    )
}
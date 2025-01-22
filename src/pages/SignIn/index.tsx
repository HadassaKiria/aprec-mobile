import React from 'react';
import { View, Image } from 'react-native';

import { s } from "./styles"

import { Button } from "../../components/button"
import { InputLogin } from '../../components/input-login.tsx';

export default function SignIn(){
    return(
        <View style={s.container}>
            <Image
                style={s.logo}
                source={require('../../assets/logo.png')}
            />

            <InputLogin></InputLogin>
            <Button
                title="Entrar" 
                onPress={() => ""}>
            </Button>
            <Button 
                title="Cadastrar" 
                onPress={() => ""}
                variant="outline">
            </Button>

        </View>
    )
}
import React from 'react';
import { View, Image } from 'react-native';

import { s } from "./styles"

import { Button } from "../../components/button"
import { InputProfile } from '../../components/input-profile';

export default function ProFile(){
    return(
        <View style={s.container}>
            <Image
                source={require('../../assets/logo.png')}
            />

            <InputProfile></InputProfile>
            <Button
                title="Atualizar dados" 
                onPress={() => ""}>
            </Button>
            <Button 
                title="Alterar senha" 
                onPress={() => ""}
                variant="outline">
            </Button>

        </View>
    )
}
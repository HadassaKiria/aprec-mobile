import React from 'react';
import { 
    View, 
    StyleSheet,
    Image,
 } from 'react-native';

import { Button } from "../../components/button"
import { InputLogin } from '../../components/input-login.tsx';

export default function SignIn(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />

            <InputLogin></InputLogin>
            <Button
                title="Acessar" 
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    logo:{
        width: 250,
        height: 250,
        marginBottom: 18
    }
})
import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { Button } from '../../components/button';
import { AuthContext } from '../../contexts/AuthContext';

export default function Home(){
    const { signOut } = useContext(AuthContext)

    return(
        <View>
            <Text>Tela Home</Text>
            <Button
                title="Sair"
                onPress={signOut}
                loading={false}
            ></Button>
        </View>
    )
}
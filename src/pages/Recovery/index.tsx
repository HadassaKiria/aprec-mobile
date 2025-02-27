import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { s } from "./styles";
import { Button } from "../../components/button";
import { InputRecovery } from '../../components/input-recovery';

export default function Recovery() {
    const navigation = useNavigation();

    return (
        <View style={s.container}>
            <Image
                style={s.logo}
                source={require('../../assets/logo.png')}
            />

            <InputRecovery />
            <Button
                title="Enviar"
                onPress={() => navigation.navigate("Verify")}
            />
        </View>
    );
}
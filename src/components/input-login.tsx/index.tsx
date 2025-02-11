import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../input";
import { s } from "./styles";

export function InputLogin() {
    const navigation = useNavigation();

    return (
        <View style={s.container}>
            <Input label='E-mail' placeholder='Digite seu e-mail' />
            <Input label='Senha' placeholder='Digite sua senha' secureTextEntry />

            <TouchableOpacity onPress={() => navigation.navigate("Recovery")}>
                <Text style={s.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
}

export { s };
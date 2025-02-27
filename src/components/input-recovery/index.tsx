import { View, Text } from "react-native";

import { Input } from "../input";
import { s } from "./styles";

export function InputRecovery() {

    return (
        <View style={s.container}>
            <Text style={s.title}>Esqueci minha senha</Text>

            <Text style={s.p1}>Instruções</Text>

            <Text style={s.instructions}>
                Para recuperar a senha, preencha abaixo com o seu email e clique em enviar.
            </Text>
            <Input label='E-mail' placeholder='Digite seu e-mail' />
        </View>
    );
}
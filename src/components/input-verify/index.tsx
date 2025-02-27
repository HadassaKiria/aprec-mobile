import { View, Text } from "react-native";

import { Input } from "../input";
import { s } from "./styles";

export function InputVerify() {
    return(
        <View style={s.container}>
            <Text style={s.title}>Verificar Código</Text>

            <Text style={s.p1}>Instruções</Text>

            <Text style={s.instructions}>
            Você irá receber um código no seu email, insira-o abaixo e clique em enviar.
            </Text>
            <Input label='Código' placeholder='Digite o código' />
        </View>
    )
}
import { View } from "react-native"

import { Input } from "../input"
import { s } from "./styles"

export function InputLogin(){
    return(
        <View style={s.container}>
            <Input label='E-mail' placeholder='Digite seu e-mail'></Input>
            <Input label='Senha' placeholder='Digite sua senha'></Input>
        </View>
    )
}
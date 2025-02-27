import { View, Text, TouchableOpacity } from "react-native"

import { Input } from "../input"
import { s } from "./styles"

 export function InputProfile(){
    return(
        <View style={s.container}>
            <Input label="Nome" placeholder="Digite seu nome"></Input>
            <Input label="E-amil" placeholder="Digite seu E-mail"></Input>
            <Input label="Número(Whatsapp)" placeholder="Digite seu Núnemro"></Input>
        </View>
    )
 }
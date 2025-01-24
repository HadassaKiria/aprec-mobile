import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { FormSignUp } from "../../components/form-signup";
import { Button } from "../../components/button";

import { colors } from "../../styles/colors"
import { s } from "./styles";

export default function SignUp(){
    const navigation = useNavigation();

    return(
        <View style={s.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={s.icon}>
                <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
            </TouchableOpacity>

            <Image style={s.logo} source={require('../../assets/logo.png')} />

            <Text style={s.title}>Cadastre-se</Text>

            <View style={s.formContainer}>
                <FormSignUp/>
            </View>

            <Button
                title="Cadastrar"
                onPress={()=> ""} // Definir função
            >
            </Button>  
        </View>
    )
}
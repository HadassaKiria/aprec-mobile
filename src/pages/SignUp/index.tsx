import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { AxiosError } from "axios"; 

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { StackParamsList } from '../../routes/auth.routes';

import { Ionicons } from "@expo/vector-icons";

import { FormSignUp } from "../../components/form-signup";
import { Button } from "../../components/button";
import { FormData } from "../../components/form-signup/index"
import { api } from "../../services/api"


import { colors } from "../../styles/colors"
import { s } from "./styles";


export default function SignUp(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        email: "",
        confirmEmail: "",
        phoneNumber: "",
        confirmPhoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const [ isSignUpLoading, setIsSignUpLoading ] = useState(false);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    async function handleSubmit (){
        // Verifica se pelo menos um valor dos campos do formulário está vazio
        if (Object.values(formData).some(valor => valor === "")){
            Alert.alert(
                "Campos vazios",
                "Preencha todos os campos"
            );
            return
        }

        // Verifica se o formato do e-mail é correto
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData["email"] && emailRegex.test(formData["email"])){
        } else {
            Alert.alert(
                "E-mail inválido",
                "Digite um e-mail válido"
            );
            return
        }

        // Verifica se o formato do número de telefone é correto (Aceita apenas números)
        const telefoneRegex = /^\d{10,11}$/;

        if(formData["phoneNumber"] && telefoneRegex.test(formData["phoneNumber"])){
        } else {
            Alert.alert(
                "Número inválido",
                "Por favor, digite um número válido."
            );
            return
        }

        // Verifica se os campos de confirmação correspondem aos campos principais
        if(formData["email"] !== formData["confirmEmail"]){
            Alert.alert(
                "Emails não correspondem",
                "Por favor, digite o mesmo e-mail no campo de confirmação."
            );
            return
        }

        if(formData["phoneNumber"] !== formData["confirmPhoneNumber"]){
            Alert.alert(
                "Números não correspondem",
                "Por favor, digite o mesmo número no campo de confirmação."
            );
            return
        }

        setIsSignUpLoading(true)

        try {
            const response = await api.post('/user', {
                name: formData["firstName"],
                email: formData["email"],
                number: formData["phoneNumber"],
                password: formData["password"],
            })

            Alert.alert(
                "Sucesso!",
                "Cadastro realizado com sucesso."
            )

            setIsSignUpLoading(false)
            navigation.goBack()

        } catch (err) {
            const error = err as AxiosError;
            // Tratar erros para o usuário
           if (error.response){
            console.log("Erro no servidor: ", error.response.data)
           } else if (error.request) {
            console.log("Erro na requisição: ", error.request);
           } else {
            console.log("Erro desconhecido: ", error.message)
           }
        }

    };

    return(
        <View style={s.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={s.icon}>
                <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
            </TouchableOpacity>

            <Image style={s.logo} source={require('../../assets/logo.png')} />

            <Text style={s.title}>Cadastre-se</Text>

            <View style={s.formContainer}>
                <FormSignUp formData={formData} handleInputChange={handleInputChange}/>
            </View>

            <Button
                title="Cadastrar"
                onPress={handleSubmit}
                loading={isSignUpLoading}
            >
            </Button>  
        </View>
    )
}
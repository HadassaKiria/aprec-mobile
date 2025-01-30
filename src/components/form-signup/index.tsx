import React  from "react"
import { ScrollView } from "react-native"

import { Input } from "../input"
import { s } from "./style"

export interface FormData {
    firstName: string;
    email: string;
    confirmEmail: string;
    phoneNumber: string;
    confirmPhoneNumber: string;
    password: string;
    confirmPassword: string;
}

type FormSignUpProps = {
    formData: Partial<FormData>;
    handleInputChange: (field: keyof FormData, value: string) => void
}

function FormSignUp({ formData, handleInputChange }: FormSignUpProps){

    return(
        <ScrollView style={s.scroll} contentContainerStyle={s.container} showsVerticalScrollIndicator={false} >
            <Input
                label='Nome'
                placeholder='Digite seu nome'
                inputText={formData.firstName || "" }
                onChangeText={(value) => handleInputChange("firstName", value)}
            />

            <Input
                label='E-mail'
                placeholder='Digite seu e-mail'
                inputText={formData.email || ""}
                onChangeText={(value) => handleInputChange("email", value)}
            />

            <Input
                label='Confirme seu e-mail'
                placeholder='Digite novamente seu e-mail'
                inputText={formData.confirmEmail || ""}
                onChangeText={(value) => handleInputChange("confirmEmail", value)}
            />

            <Input
                label='Número(Whatsapp)'
                placeholder='Digite seu número'
                inputText={formData.phoneNumber || ""}
                onChangeText={(value) => handleInputChange("phoneNumber", value)}
            />

            <Input
                label='Confirme seu número'
                placeholder='Digite novamente seu número'
                inputText={formData.confirmPhoneNumber || ""}
                onChangeText={(value) => handleInputChange("confirmPhoneNumber", value)}
            />

            <Input
                label='Crie uma senha'
                placeholder='Digite sua senha'
                inputText={formData.password || ""}
                onChangeText={(value) => handleInputChange("password", value)}
            />

            <Input
                label='Confirme sua senha'
                placeholder='Digite novamente sua senha'
                inputText={formData.confirmPassword || ""}
                onChangeText={(value) => handleInputChange("confirmPassword", value)}
            />        
        </ScrollView>
    )
}

export { FormSignUp }
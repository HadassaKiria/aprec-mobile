import React, { useState } from "react"
import { ScrollView } from "react-native"

import { Input } from "../input"
import { s } from "./style"


function FormSignUp(){
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        confirmPhoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const hadleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    }

    const handleSubmit = () => {
        // Validar dados do formulário
    }

    return(
        <ScrollView style={s.scroll} contentContainerStyle={s.container} showsVerticalScrollIndicator={false} >
            <Input
                label='Nome'
                placeholder='Digite seu nome'
                inputText={formData.firstName}
                onChangeText={(value) => hadleInputChange("firstName", value)}
            />

            <Input
                label='E-mail'
                placeholder='Digite seu e-mail'
                inputText={formData.email}
                onChangeText={(value) => hadleInputChange("email", value)}
            />

            <Input
                label='Confirme seu e-mail'
                placeholder='Digite novamente seu e-mail'
                inputText={formData.confirmEmail}
                onChangeText={(value) => hadleInputChange("confirmEmail", value)}
            />

            <Input
                label='Número(Whatsapp)'
                placeholder='Digite seu número'
                inputText={formData.phoneNumber}
                onChangeText={(value) => hadleInputChange("phoneNumber", value)}
            />

            <Input
                label='Confirme seu número'
                placeholder='Digite novamente seu número'
                inputText={formData.confirmPhoneNumber}
                onChangeText={(value) => hadleInputChange("confirmPhoneNumber", value)}
            />

            <Input
                label='Crie uma senha'
                placeholder='Digite sua senha'
                inputText={formData.password}
                onChangeText={(value) => hadleInputChange("password", value)}
            />

            <Input
                label='Confirme sua senha'
                placeholder='Digite novamente sua senha'
                inputText={formData.confirmPassword}
                onChangeText={(value) => hadleInputChange("confirmPassword", value)}
            />        
        </ScrollView>
    )
}

export { FormSignUp }
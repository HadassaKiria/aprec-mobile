import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { s } from "./styles";

type Props = {
    label: string;
    placeholder: string;
    secureText?: boolean;
}

function Input({ label, placeholder, secureText = false }: Props){
    const [ isSecure, setIsSecure ] = useState(secureText);

    return(
        <View style={s.container}>
            <Text style={s.label}>{label}</Text>
            <View style={s.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={s.inputIconContainer}
                    secureTextEntry={isSecure}
                />
                {secureText && (
                    <TouchableOpacity
                        onPress={() => setIsSecure((prev) => !prev)}
                        style={s.iconContainer}
                    >
                        <Ionicons
                            name={isSecure ? "eye-off" : "eye"}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

export { Input };
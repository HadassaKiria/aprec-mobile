import React, { useContext } from "react";
import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    ActivityIndicator 
} from "react-native"

import { s } from "./styles"
import { variants } from "./variants"

import { colors } from "../../styles/theme"
import { AuthContext } from "../../contexts/AuthContext"


interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "outline";
    style?: TouchableOpacityProps["style"];
    loading: boolean;
}

function Button({ title, onPress, variant = "primary", style, loading = false }: ButtonProps){
    const buttonVariant = variants[variant];

    return(
        <TouchableOpacity
            onPress={onPress}
            style={[s.container, buttonVariant.button, style]}
            activeOpacity={0.8}
            disabled={loading}
        >
            { loading ? (
                <ActivityIndicator size="small" color={colors.blue[50]} />
            ) : (
                <Text style={[s.title, buttonVariant.title]}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}

export { Button }
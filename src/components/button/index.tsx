import React from "react";
import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    ActivityIndicator 
} from "react-native"

import { s } from "./styles"
import { colors } from "../../styles/theme"

import { variants } from "./variants"



interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    variant?: "primary" | "outline";
    style?: TouchableOpacityProps["style"];
}

function Button({ title, onPress, isLoading = false, variant = "primary", style, }: ButtonProps){
    const buttonVariant = variants[variant];

    return(
        <TouchableOpacity
            onPress={onPress}
            style={[s.container, buttonVariant.button, style]}
            activeOpacity={0.8}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={colors.blue[50]} />
            ) : (
                <Text style={[s.title, buttonVariant.title]}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}

export { Button }
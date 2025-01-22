import { colors } from "../../styles/colors"

export interface ButtonStyle {
    button:{
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    },
    title: {
        color: string;
    }
}

const buttonPrimary: ButtonStyle = {
    button: {
        backgroundColor: colors.orange[500]
    },
    title: { color: colors.white[100] }
};

export const buttonOutline: ButtonStyle = {
    button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: colors.orange[500]
    },
    title: {
        color: colors.orange[500]
    }
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline
};
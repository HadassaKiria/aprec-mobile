import { StyleSheet } from "react-native";

import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
        width: '100%',
        paddingVertical: 34,
        paddingHorizontal: 8
    },
    forgotPassword: {
        fontSize: 15,
        fontFamily: fontFamily.regular,
        textAlign: "right",
        marginRight: "4%",
        marginBottom: 60,
        color: colors.blue[100],
        textDecorationLine: 'underline'
    }
})

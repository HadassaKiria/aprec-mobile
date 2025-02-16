import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        backgroundColor: colors.white[100]
    },

    title: {
        fontFamily: fontFamily.regular,
        fontSize: 32,
        marginTop: 80,
        marginBottom: 20
    },
    
    icon: {
        position: "absolute",
        top: 20,
        left: 16,
        zIndex: 10,
        padding: 8
    }
})
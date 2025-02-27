import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: '#FFF'
    },
    
    image: {
        width: 380,
        height: 260,
        borderRadius: 10,
        marginTop: 80,
        marginBottom: 30
    },

    title: {
        fontFamily: fontFamily.bold,
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 18
    },

    description: {
        fontFamily: fontFamily.regular,
        fontSize: 18,
        textAlign: "justify",
        marginBottom: 20,
        paddingHorizontal: 26,
    },

    icon: {
        position: "absolute",
        top: 20,
        left: 16,
        zIndex: 10,
        padding: 8
    }
})
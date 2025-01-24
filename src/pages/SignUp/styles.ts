import { StyleSheet } from "react-native";

import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#FFF'
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 30,
        alignSelf: "center"
    },
    title: {
        fontFamily: fontFamily.regular,
        fontSize: 32,
        marginBottom: 20
    },
    formContainer: {
        flex: 1,
        width: "100%"
    },
    icon: {
        position: "absolute",
        top: 20,
        left: 16,
        zIndex: 10,
        padding: 8
    }
})
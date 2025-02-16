import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white[100],
    marginBottom: 52
    },

    label: {
        marginTop: 8,
        marginBottom: 4,
        marginLeft: 42,
        textAlign: "left",
        width: "100%"
    }
})
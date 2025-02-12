import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff"
    },

    pickerContainer: {
        width: "90%",
        height: 60,
        borderRadius: 5,
        backgroundColor: colors.blue[50],
        marginBottom: 12,
        overflow: "hidden"
      },
    
      input: {
        flex: 1
    }
});
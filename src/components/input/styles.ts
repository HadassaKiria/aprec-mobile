import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center'

    },
    inputContainer:{
        width: '95%',
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.blue[50],
        marginBottom: 12,
        borderRadius: 5,
        paddingHorizontal: 12,
        color: colors.black[100]
    },
    inputIconContainer: {
        width: '90%',
        height: 60,
    },
    label:{
        fontSize: 15,
        fontFamily: fontFamily.regular,
        textAlign: "left",
        alignSelf: 'flex-start',
        marginLeft: '4%',
        marginBottom: 4
    },
    iconContainer: {
        marginLeft: "auto"
    }
})
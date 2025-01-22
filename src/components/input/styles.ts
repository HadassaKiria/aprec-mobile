import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center'

    },
    containerInput:{
        width: '95%',
        height: 60,
        backgroundColor: colors.blue[50],
        marginBottom: 12,
        borderRadius: 5,
        paddingHorizontal: 8,
        color: colors.black[100]
    },
    label:{
        fontSize: 15,
        fontFamily: fontFamily.regular,
        textAlign: "left",
        alignSelf: 'flex-start',
        marginLeft: '4%',
        marginBottom: 4
    }
})
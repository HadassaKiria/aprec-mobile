import { StyleSheet } from "react-native";
import { fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container:{
        width: '90%',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title:{
        fontSize: 18,
        fontFamily: fontFamily.regular
        }
})
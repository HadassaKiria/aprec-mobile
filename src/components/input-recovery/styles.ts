import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        width: '100%',
        paddingVertical: 34,
        paddingHorizontal: 8,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        color: '#333'
    },

    p1: {
        fontSize:18,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20
    },

    instructions: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20
    },
});
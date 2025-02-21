import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../styles/theme';
 
export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 130,
        height: 90,
        borderRadius: 8,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontFamily: fontFamily.bold,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'colors.gray[900]',
    },
});
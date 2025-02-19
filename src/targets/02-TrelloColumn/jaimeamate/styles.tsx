import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#3b0a45',
        padding: 10,
    },
    whiteText: {
        color: '#fff'
    },
    button: {
        backgroundColor: '#7f0c97',
        color: '#fff',
        borderRadius: 10,
        padding: 5,
    },
    buttonHovered: {
        backgroundColor: '#a00dbf'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#7b1fa2',
        alignItems: 'flex-start',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    deleteItemButton: {
        width: 25,
        height: 25
    },
    inputText: {
        color: '#fff',
        backgroundColor: '#7b1fa2',
        borderRadius: 10,
        padding: 5,
        marginVertical: 5,
    }
});
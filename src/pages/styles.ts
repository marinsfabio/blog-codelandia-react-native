import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 200,
        backgroundColor: '#596475',
        paddingHorizontal: 20
    },

    textHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        color: '#FFFFFF',
        fontSize: 18,
        top: 48,
        fontFamily: 'LexendDeca_500Medium'
    },

    textInput: {
        flexDirection: 'row',
        
    },

    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 40,
        top: 105,
        padding: 10,
        borderRadius: 5,
    },
})
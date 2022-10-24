import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 20
    },

    container: {
        width: '100%',
        top: 50,
        marginBottom: 25,
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#FFFFFF'
    },

    dataIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },

    data: {
        color: '#717171',
        fontSize: 14,
        fontFamily: 'LexendDeca_400Regular'
    },

    icon: {
        fontSize: 19
    },

    title: {
        color: '#1A202C',
        fontSize: 18,
        fontFamily: 'LexendDeca_400Regular',
        marginBottom: 10
    },

    subTitle: {
        color: '#717171',
        fontSize: 14,
        fontFamily: 'LexendDeca_500Medium'
    }
})
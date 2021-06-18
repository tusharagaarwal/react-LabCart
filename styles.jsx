import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: '10%'
    },
    textbox: {
        backgroundColor: '#FFF',
        borderColor: '#b1b1b1',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '90%',
        height: 50,
        padding: 5
    },
    primaryText: {
        color: '#9C1717',
        fontWeight: 'bold',
        fontSize: 20
    },
    boxCard: {
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
});

export { styles };
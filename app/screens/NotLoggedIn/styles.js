import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#00D1D1',
    },
    searchBtn: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 30,
        maxWidth: '75%',
        top: 50,
        alignSelf: 'center',
        zIndex: 100
    },
    searchBtnText: {
        color: 'gray'
    },
    logoContainer: {
        marginLeft: 10,
        alignSelf: 'center'
    },
    logoWelcome: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50 
    },
    welcomeTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom : 20,
    },
    exploreContainer: {
        marginLeft: 10,
        marginTop: 50
    },
    exploreBtn: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        maxWidth: '69%'
    },
    exploreBtnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginButton: {
        marginTop: 100
    }
})

export default styles;
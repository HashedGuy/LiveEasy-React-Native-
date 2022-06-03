import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#00D1D1',
    },
    exploreBtn: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        maxWidth: '75%'
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

    exploreBtnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchBtnText: {
        color: 'gray'
    },
    featureButton: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: 70,
        alignItems: 'center'
    },
    logoContainer: {
        marginLeft: 20
    },
    logoWelcome: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 50 
    },
    welcomeTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginBottom : 20,
        marginLeft: 10
    },

    newFeature: {
        color: '#7C73D9',
        fontSize: 20,
        marginTop: 10
    },
    loginButton: {
        marginTop: 100
    }
})

export default styles;
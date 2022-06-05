import {StyleSheet, Dimensions} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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
        top: 20,
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
        marginTop: 30 
    },
    welcomeTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom : 20,
    },
    exploreContainer: {
        margin: 20,
        marginTop: 50
    },
    exploreBtn: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        maxWidth: '58%',
    },
    exploreBtnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loginBtn: {
        alignSelf: 'flex-end',
        marginTop: 50,
        marginHorizontal: 20
    },
    loginBtntext: {
        textAlign: 'right'
    },
    exploreTitle: {
        top: 100,
        marginLeft: 20,
        fontSize: 20,
        color: 'white'
    },
    unitsContainer: {
        top: 120,
        marginHorizontal: 15,
        marginBottom: 200
    },
    searchContainer: {  
        top: 120,
        marginLeft: 20,
        width: '90%'
    },
    textInput: {
      color: 'white',
      fontSize: 16,
      marginBottom: 20
    },
    searchResultBox: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
     
    },
    iconContainer: {
        marginRight: 15,
        backgroundColor: 'lightblue',
        padding: 7,
        borderRadius: 10
    },  
    locationText: {
        color: 'white',
        fontSize: 20
    },
    unitSelection: {
        top: 100,
        marginLeft: 30,
    }
})

export default styles;
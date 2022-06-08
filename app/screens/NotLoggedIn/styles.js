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
    unitListTitle: {
        flexDirection: 'row',
        top: 100,
        marginLeft: 15
    },
    exploreTitle: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20
    },
    unitsContainer: {
        marginHorizontal: 15
    },
    searchContainer: {  
        top: 20,
        marginLeft: 20,
        width: '90%'
    },

    enterStationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    textInput: {
      color: 'white',
      fontSize: 16,
      marginRight: 10,
      width: 250
    },
    cancelXBtn: {
        backgroundColor: 'lightgray',
        padding: 5,
        borderRadius: 20,
        width: 30,
        height: 30,
        alignItems: 'center'
    },
    cancelXText: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold'
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
        top: 20,
        marginLeft: 30,
    },
    chosenLocationTitle: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomColor: '#e5e4e2',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    chosenLocationText: {
        color: '#e5e4e2',
        fontSize: 25,
        fontWeight: 'bold'
    },
    chooseBtn: {
        alignSelf: 'center',
        backgroundColor: 'white',
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '50%'
    },
    chooseBtnText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    unitInfoText: {
        color: 'white'
    }
})

export default styles;
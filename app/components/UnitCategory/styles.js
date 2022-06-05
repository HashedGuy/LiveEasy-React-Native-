import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    unitRow: {
        width:'92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: 'lightgray'
    },
    unitName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    unitDesc: {
        color: 'lightgray',
        fontSize: 12,
        marginTop: 10
    },
    controllers: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    minusPlusBtn: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    },
    minusPlusText: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    controllerText: {
        color: 'white',
        marginHorizontal: 15,
        alignItems: 'center',
        fontWeight: 'bold'
    }
})

export default styles;
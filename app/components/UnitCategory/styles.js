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
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    },
    controllerText: {
        color: 'white',
        marginHorizontal: 15,
        alignItems: 'center'
    },
    minusPlusText: {
        color: 'white',
        alignSelf: 'center'
    }
})

export default styles;
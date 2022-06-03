import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 15
    },
    station: {
        color: 'white',
        marginVertical: 5,
        fontSize: 20
    },
    description: {
        color: 'white',
        marginVertical: 5,
        fontSize: 14
    },
    oldPrice: {
        opacity: .5,
        fontSize: 18,
        textDecorationLine: 'line-through'
    },
    newPrice: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default styles;
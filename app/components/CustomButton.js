import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 10,
        marginHorizontal: 20
    },

    container_PRIMARY: {
        width: '90%',
        backgroundColor: '#FFB52E',
        padding: 10
    },

    container_TERTIARY: {},

    container_noAccount: {
        bottom: 60,
    },
    container_MORE: {
        width: '60%',
        backgroundColor: 'lightgreen',
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 15
    },

    text_PRIMARY: {
        color: 'white'
    },

    text_MORE: {
        color: 'white'
    },  

    text_TERTIARY: {
        color: '#E8E8E8'
    },

    text_noAccount: {
        color: '#757575'
    }
})

export default CustomButton
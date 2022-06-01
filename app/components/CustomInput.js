import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, securityTextEntry, textContentType}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.inputBox}
        secureTextEntry={securityTextEntry}
        textContentType={textContentType}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        maxWidth: 350,
        minWidth: 250,
        marginVertical: 5,
        marginHorizontal: 10

    },
    inputBox: {
    }
})

export default CustomInput
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordNext = () => {
    const [resetPassN, setResetPassN] = useState('')
    const [resetPassCN, setResetPassCN] = useState('')
    const navigation = useNavigation()

    const onBacktoSignInPressed = () => {
        navigation.navigate('Sign In')
    }

    const onSubmitPressed = () => {
        navigation.navigate('Home')
    }

  return (
    <ImageBackground
    style={styles.background}
    >   
        <View style={styles.logoContainer}>
            
            <Text style={styles.welcomeTitle}>Reset your password</Text>
            
            <CustomInput 
                placeholder='Set your new password' 
                value={resetPassN} 
                setValue={setResetPassN} 
                securityTextEntry={true}
                textContentType='password'/>
            
            <CustomInput 
                placeholder='Confirm your new password' 
                value={resetPassCN} 
                setValue={setResetPassCN} 
                securityTextEntry={true}
                textContentType='password'/>
           
           <CustomButton 
                onPress={onSubmitPressed}
                text='Submit'
                />
            
            <CustomButton 
                onPress={onBacktoSignInPressed}
                text='Back to Sign In'
                type='TERTIARY'
                />
            
           
        </View>
    
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00D1D1'
    },
    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        position: 'absolute',
        top: '10%'
    },
    logoWelcome: {
        width: 100,
        height: 100,
      
    },
    welcomeTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        color: 'white',
        paddingHorizontal: 25,
        marginVertical: 5
    },
    email: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        color: 'yellow'
    }
})

export default ResetPasswordNext
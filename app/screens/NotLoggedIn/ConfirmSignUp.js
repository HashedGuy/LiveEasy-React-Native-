import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ConfirmSignUp = () => {
    const [code, setCode] = useState('')
    

    const onSignInPressed = () => {
        console.warn('Creepy Sign In!')
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot password!')
    }


  return (
    <ImageBackground
    style={styles.background}
    >   
        <View style={styles.logoContainer}>
            
            <Text style={styles.welcomeTitle}>Add the code sent to your email</Text>
            
            <CustomInput 
                placeholder='Enter your confirmation code' 
                value={code} 
                setValue={setCode} 
                securityTextEntry={true}
                textContentType='password'/>
           
          
            <CustomButton 
                onPress={onSignInPressed}
                text='Confirm'
                />
            <CustomButton 
                onPress={onForgotPasswordPressed}
                text='Resend code?'
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
    link: {
        color: 'gold'
    }
})

export default ConfirmSignUp
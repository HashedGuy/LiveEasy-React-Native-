import { View, Text, StyleSheet, ImageBackground, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'

import { Auth } from 'aws-amplify'

const NavigatetoScreen = (props)=> {
    props.navigation.navigate('Sign Up')
}

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const onSignInPressed = async (data) => {
        try {const response = await Auth.signIn(data.username, data.password)
        console.log(response)}
        catch(e) {
            Alert.alert('Wrong password!', e.message)
        }
    }

    const onLogoPressed = () => {
        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('Reset Your Password')
    }

    const onNoAccountPressed = () => {
        navigation.navigate('Sign Up')
    }

  return (
    <ImageBackground
    style={styles.background}
    >   
        <View style={styles.logoContainer}>
            <View>
                <TouchableHighlight  onPress={onLogoPressed}>
                    <Image 
                    
                        resizeMode='contain'
                        style={styles.logoWelcome} 
                        source={require('../../assets/logoLE.png')}
                    />
                </TouchableHighlight>
            </View>
            <Text style={styles.welcomeTitle}>Welcome to Live Easy</Text>
            <CustomInput 
                placeholder='Email or username' 
                value={username} 
                setValue={setUsername} 
                securityTextEntry={false}
                textContentType='emailAddress'/>
            
            <CustomInput 
                placeholder='Password' 
                value={password} 
                setValue={setPassword} 
                securityTextEntry={true}
                textContentType='password'/>
          
            <CustomButton 
                onPress={onSignInPressed}
                text='Sign In'
                />
            <CustomButton 
                onPress={onForgotPasswordPressed}
                text='Forgot password?'
                type='TERTIARY'
                />
           
        </View>
       
            <CustomButton 
                    onPress={onNoAccountPressed}
                    text="Don't have an account? Sign up"
                    type='noAccount'
                    />
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
        width: 150,
        height: 150,
      
    },
    welcomeTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})

export default SignIn
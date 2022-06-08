import { View, Text, StyleSheet, ImageBackground, Image, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { auth } from '../../../firebase'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.navigate('Welcome User')
            }
        })
        return unsubscribe
    }, [])

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(`Signed In with: ${user.email}`)
            })
            .catch(e => alert(e.message))
    }
    const onSignInPressed = async (data) => {
        navigation.navigate('Home')
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
                placeholder='Email' 
                value={email} 
                setValue={setEmail} 
                securityTextEntry={false}
                textContentType='emailAddress'/>
            
            <CustomInput 
                placeholder='Password' 
                value={password} 
                setValue={setPassword} 
                securityTextEntry={true}
                textContentType='password'/>
          
            <CustomButton 
                onPress={handleSignIn}
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
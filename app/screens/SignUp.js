import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const navigation = useNavigation()

    const onRegisterPressed = () => {
        navigation.navigate('Confirm Your Email')
    }

    const onHaveAccount = () => {
        navigation.navigate('Sign In')
    }

    const onLogoPressed = () => {
        navigation.navigate('Home')
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
                        source={require('../assets/logoLE.png')}
                    />
                </TouchableHighlight>
            </View>
            <Text style={styles.welcomeTitle}>Create an account</Text>
            <CustomInput 
                placeholder='Username' 
                value={username} 
                setValue={setUsername} 
                securityTextEntry={false}
                textContentType='username'/>
            
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
            <CustomInput 
                placeholder='Confirm password' 
                value={passwordRepeat} 
                setValue={setPasswordRepeat} 
                securityTextEntry={true}
                textContentType='password'/>
          
            <CustomButton 
                onPress={onRegisterPressed}
                text='Register'
                />
            <Text style={styles.text}>
               <Text style={styles.link}>Terms of Use</Text> & <Text style={styles.link}>Privacy Policy</Text>
            </Text>
           
        </View>
        <CustomButton 
                onPress={onHaveAccount}
                text="Already have an account? Sign in"
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

export default SignUp
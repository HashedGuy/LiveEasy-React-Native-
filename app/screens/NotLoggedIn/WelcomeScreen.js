import React, {useEffect, useRef} from 'react'
import { Animated, ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import { auth } from '../../../firebase'
import { useThree } from '@react-three/fiber'

function WelcomeScreen(props) {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(()=> {
                navigation.replace('Sign In')
            })
            .catch(e=>alert(e.message))
    }

    const onLogoPressed = () => {
        navigation.navigate('Home')
    }

    const onReservePressed= () => {
        navigation.navigate('Sign In')
    }
    const translation = useRef(
        new Animated.Value(0)
    ).current

    useEffect(()=> {
        Animated.timing(translation, {
            toValue: 110,
            useNativeDriver: true,
        }).start()
    }, [])

  return (
      <>
    <ImageBackground
        style={styles.background}
    >   
        <View style={styles.logoContainer}>
            <Image 
                onPress={onLogoPressed}
                resizeMode='contain'
                style={styles.logoWelcome} 
                source={require('../../assets/logoLE.png')}
            />
            <Text style={styles.welcomeTitle}>The storage choice of international community in Beijing</Text>
            <TouchableOpacity onPress={onReservePressed}>
                <Animated.View  
                    
                    style={{
                            borderRadius: 50,
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            backgroundColor: '#FFFF5C',
                            marginTop: 10,
                            left:-200,
                            position: 'absolute',
                            transform: [{translateX: translation}]
                    }}>
                    <Text style={styles.reserveButtonText}>Reserve your unit</Text>
                </Animated.View>
              
            </TouchableOpacity>
            {/* <Button style={styles.loginButton} title='Log In'></Button> */}
           
        </View>
    
        <View style={styles.featureButton}>
            <Text style={styles.newFeature}>New! Freeze your pricing 🥶 </Text>
        </View>

    </ImageBackground>
    {/* <ImageBackground style={styles.background}/> */}
    </>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00D1D1'
    },
    featureButton: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: 70,
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: '10%',
        alignItems: 'center',
        position: 'absolute',
        top: '15%'
    },
    logoWelcome: {
        width: 200,
        height: 200,
      
    },
    welcomeTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginBottom : 20,
        textAlign: 'center'
    },

    newFeature: {
        color: '#7C73D9',
        fontSize: 20,
        marginTop: 10
    },
    reserveButtonText: {
        color: '#30599c',
        fontSize: 20,
    },
    loginButton: {
        marginTop: 100
    }
})

export default WelcomeScreen
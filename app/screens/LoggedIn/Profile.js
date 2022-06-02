import React, {useEffect, useRef} from 'react'
import { Animated, ImageBackground, StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import { auth } from '../../../firebase'
import { useThree } from '@react-three/fiber'

function ProfileScreen(props) {

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
        navigation.navigate('Welcome User')
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
         <View style={styles.signOut}>
         <TouchableHighlight  onPress={onLogoPressed}>
            <Image 
                   
                    resizeMode='contain'
                    style={styles.logoWelcome} 
                    source={require('../../assets/logoLE.png')}
                />
                </TouchableHighlight>
            
            <CustomButton 
                text='Sign Out'
                onPress={handleSignOut}
                type='TERTIARY'
            />
        </View>
        
        <View style={styles.logoContainer}>
            
            <View style={styles.profileInfoBox}>
                <Text style={styles.profileInfoText}>User: {auth.currentUser?.email}</Text>
                <Text style={styles.profileInfoText}>Name: </Text>
                <Text style={styles.profileInfoText}>Account created: </Text>
                <Text style={styles.profileInfoText}>Password: *****</Text>
            </View>
            <TouchableOpacity onPress={onReservePressed}>
                <CustomButton 
                    text={'Edit your profile'}
                    type='TERTIARY'
                />
              
            </TouchableOpacity>
            <View style={styles.rentInfo}>
                <Text style={styles.rentInfoText}>Rented storage</Text>
                <View style={styles.rentedContainer}>
                  
                    <ImageBackground
                      style={styles.rentedBox}
                      source={require('../../assets/boxes.jpeg')}
                      resizeMode='stretch'
                      borderRadius={10}
                      opacity={.6}
                    >
                        <Text style={styles.rentedInfoText}>Medium unit</Text>
                        <CustomButton type='MORE' text='Extend'/>
                        <Text style={styles.dueDate}>Due date: 2 Aug, 2022</Text>
                    </ImageBackground>
                
                    <ImageBackground
                      style={styles.rentedBox}
                      source={require('../../assets/d1.jpeg')}
                      resizeMode='stretch'
                      borderRadius={10}
                      opacity={.6}
                    >
                        <Text style={styles.rentedInfoText}>Add new</Text>
                        <CustomButton type='MORE' text='+'/>
                        {/* <Text style={styles.dueDate}>Discounts</Text> */}
                    </ImageBackground>
                </View>
            </View>

           
        </View>
       
        

    </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00D1D1'
    },
    logoContainer: {
        position: 'absolute',
        top: '10%',
        position: 'absolute',
        top: '15%', 
        marginVertical: 50,
        marginHorizontal: 20
    },
    logoWelcome: {
        width: 100,
        height: 100,
        marginLeft: 10
    },
    profileInfoBox: {
        alignItems: 'flex-start',
        width: '100%'
    },
    profileInfoText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5
    },
    rentInfo: {
        marginTop: 20,
        alignItems: 'flex-start',
        width: '100%'
    },
    rentInfoText: {
        fontSize: 25,
        color: '#30599c'
    },
    rentedInfoText: {
        color: 'white',
        backgroundColor: 'orange',
        fontSize: 20,
        padding: 3
    },
    signOut: {
        position: 'absolute',
        top: 50,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    rentedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },  
    rentedBox: {
        width: 160,
        height: 250,
        marginVertical: 30,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1
    },
    dueDate: {
        color: 'white',
        fontSize: 12,
        marginTop: 20,
        fontWeight: 'bold',
        backgroundColor: 'red',
        padding: 2
    },
    bgImgRentBox: {
        backgroundSize: 'cover'
    }
})

export default ProfileScreen
import React from 'react'
import { ImageBackground, View, Image, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FontListo from 'react-native-vector-icons/Fontisto'
import styles from './styles.js'
import Unit from '../../components/Units/index.js'

function WelcomeScreen(props) {

    const navigation = useNavigation()

    const onLogoPressed = () => {
        navigation.navigate('Home')
    }

    const onExplorePressed = () => {
        navigation.navigate('Sign In')
    }

  return (
      <>
    <ImageBackground
        style={styles.background}
    >   
            <TouchableOpacity 
                    style={styles.searchBtn}
                >
                    <Text style={styles.searchBtnText}><FontListo name='search' size={14} color='orange'/>  Where do you want to store?</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image 
                    onPress={onLogoPressed}
                    resizeMode='contain'
                    style={styles.logoWelcome} 
                    source={require('../../assets/logoLE.png')}
                />
                <Text style={styles.welcomeTitle}>The storage choice of international community in Beijing</Text>
            </View>
            
             <View style={styles.exploreContainer}>
           
            
                <TouchableOpacity 
                    style={styles.exploreBtn}
                    onPress={onExplorePressed}
                >
                    <Text style={styles.exploreBtnText}>Explore nearby storages</Text>
                </TouchableOpacity>
                <Unit 
                    station = 'Wudakou'
                    description = 'Find affordable storage units at a U-Haul near you. Select from thousands of available self-storage facilities and units across the US and Canada.'
                    uri = 'https://images.unsplash.com/photo-1638847868668-a05a2f69622f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                    oldPrice = {223}
                    newPrice = {186}
                />
              
         
           
        </View>
    
        {/* <View style={styles.featureButton}>
            <Text style={styles.newFeature}>New! Freeze your pricing 🥶 </Text>
        </View> */}

    </ImageBackground>
    </>
  )
}

export default WelcomeScreen
import React from 'react'
import { ImageBackground, View, Image, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FontListo from 'react-native-vector-icons/Fontisto'
import Entype from 'react-native-vector-icons/Entypo'
import styles from './styles.js'
import Unit from '../../components/Units/index.js'
import unitsData from '../../data/unitsData'

function WelcomeScreen(props) {

    const navigation = useNavigation()

    const onLogoPressed = () => {
        navigation.navigate('Home')
    }

    const onLoginPressed = () => {
        navigation.navigate('Sign In')
    }

    const handleExploreNearbyUnits = () => {
        navigation.navigate('Units List')
    }

    const handleUnitSearch = () => {
        navigation.navigate('Unit Search')
    }

    const {name, description, oldPrice, newPrice, uri} = unitsData[0]

  return (
      <>
    <ImageBackground
        style={styles.background}
    >   
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginPressed}>
                <Text style={styles.loginBtntext}><Entype name='login' color='white' size={20}/></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchBtn} onPress={handleUnitSearch}>
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
                    onPress={handleExploreNearbyUnits}
                >
                    <Text style={styles.exploreBtnText}>Explore nearby units</Text>
                </TouchableOpacity>
                <Unit 
                    station = {name}
                    description = {description}
                    uri = {uri}
                    oldPrice = {oldPrice}
                    newPrice = {newPrice}
                />
              
         
           
        </View>

    </ImageBackground>
    </>
  )
}

export default WelcomeScreen
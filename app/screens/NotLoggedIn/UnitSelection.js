import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Category from '../../components/UnitCategory/Category'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const UnitSelection = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('Unit Search')
  }

  const handleChoose = () => {
    navigation.navigate('Units List')
  }
  return (
    <ImageBackground style={styles.background}>   
      <View style={styles.unitSelection}>
       
        <Category
          unitName='Small'
          unitDesc='Contains max. six (4cm x 4cm) boxes'
        />
        <Category
          unitName='Medium'
          unitDesc='Contains max. six (4cm x 4cm) boxes'
        />
        <Category
          unitName='Large'
          unitDesc='Contains max. six (4cm x 4cm) boxes'
        />
        <Category
          unitName='Xtra-Large'
          unitDesc='Contains max. six (4cm x 4cm) boxes'
        />
        <TouchableOpacity style={styles.chooseBtn} onPress={handleChoose}>
          <Text style={styles.chooseBtnText}>Search</Text>
        </TouchableOpacity>

        <Pressable>
          <Text style={styles.unitInfoText}>More info about unit sizes</Text>
        </Pressable>
      </View>
    
    </ImageBackground>
  )
}

export default UnitSelection
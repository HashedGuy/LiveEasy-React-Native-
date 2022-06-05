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
  return (
    <ImageBackground style={styles.background}>   
      <View style={styles.unitSelection}>
        <View style={styles.chosenLocationTitle}>
          <Entypo onPress={handleBack} name='chevron-left' size={25} color='#e5e4e2' style={{marginRight: 95}}/>
          <Text style={styles.chosenLocationText}>Wudakou</Text>
        </View>
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
        <TouchableOpacity style={styles.chooseBtn}>
          <Text style={styles.chooseBtnText}>Choose</Text>
        </TouchableOpacity>
      </View>
    
    </ImageBackground>
  )
}

export default UnitSelection
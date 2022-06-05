import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Category from '../../components/UnitCategory/Category'

const UnitSelection = () => {
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
      </View>
    </ImageBackground>
  )
}

export default UnitSelection
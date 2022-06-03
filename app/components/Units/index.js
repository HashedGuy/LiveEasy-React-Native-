import styles from './styles'
import {View, Image, Text} from 'react-native'
import React from 'react'

function Unit(props) {
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={{uri: props.uri}}/>
       <Text style={styles.station}>{props.station}</Text>
       <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
       <Text style={styles.prices}>
           <Text style={styles.oldPrice}>{props.oldPrice}¥</Text>
           <Text style={styles.newPrice}>  {props.newPrice}¥ per month</Text>
       </Text>
    </View>
  )
}

export default Unit


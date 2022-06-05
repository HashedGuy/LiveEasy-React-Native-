import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'

const Category = (props) => {
    const [unitCount, setUnitCount] = useState(0)

    const increamentCount = () => {
        setUnitCount(Math.min(unitCount + 1, 10))
    }

    const decrementCount = () => {
        setUnitCount(Math.max(0, unitCount - 1))
    }
  return (
    <View style={styles.unitRow}>
        <View>
            <Text style={styles.unitName}>{props.unitName} unit</Text>
            <Text style={styles.unitDesc}>{props.unitDesc}</Text>
        </View>
        <View style={styles.controllers}>
            <Pressable style={styles.minusPlusBtn} onPress={decrementCount}><Text style={styles.minusPlusText}>-</Text></Pressable>
            <Text style={styles.controllerText}>{unitCount}</Text>
            <Pressable style={styles.minusPlusBtn} onPress={increamentCount}><Text style={styles.minusPlusText}>+</Text></Pressable>
        </View>
  </View>
  )
}

export default Category
import { View, TextInput, ImageBackground, FlatList, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import unitsData from '../../data/unitsData'
import Entypo from 'react-native-vector-icons/Entypo'

const UnitSearch = () => {

    const [inputText, setInputText] = useState('')

  return (
    <ImageBackground
        style={styles.background}
    >   
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.textInput}
            placeholder={'Enter the closest subway station'}
            value={inputText}
            onChangeText={setInputText}
        />
        <FlatList
            keyExtractor={(item)=>item.id}
            data={unitsData}
            renderItem={({item}) => (
                <View style={styles.searchResultBox}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin' size={25} color='yellow'></Entypo>
                    </View>
                    <Text style={styles.locationText}>{item.name}</Text>
                </View>
            )}
        />
        </View>
    </ImageBackground>
  )
}

export default UnitSearch
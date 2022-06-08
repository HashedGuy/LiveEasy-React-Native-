import { View, TextInput, ImageBackground, FlatList, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import unitsData from '../../data/unitsData'
import Entypo from 'react-native-vector-icons/Entypo'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const UnitSearch = () => {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()

    const handleUnitSelection=() => {
        navigation.navigate('Unit Selection')
    }

    const handleCancelSearch=() => {
        navigation.navigate('Home')
    }

  return (
    <ImageBackground
        style={styles.background}
    >   
        <View style={styles.searchContainer}>
            <View style={styles.enterStationInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter the closest subway station'}
                    value={inputText}
                    onChangeText={setInputText}
                />
                <Pressable onPress={handleCancelSearch} style={styles.cancelXBtn}><Text style={styles.cancelXText}>X</Text></Pressable>
            </View>
       
        <FlatList
            keyExtractor={(item)=>item.id}
            data={unitsData}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.searchResultBox} onPress={handleUnitSelection}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin' size={25} color='white'></Entypo>
                    </View>
                    <Text style={styles.locationText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
        </View>
    </ImageBackground>
  )
}

export default UnitSearch
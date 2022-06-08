import { Text, View, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import Unit from '../../components/Units'
import unitsData from '../../data/unitsData'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

function UnitsList() {
    
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.navigate('Home')
      }
     return (
    <ImageBackground style={styles.background}>  
  
        <View style={styles.unitsContainer}>
            <FlatList
                numColumns={1}
                key={'_'}
                data={unitsData}
                renderItem={({item})=>(
                    <Unit 
                        keyExtractor={(item) => item.id}
                        station={item.name}
                        description={item.description}
                        uri={item.uri}
                        oldPrice={item.oldPrice}
                        newPrice={item.newPrice}
                    />
                )}
            />
       </View>
      </ImageBackground>
    )
  }


export default UnitsList
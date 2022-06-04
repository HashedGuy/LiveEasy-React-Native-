import { Text, View, ImageBackground, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Unit from '../../components/Units'
import unitsData from '../../data/unitsData'

function UnitsList() {
     return (
    <ImageBackground style={styles.background}>  
        <View>
            <Text style={styles.exploreTitle}>Explore available storage units</Text>
        </View>
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
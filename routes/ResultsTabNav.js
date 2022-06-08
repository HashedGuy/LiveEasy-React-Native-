import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import UnitsList from '../app/screens/NotLoggedIn/UnitsList'

const Tab = createMaterialTopTabNavigator()

const ResultsTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{
        activeTintColor: 'purple',
        tabBarIndicatorStyle: {
            backgroundColor: 'purple'
        }
    }}>
        <Tab.Screen
            name={'list'}
            component={UnitsList}
        />
        <Tab.Screen
            name={'map '}
            component={UnitsList}
        />
    </Tab.Navigator>    
  )
}

export default ResultsTabNav
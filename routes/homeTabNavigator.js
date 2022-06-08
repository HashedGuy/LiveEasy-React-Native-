import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../app/screens/NotLoggedIn/WelcomeScreen'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignIn from '../app/screens/NotLoggedIn/SignIn'
import UnitsList from '../app/screens/NotLoggedIn/UnitsList'

const Tab = createBottomTabNavigator()

function HomeTabNavigator() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen 
            name='Explore'
            component={WelcomeScreen}
            options={{
                headerShown: false,
                tabBarIcon:({color}) => (
                    <Fontisto name='search' size={25} color={color}/>)
                  
            }}
        />
         <Tab.Screen 
            name='Units'
            component={UnitsList}
            options={{
                headerShown: false,
                tabBarIcon:({color}) => (
                    <FontAwesome name='home' size={25} color={color}/>)
                
            }}
        />
         <Tab.Screen 
            name='Messages'
            component={SignIn}
            options={{
                headerShown: false,
                tabBarBadge: 1,
                tabBarIcon:({color}) => (
                    <Entypo name='message' size={25} color={color}/>)
                
            }}
        />
         <Tab.Screen 
            name='Login'
            component={SignIn}
            options={{
                headerShown: false,
                tabBarIcon:({color}) => (
                    <Entypo name='login' size={25} color={color}/>)
                
            }}
         />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator
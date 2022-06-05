import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from "../app/screens/NotLoggedIn/WelcomeScreen"
import SignIn from '../app/screens/NotLoggedIn/SignIn'
import SignUp from '../app/screens/NotLoggedIn/SignUp'
import ConfirmSignUp from '../app/screens/NotLoggedIn/ConfirmSignUp'
import ResetPassword from '../app/screens/NotLoggedIn/ResetPassword'
import ResetPasswordNext from '../app/screens/NotLoggedIn/ResetPasswordNext'
import WelcomeUserScreen from '../app/screens/LoggedIn/welcomeUser'
import ProfileScreen from '../app/screens/LoggedIn/Profile'
import UnitsList from '../app/screens/NotLoggedIn/UnitsList'
import UnitSearch from '../app/screens/NotLoggedIn/unitSearch'
import UnitSelection from '../app/screens/NotLoggedIn/UnitSelection'


const Stack = createNativeStackNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={WelcomeScreen} />
        <Stack.Screen name='Sign In' component={SignIn} />
        <Stack.Screen name='Sign Up' component={SignUp} />
        <Stack.Screen name='Confirm Your Email' component={ConfirmSignUp} />
        <Stack.Screen name='Reset Your Password' component={ResetPassword} />
        <Stack.Screen name='Reset Password' component={ResetPasswordNext} />
        <Stack.Screen name='Welcome User' component={WelcomeUserScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Units List' component={UnitsList} />
        <Stack.Screen name='Unit Search' component={UnitSearch} />
        <Stack.Screen name='Unit Selection' component={UnitSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from "../app/screens/WelcomeScreen"
import SignIn from '../app/screens/SignIn'
import SignUp from '../app/screens/SignUp'
import ConfirmSignUp from '../app/screens/ConfirmSignUp'
import ResetPassword from '../app/screens/ResetPassword'
import ResetPasswordNext from '../app/screens/ResetPasswordNext'


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


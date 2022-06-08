import React from 'react';
import {Navigator} from "./routes/homeStack";
import {StatusBar} from 'react-native'
import 'react-native-gesture-handler'



const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <Navigator/>
    </>
  )
}

export default App
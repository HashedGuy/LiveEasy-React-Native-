import React from 'react';
import {Navigator} from "./routes/homeStack";
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config)

const App = () => {
  return (
    <Navigator/>
  )
}

export default App
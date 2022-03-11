import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicSideMenu} from './src/navigator/BasicSideMenu';
import { SideMenu } from './src/navigator/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicSideMenu /> */}
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;

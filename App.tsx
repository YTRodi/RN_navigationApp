import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigator';
import {BasicSideMenu} from './src/navigator/BasicSideMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BasicSideMenu />
    </NavigationContainer>
  );
};

export default App;

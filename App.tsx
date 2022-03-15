import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicSideMenu} from './src/navigator/BasicSideMenu';
import { SideMenu } from './src/navigator/SideMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicSideMenu /> */}
        <SideMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;

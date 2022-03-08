import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>App screen</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

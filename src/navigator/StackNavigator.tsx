import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOneScreen from '../screens/PageOneScreen';
import PageTwoScreen from '../screens/PageTwoScreen';
import PageThreeScreen from '../screens/PageThreeScreen';

// https://reactnavigation.org/docs/typescript/
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    // initialRouteName='PageTwoScreen'
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
      cardStyle: {
        backgroundColor: 'white',
      },
    }}>
    <Stack.Screen
      name="PageOneScreen"
      options={{title: 'Página 1'}}
      component={PageOneScreen}
    />
    <Stack.Screen
      name="PageTwoScreen"
      options={{title: 'Página 2', headerBackTitle: 'lala'}}
      component={PageTwoScreen}
    />
    <Stack.Screen
      name="PageThreeScreen"
      options={{title: 'Página 3'}}
      component={PageThreeScreen}
    />
  </Stack.Navigator>
);

export default StackNavigator;

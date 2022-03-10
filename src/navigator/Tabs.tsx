/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';

import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { isIOS } from '../helpers/platform';
import { colors } from '../theme/appTheme';

interface ScreenOptionsProps {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}
interface TabBarIconProps {
  focused: boolean;
  color: string;
  size?: number;
}

const TabBarIcon = ({ route, color }: ScreenOptionsProps & TabBarIconProps) => {
  const iconName = {
    Tab1Screen: 'T1',
    Tab2Screen: 'T2',
    StackNavigator: 'ST',
  }[route.name];

  return <Text style={{ color }}>{iconName}</Text>;
};

const screenOptions = (screenOptionProps: ScreenOptionsProps) => ({
  tabBarIcon: (tabBarIconProps: TabBarIconProps) => (
    <TabBarIcon {...screenOptionProps} {...tabBarIconProps} />
  ),
});

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={screenOptions}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" component={Tab2Screen} />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={screenOptions}
    >
      <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" component={Tab2Screen} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};

export const Tabs = () => (isIOS ? <TabsIOS /> : <TabsAndroid />);

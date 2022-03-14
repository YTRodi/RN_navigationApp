/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { TopTapNavigator } from './TopTapNavigator';
import { StackNavigator } from './StackNavigator';
import { isAndroid, isIOS } from '../helpers/platform';
import { colors } from '../theme/appTheme';

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
  color: string;
}

const TabBarIcon = ({ routeName, focused, color }: TabBarIconProps) => {
  const defaultSize = 20;
  const iconName = getIconNameByRouteName(routeName);

  if (isAndroid) {
    return <Icon name={iconName} size={defaultSize} color={color} />;
  }

  return (
    <Icon
      name={iconName}
      size={defaultSize}
      color={focused ? colors.primary : color}
    />
  );
};

const getIconNameByRouteName = (routeName: string) => {
  return {
    Tab1Screen: 'attach-outline',
    TopTapNavigator: 'basketball-outline',
    StackNavigator: 'bookmarks-outline',
  }[routeName]!;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarIcon: props => {
          return <TabBarIcon routeName={route.name} {...props} />;
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{ tabBarBadge: '+99' }}
      />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        component={TopTapNavigator}
      />
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
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ color, focused }) => {
          return (
            <Text style={{ color: focused ? colors.primary : color }}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: props => {
          return <TabBarIcon routeName={route.name} {...props} />;
        },
      })}
    >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{ tabBarBadge: '+99' }}
      />
      <BottomTabIOS.Screen name="TopTapNavigator" component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};

export const Tabs = () => (isIOS ? <TabsIOS /> : <TabsAndroid />);

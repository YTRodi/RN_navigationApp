import React from 'react';
import { LogBox, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          paddingTop: top,
          elevation: 0, // remove shadows in android
          shadowColor: 'transparent', // remove shadows in ios
        },
        tabBarShowIcon: true,
        tabBarIcon: ({ color }) => {
          const iconName = {
            ChatScreen: 'CH',
            ContactsScreen: 'CO',
            AlbumsScreen: 'AL',
          }[route.name];

          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ title: 'Chat' }}
      />
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{ title: 'Contacts' }}
      />
      <Tab.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{ title: 'Albums' }}
      />
    </Tab.Navigator>
  );
};

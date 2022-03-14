import React from 'react';
import { LogBox, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
        tabBarLabel: ({ color, focused }) => {
          const routeName = {
            ChatScreen: 'Chat',
            ContactsScreen: 'Contacts',
            AlbumsScreen: 'Albums',
          }[route.name]!;

          return (
            <Text style={{ color: focused ? colors.primary : color }}>
              {routeName}
            </Text>
          );
        },
        tabBarShowIcon: true,
        tabBarIcon: ({ focused, color }) => {
          const iconName = {
            ChatScreen: 'chatbox-ellipses-outline',
            ContactsScreen: 'people-outline',
            AlbumsScreen: 'albums-outline',
          }[route.name]!;

          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? colors.primary : color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

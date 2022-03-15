import React from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
  const { signIn, authState } = useContext(AuthContext);
  const { isLoggedIn } = authState;

  return (
    <View>
      <Text>ContactsScreen</Text>

      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};

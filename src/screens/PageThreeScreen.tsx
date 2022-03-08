import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const PageThreeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.title}>PageThreeScreen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default PageThreeScreen;

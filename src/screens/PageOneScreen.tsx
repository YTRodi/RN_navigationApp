import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const PageOneScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageOneScreen</Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />

      <Text>Navegar con argumentos</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            nombre: 'Pedro',
          })
        }>
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageOneScreen;

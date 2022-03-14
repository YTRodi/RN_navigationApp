/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<RootStackParams, 'PageOneScreen'> {}
interface Props extends DrawerScreenProps<RootStackParams, 'PageOneScreen'> {}

const PageOneScreen = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.globalMargin}>
      <Text style={styles.title}>PageOneScreen</Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />

      <Text style={{ marginVertical: 20, fontSize: 20 }}>
        Navegar con argumentos
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#5856D6' }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }
        >
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#FF9427' }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }
        >
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PageOneScreen;

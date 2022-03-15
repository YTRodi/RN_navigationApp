/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParams } from '../navigator/StackNavigator';
import { colors, styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<RootStackParams, 'PageOneScreen'> {}
interface Props extends DrawerScreenProps<RootStackParams, 'PageOneScreen'> {}

const PageOneScreen = ({ navigation }: Props) => {
  const items = useMemo(
    () => [
      {
        screen: 'PersonScreen',
        params: { id: 1, nombre: 'Pedro' },
        iconName: 'body-outline',
        backgroundColor: '#5856D6',
      },
      {
        screen: 'PersonScreen',
        params: { id: 2, nombre: 'Maria' },
        iconName: 'woman-outline',
        backgroundColor: '#FF9427',
      },
    ],
    [],
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="menu-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
        {items.map(item => (
          <TouchableOpacity
            key={item.screen}
            style={{
              ...styles.bigButton,
              backgroundColor: item.backgroundColor,
            }}
            onPress={() => navigation.navigate(item.screen as any, item.params)}
          >
            <Icon name={item.iconName} size={35} color="white" />
            <Text style={styles.bigButtonText}>{item.params.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PageOneScreen;

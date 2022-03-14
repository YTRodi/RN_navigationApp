import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      {/* https://ionic.io/ionicons */}
      <Icon name="airplane-outline" size={80} color="#900" />
    </View>
  );
};

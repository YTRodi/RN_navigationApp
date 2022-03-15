import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ ...styles.globalMargin, paddingTop: top }}>
      <Text style={styles.title}>Iconos</Text>

      {/* https://ionic.io/ionicons */}
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="attach-outline" />
      <TouchableIcon iconName="bonfire-outline" />
      <TouchableIcon iconName="calculator-outline" />
      <TouchableIcon iconName="chatbubble-ellipses-outline" />
      <TouchableIcon iconName="images-outline" />
      <TouchableIcon iconName="leaf-outline" />
    </ScrollView>
  );
};

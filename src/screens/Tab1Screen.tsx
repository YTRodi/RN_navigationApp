import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ ...styles.globalMargin, paddingTop: top }}>
      <Text style={styles.title}>Iconos</Text>

      {/* https://ionic.io/ionicons */}
      <Icon name="airplane-outline" size={80} color={colors.primary} />
      <Icon name="attach-outline" size={80} color={colors.primary} />
      <Icon name="bonfire-outline" size={80} color={colors.primary} />
      <Icon name="calculator-outline" size={80} color={colors.primary} />
      <Icon
        name="chatbubble-ellipses-outline"
        size={80}
        color={colors.primary}
      />
      <Icon name="images-outline" size={80} color={colors.primary} />
      <Icon name="leaf-outline" size={80} color={colors.primary} />
    </ScrollView>
  );
};

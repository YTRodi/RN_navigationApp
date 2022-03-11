import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  // Use this instead of <SafeAreaView>...</SafeAreaView>
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        ...styles.globalMargin,

        // insets.top incluye el espacio que ocupa el notch (ios)
        paddingTop: insets.top,
        // marginTop: insets.top + 20,
      }}
    >
      <Text style={styles.title}>SettingsScreen</Text>
    </ScrollView>
  );
};

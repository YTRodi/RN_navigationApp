import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  // Use this instead of <SafeAreaView>...</SafeAreaView>
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);
  const { favoriteIcon } = authState;

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
      <Text>{JSON.stringify(authState, null, 2)}</Text>
      {favoriteIcon && (
        <Icon name={favoriteIcon} size={80} color={colors.primary} />
      )}
    </ScrollView>
  );
};

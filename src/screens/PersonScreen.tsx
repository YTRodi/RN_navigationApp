import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

const PersonScreen = ({ route, navigation }: Props) => {
  const params = route.params;
  const { changeUsername } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({ title: params.nombre });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};

export default PersonScreen;

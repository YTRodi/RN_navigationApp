import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';

const PageTwoScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atrás',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageTwoScreen</Text>

      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('PageThreeScreen')}
      />
    </View>
  );
};

export default PageTwoScreen;

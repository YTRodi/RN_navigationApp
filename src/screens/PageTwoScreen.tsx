import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const PageTwoScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>PageTwoScreen</Text>

      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('PageThreeScreen')}
      />
    </View>
  );
};

export default PageTwoScreen;

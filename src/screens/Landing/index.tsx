import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppParamList } from '../../navigations';
import styles from './styles';

const LandingScreen: FC<StackScreenProps<AppParamList, 'landing'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('placeOrder')}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Landing = LandingScreen;
export default LandingScreen;

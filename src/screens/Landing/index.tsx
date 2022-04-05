import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import { AppParamList } from '../../navigations';

const LandingScreen: FC<StackScreenProps<AppParamList, 'landing'>> = ({
  navigation,
}) => {
  const tailwind = useTailwind();

  return (
    <Screen center style={tailwind('p-4')}>
      <Button
        size="lg"
        wrapperClassname="mb-5"
        onPress={() => navigation.navigate('placeOrder')}>
        <Text style={tailwind('uppercase text-center p-5')}>Place Order</Text>
      </Button>

      <Button
        size="lg"
        wrapperClassname="mb-5"
        onPress={() => navigation.navigate('viewOrders')}>
        <Text style={tailwind('uppercase text-center p-5')}>View Orders</Text>
      </Button>
    </Screen>
  );
};

export const Landing = LandingScreen;
export default LandingScreen;

import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTailwind } from 'tailwind-rn';
import { AppParamList } from '../../navigations';

const LandingScreen: FC<StackScreenProps<AppParamList, 'landing'>> = ({
  navigation,
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex flex-1 justify-center p-3')}>
      <TouchableOpacity
        style={tailwind('mb-5 bg-primary rounded-md')}
        onPress={() => navigation.navigate('placeOrder')}>
        <Text style={tailwind('uppercase text-center p-5')}>Place Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tailwind('mb-5 bg-primary rounded-md')}
        onPress={() => navigation.navigate('viewOrders')}>
        <Text style={tailwind('uppercase text-center p-5')}>View Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Landing = LandingScreen;
export default LandingScreen;

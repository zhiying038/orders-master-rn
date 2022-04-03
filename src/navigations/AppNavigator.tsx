import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlaceOrderScreen from '../screens/PlaceOrder';

export type AppParamList = {
  placeOrder: undefined;
};

const Stack = createStackNavigator<AppParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="placeOrder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

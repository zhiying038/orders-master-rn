import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Landing, PlaceOrder } from '../screens';

export type AppParamList = {
  landing: undefined;
  placeOrder: undefined;
};

const Stack = createStackNavigator<AppParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="landing" component={Landing} />
      <Stack.Screen name="placeOrder" component={PlaceOrder} />
    </Stack.Navigator>
  );
};

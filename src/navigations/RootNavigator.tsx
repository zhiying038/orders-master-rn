import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppNavigator } from './AppNavigator';

export type RootParamList = {
  appStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="appStack"
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen
        name="appStack"
        options={{ headerShown: false }}
        component={AppNavigator}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = props => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer {...props} ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

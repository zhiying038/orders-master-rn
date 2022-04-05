import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppParamList } from '../../navigations';

const ViewOrdersScreen: FC<
  StackScreenProps<AppParamList, 'viewOrders'>
> = () => {
  return (
    <SafeAreaView>
      <Text>View Orders</Text>
    </SafeAreaView>
  );
};

export const ViewOrders = ViewOrdersScreen;
export default ViewOrdersScreen;

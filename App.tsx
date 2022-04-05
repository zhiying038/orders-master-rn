/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import FlashMessage from 'react-native-flash-message';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigations';

const App = () => {
  const isAndroid = Platform.OS === 'android';

  const client = new ApolloClient({
    uri: isAndroid ? 'http://192.168.68.112:3000/graphql' : Config.GRAPHQL_URI,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
        <FlashMessage position="top" titleStyle={styles.message} />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
  },
});

export default App;

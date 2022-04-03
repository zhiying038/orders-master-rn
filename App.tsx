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
import Config from 'react-native-config';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigations';

const App = () => {
  const client = new ApolloClient({
    uri: Config.GRAPHQL_URI,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import useCachedResources from './hooks/useCachedResources';
import getThemeControls from './hooks/getThemeControls';

import LinkingConfiguration from './navigation/LinkingConfiguration';
import AppNavigator from './navigation/AppNavigator';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { ThemeContext } from './contexts/ThemeContext';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [ theme, setTheme ] = getThemeControls();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <ActionSheetProvider>
            <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
              {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
              <NavigationContainer linking={LinkingConfiguration}>
                <AppNavigator />
              </NavigationContainer>
            </SafeAreaView>
          </ActionSheetProvider>
        </ThemeContext.Provider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

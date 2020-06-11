import * as React from 'react';
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext, themes } from '../contexts/ThemeContext';

import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import TicTacToe from './components/games/TicTacToe';

import Layout from '../constants/Layout';
const screenWidth = Layout.window.width;

export default function JestGameScreen({ route, navigation }) {
  return (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) =>
    <View
      style={styles.container}
    >
    <StatusBar barStyle="light-content" />
      <View style={[styles.card, { backgroundColor: route.params.color }]}>
      <View style={styles.cardContent}>
        <TicTacToe navigation={navigation} />
      </View>
      </View>
    </View>}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.dark.background,
    padding: 10
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 20
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  }
});

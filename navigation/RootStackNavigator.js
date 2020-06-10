import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  useHeaderHeight,
} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext, themes } from '../contexts/ThemeContext';

import TabBarIcon from './components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HoroscopeScreen from '../screens/HoroscopeScreen';
import JestGameScreen from '../screens/JestGameScreen';
import JestQuizScreen from '../screens/JestQuizScreen';
import MatchProfileScreen from '../screens/MatchProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatsListScreen from '../screens/ChatsListScreen';
import ChatScreen from '../screens/ChatScreen';

import Layout from '../constants/Layout';

const screenWidth = Layout.window.width;

const Stack = createStackNavigator();

const BottomTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'Jests';

const CustomHeaderTitle = ({ navigation, route }) => {
  return (
    <TextInput
      placeholder="Search"
      maxLength={40}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth / 1.8,
        height: 45,
        backgroundColor: '#eee',
        borderRadius: 100,
        textAlign: 'center',
      }}
    />
  );
};

const BottomTabNavigator = ({ navigation, route }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: useHeaderHeight(),
      }}
    >
      <BottomTab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarPosition="bottom"
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          showIcon: true,
          style: {},
        }}
      >
        <BottomTab.Screen
          name="Jests"
          component={HomeScreen}
          options={{
            title: 'Jests',
            tabBarIcon: ({ focused }) => (
              <View style={{ width: 24, height: 24, margin: 5 }}>
                {
                  <View
                    style={{
                      // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                      position: 'absolute',
                      right: -6,
                      top: -3,
                      backgroundColor: 'red',
                      borderRadius: 6,
                      width: 12,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}
                    />
                  </View>
                }
                <TabBarIcon focused={focused} name="md-code-working" />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Chats"
          component={ChatsListScreen}
          options={{
            title: 'Chats',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-book" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

export default function RootStackNavigator() {
  const [modalVisible, setModalVisible] = useState(false);

  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
    overlayStyle: {
      backgroundColor: '#000'
    }
  });

  const config = {
    animation: 'timing',
    config: {
      duration: 100,
    },
  };

  const config2 = {
    animation: 'timing',
    config: {
      duration: 180,
    },
  };

  return (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) =>
    <>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}
        >
          <View style={{ padding: 50, backgroundColor: '#fff' }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            headerStyle: { height: 80 },
            headerTitle: () => (
              <CustomHeaderTitle navigation={navigation} route={route} />
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={[styles.headerButton]}
                onPress={() => navigation.navigate('Profile')}
              >
                <TabBarIcon size={25} name="md-person" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={[styles.headerButton]}
                onPress={() => setModalVisible(true)}
              >
                <TabBarIcon size={25} name="md-person-add" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            gestureEnabled: false,
            transitionSpec: {
              open: config2,
              close: config2,
            },
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.goBack()}
              >
                <TabBarIcon size={25} name="ios-arrow-down" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.push('Settings')}
              >
                <TabBarIcon size={25} name="md-settings" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.goBack()}
              >
                <TabBarIcon size={25} name="ios-arrow-back" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => Alert.alert('tbd')}
              >
                <TabBarIcon size={25} name="ios-more" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="MatchProfile"
          component={MatchProfileScreen}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            gestureEnabled: false,
            transitionSpec: {
              open: config,
              close: config,
            },
            cardStyleInterpolator: forFade,
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.goBack()}
              >
                <TabBarIcon name="ios-close" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="JestGame"
          component={JestGameScreen}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            transitionSpec: {
              open: config2,
              close: config2,
            },
            cardStyleInterpolator: forFade,
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.goBack()}
              >
                <TabBarIcon name="ios-close" />
              </TouchableOpacity>
            ),
          })}
        />
          <Stack.Screen
              name="JestQuiz"
              component={JestQuizScreen}
              options={({ navigation, route }) => ({
                  headerTransparent: true,
                  transitionSpec: {
                      open: config,
                      close: config,
                  },
                  cardStyleInterpolator: forFade,
                  headerStyle: { height: 80 },
                  headerTitle: () => null,
                  headerLeft: () => (
                      <TouchableOpacity
                          style={[
                              styles.headerButton,
                              { backgroundColor: 'transparent' },
                          ]}
                          onPress={() => {
                            setTheme(themes.default);
                            navigation.goBack();
                          }}
                      >
                          <TabBarIcon name="ios-close" />
                      </TouchableOpacity>
                  ),
              })}
          />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ navigation, route }) => ({
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => navigation.goBack()}
              >
                <TabBarIcon size={25} name="ios-arrow-back" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => {}}
              >
                <TabBarIcon size={25} name="ios-more" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Horoscope"
          component={HoroscopeScreen}
          options={({ navigation, route }) => ({
            headerTransparent: true,
            transitionSpec: {
              open: config2,
              close: config2,
            },
            cardStyleInterpolator: forFade,
            headerStyle: { height: 80 },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity
                style={[
                  styles.headerButton,
                  { backgroundColor: 'transparent' },
                ]}
                onPress={() => {
                  setTheme(themes.default);
                  navigation.goBack();
                }}
              >
                <TabBarIcon name="ios-close" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
      </>
    }</ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: '#eee',
    borderRadius: 25,
    width: screenWidth / 8,
    height: screenWidth / 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: screenWidth / 20,
  },
});

import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabBarIcon from './components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Layout from '../constants/Layout';

const screenWidth = Layout.window.width;

const Stack = createStackNavigator();

const BottomTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const CustomHeaderTitle = ({ navigation, route }) => {
  return (
          <TextInput
              editable
              maxLength={40}
              style={{justifyContent: 'center',
                  alignItems: 'center',
                  width: screenWidth / 1.8,
                  height: 45,
                  paddingHorizontal: 50,
                  backgroundColor: '#eee',
                  borderRadius: 100}}
          />
  );
};

const BottomTabNavigator = ({ navigation, route }) => {
  return (
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
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation, route }) => ({
          headerStyle: { height: 60 },
          headerTitle: () =>
            <CustomHeaderTitle navigation={navigation} route={route} />,
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
              onPress={() => alert('This is the invite!')}
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
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerStyle: { height: 60 },
          headerTitle: () =>
            <CustomHeaderTitle navigation={navigation} route={route} />,
          headerLeft: () => (
            <TouchableOpacity
              style={[styles.headerButton]}
              onPress={() => navigation.goBack()}
            >
              <TabBarIcon size={25} name="md-person" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={[styles.headerButton]}
              onPress={() => alert('This is the invite!')}
            >
              <TabBarIcon size={25} name="md-settings" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: '#eee',
    borderRadius: 25,
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: screenWidth / 20,
  },
});

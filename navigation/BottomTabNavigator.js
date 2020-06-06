import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabBarIcon from './components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();

const JestsStack = () => (
    <Stack1.Navigator>
        <Stack1.Screen name="Home" component={HomeScreen} />
    </Stack1.Navigator>
    );

const ChatsStack = () => (
    <Stack2.Navigator>
        <Stack2.Screen name="Chats" component={LinksScreen} />
    </Stack2.Navigator>
);

const BottomTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarPosition="bottom"
        tabBarOptions={{
            labelStyle: { fontSize: 12 },
            showIcon: true,
            style: { },
        }}
    >
      <BottomTab.Screen
        name="Jests"
        component={JestsStack}
        options={{
          title: 'Jests',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatsStack}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

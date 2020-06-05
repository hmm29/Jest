import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import FontAwesomeIcon from '../components/FontAwesomeIcon';
import EntypoIcon from '../components/EntypoIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Jests"
        component={HomeScreen}
        options={{
          title: 'Jests',
          tabBarIcon: ({ focused }) => <FontAwesomeIcon focused={focused} name="grin-tongue-wink" />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={LinksScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => <EntypoIcon focused={focused} name="chat" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Welcome to Jest';
    case 'Links':
      return 'Your Chats';
  }
}

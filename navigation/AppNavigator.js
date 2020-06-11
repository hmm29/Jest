import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthScreen from '../screens/AuthScreen';
import Main from './Main';

const Navigator = createSwitchNavigator(
    {
        // For authentication
        Auth: AuthScreen,
        // For fetching and validating session
        Loading: AuthLoadingScreen,
        // Main app
        Main
    },
    {
        initialRouteName: 'Main'
    }
);

export default createAppContainer(Navigator);

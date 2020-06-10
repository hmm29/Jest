import React from 'react';
import { AsyncStorage } from 'react-native';
import RootStackNavigator from './RootStackNavigator';

console.disableYellowBox = true;

const Main = () => {

    const fetchSession = async () => {
        // fetch session
        const session = await AsyncStorage.getItem('@jest-app:session');
        const sessionObj = JSON.parse(session);
        // const { token, id } = sessionObj;

        // can do something with token and id if desired
    };

    React.useEffect(() => {
        async function getAuthSession() {
            // fetch session
            const session = await AsyncStorage.getItem('@jest-app:session');
            const sessionObj = JSON.parse(session);
            // const { token, id } = sessionObj;

            // can do something with token and id if desired
        }

       getAuthSession();
    }, []);

    return <RootStackNavigator />
};

export default Main;

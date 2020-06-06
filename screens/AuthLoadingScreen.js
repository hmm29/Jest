import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StyleSheet,
    View,
} from 'react-native';

const CenterSpinner = () => (
    <View style={styles.container}>
        <ActivityIndicator />
    </View>
);

const AuthLoadingScreen = ({ navigation }) =>  {

    // auth init function
    let _bootstrapAsync = async () => {
        // Fetch token from storage
        let session = await AsyncStorage.getItem('@todo-graphql:session');
        // If session exists, validate it, else redirect to login screen
        if (session) {
            let sessionObj = JSON.parse(session);
            let currentTime = Math.floor(new Date().getTime() / 1000);
            if (currentTime < sessionObj.exp) {
                // setLogout(() => navigation.navigate('Auth'));
                navigation.navigate('Main');
            } else {
                navigation.navigate('Auth');
            }
        } else {
            navigation.navigate('Auth');
        }
    };

    React.useEffect(() => {
        _bootstrapAsync();
    }, []);

    return (
        <View style={styles.loading}>
            <CenterSpinner />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AuthLoadingScreen;
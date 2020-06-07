import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        alignItems: "center"
    },
    profileText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
});
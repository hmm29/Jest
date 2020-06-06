import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.settingsText}>Settings Screen</Text>
        </View>
    )
}

StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center"
    },
    settingsText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
});
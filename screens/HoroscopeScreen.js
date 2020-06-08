import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HoroscopeScreen() {
  return (
  <View style={styles.container}>
    <Text style={styles.horoscopeText}>Horoscope of the Day</Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  horoscopeText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

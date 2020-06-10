import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HoroscopeScreen() {
  return (
  <View style={styles.container}>
    <View style={styles.card}>
    <Text style={styles.horoscopeText}>Horoscope of the Day</Text>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'pink',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horoscopeText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

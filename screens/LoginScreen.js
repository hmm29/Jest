import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.text}>Sign Into Jest</Text>
      </View>
      <View style={styles.signInButtonsContainer}>
        <TouchableOpacity style={[styles.loginButton, styles.signInWithApple]} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign In With Apple</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.signInWithSnapchat]} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign in with Snapchat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.moreOptions]} onPress={() => {}}>
          <Text style={styles.moreOptions}>More Options</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: "#00bcd4",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    margin: 10
  },
  moreOptions: {
    backgroundColor: "#fff",
  },
  signInButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
  },
  signInWithApple: {
    backgroundColor: "#000",
  },
  signInWithSnapchat: {
    backgroundColor: "yellow",
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold"
  }
})

import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AuthScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.previewImage} source={{ uri: ''}} />
      </View>
      <View style={styles.signInButtonsContainer}>
        <TouchableOpacity style={[styles.loginButton, styles.signInWithFacebook]} onPress={() => {}}>
          <Text style={[styles.buttonText]}>Sign In With Apple</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.signInWithSnapchat]} onPress={() => {}}>
          <Text style={[styles.buttonText, {color: '#000'}]}>Sign in with Snapchat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.signInWithSMS]} onPress={() => {}}>
          <Text style={[styles.buttonText, {color: '#000'}]}>Sign in with SMS</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#70E7FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
    width: 188,
    height: 416,
    borderRadius: 30,
    resizeMode: 'contain',
    borderWidth: 10,
    borderColor: '#c7faff'
  },
  loginButton: {
    margin: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
    justifyContent: 'center'
  },
  signInWithSMS: {
    backgroundColor: '#fff',
  },
  signInButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: 10
  },
  signInWithFacebook: {
    backgroundColor: 'blue',
  },
  signInWithSnapchat: {
    backgroundColor: 'yellow',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  }
});

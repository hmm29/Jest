import React, { useEffect, useState } from 'react';
import { Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'

import Layout from '../constants/Layout';
const screenWidth = Layout.window.width;

// LayoutAnimation on Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function MatchProfileScreen() {
  const [ isReady, setIsReady ] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  const onOpenActionSheet = () => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['Tic Tac Toe', 'Connect 4', 'Ghost', 'Cancel'];
    const destructiveButtonIndex = null;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
        buttonIndex => {
          // Do something here depending on the button index selected
          buttonIndex !== cancelButtonIndex ? alert(`You sent Sarah a ${options[buttonIndex]} challenge!`) : null

        },
      );
  };

    useEffect(() => {
      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsReady(true);
      }, 20);
    }, []);

    return (
      isReady ? <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
            <Swiper loop={false} height={screenWidth} paginationStyle={{position: 'relative'}}>
              <View>
                <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
              <View>
                <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
              <View>
                <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
              <View>
                <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
            </Swiper>
            <View style={styles.userInfoContainer}>
              <View style={styles.userBasicInfo}>
                <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 5}}>Sarah</Text>
                <Text style={{fontSize: 25,  marginBottom: 5}}>Stanford University</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                  <View style={{backgroundColor: 'pink', borderRadius: 30, paddingHorizontal: 10, paddingVertical: 5, marginRight: 5}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Aquarius</Text>
                  </View>
                  <Text style={{marginRight: 10}}>They/them</Text>
                  <Text style={{marginBottom: 10}}>👑145</Text>
                </View>
                <View style={{marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderColor: '#f7f8f9'}}>
                  <Text style={{ paddingBottom: 5 }}>I am a friendly person who likes to party, get to know me and youll see the aswesome things about me</Text>
                </View>
              </View>
              <View style={styles.instagramPhotoGallery}>

              </View>

              <View style={styles.ctasContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', borderRadius: 50,  marginBottom: 20, padding: 15}}>
                  <Text style={{marginRight: 15, fontSize: 20}}>💁</Text>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      Take Sarah{'\''}s Get to Know Me Quiz
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => onOpenActionSheet()} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', borderRadius: 50,  marginBottom: 20, padding: 15}}>
                  <Text style={{marginRight: 15, fontSize: 20}}>😜</Text>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      Send Sarah a Jest
                    </Text>
                  </TouchableOpacity>
              </View>



            </View>
        </View>
        </ScrollView> : null
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f8f9",
        justifyContent: "flex-start",
        alignItems: "stretch"
    },
    ctasContainer: {
      flex: 1,
      flexDirection: "column",
            justifyContent: 'space-evenly'
    },
    instagramPhotoGallery: {
        backgroundColor: 'pink'
    },
    userBasicInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingBottom: 30,
    },
    userInfoContainer: {
      flex: 1,
      padding: screenWidth / 40,
    }
});

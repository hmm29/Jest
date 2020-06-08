import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'

import Layout from '../constants/Layout';
const screenWidth = Layout.window.width;

export default function JestActivityScreen() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
            <Swiper loop={false} height={screenWidth} paginationStyle={{position: 'relative'}}>
              <View>
              <Image source={{ uri: 'https://placeimg.com/640/640/nature'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
            </Swiper>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: 'orange'
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
    },
    userInfoContainer: {
      padding: screenWidth / 20,
      flex: 1,
    }
});

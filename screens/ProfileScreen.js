import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'

import Layout from '../constants/Layout';
const screenWidth = Layout.window.width;

export default function ProfileScreen() {
  const [ isReady, setIsReady ] = useState(true);

    return (
      isReady ? <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
            <Swiper loop={false} height={screenWidth} paginationStyle={{position: 'relative'}}>
              <View>
              <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
              <View>
              <Image source={{ uri: 'https://placeimg.com/640/640/people'}} style={{width: screenWidth, height: screenWidth}}/>
              </View>
            </Swiper>
            <View style={styles.userInfoContainer}>
              <View style={styles.userBasicInfo}>
                <Text>Name</Text>
                <Text>👑 145</Text>
                <Text>They/them</Text>
                <Text>Bio</Text>
              </View>
              <View style={styles.instagramPhotoGallery}>

              </View>
              <View style={styles.personalityAnalysisButtonContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{backgroundColor: '#333', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20, padding: 15}}>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      View Personality Analysis
                    </Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.ctasContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#333', borderRadius: 50,  marginBottom: 20, padding: 15}}>
                  <Text style={{marginRight: 15, fontSize: 20}}>💁</Text>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      5 Do You Know Me Quiz Results
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#333', borderRadius: 50,  marginBottom: 20, padding: 15}}>
                  <Text style={{marginRight: 15, fontSize: 20}}>😜</Text>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      10 First Impressions Quiz Results
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
        backgroundColor: "#fff",
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
    },
    userInfoContainer: {
      padding: screenWidth / 20,
      flex: 1,
    }
});

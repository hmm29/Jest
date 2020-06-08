import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'

import Layout from '../constants/Layout';
const screenWidth = Layout.window.width;

export default function MatchProfileScreen() {
  const [ isReady, setIsReady ] = useState(false);

    useEffect(() => {
      setTimeout(() => setIsReady(true), 200);
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

              <View style={styles.ctasContainer}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'dodgerblue', borderRadius: 50,  marginBottom: 20, padding: 15}}>
                  <Text style={{marginRight: 15, fontSize: 20}}>💁</Text>
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                      Take Sarah{'\''}s Personality Quiz
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => {}} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'indigo', borderRadius: 50,  marginBottom: 20, padding: 15}}>
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

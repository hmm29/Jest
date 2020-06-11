import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  LayoutAnimation,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext, themes } from '../contexts/ThemeContext';

import TabBarIcon from '../navigation/components/TabBarIcon';
import Layout from '../constants/Layout';

const screenWidth = Layout.window.width;
const cardWidthToHeightRatio = 1.6;
const cardWidth = screenWidth / 2.4;
const cardHeight = cardWidth * cardWidthToHeightRatio;
const cardMargin = (screenWidth - 2 * cardWidth) / 3;

// for LayoutAnimation API in Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const HoroscopeBannerCard = ({ navigation }) => {
  const [ horoscopeBannerCardVisible, setHoroscopeBannerCardVisible ] = useState(true);

  return (
    horoscopeBannerCardVisible ?   <ThemeContext.Consumer>
        {({ theme, setTheme }) =>
        <>
    <View style={[styles.bannerCard, {backgroundColor: '#00bcd4'}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View style={styles.bannerCardThumbnail}>
          <TabBarIcon focused={true} name="ios-heart" />
        </View>
        <View style={{flexDirection: 'column'}}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Today - Wednesday, May 27</Text>
            <Text style={{color: '#fff', paddingTop: 3}}>Your Love Horoscope</Text>
          </View>
          <TouchableOpacity onPress={() => {
            setTheme(themes.dark);
            navigation.navigate('Horoscope')
          }}>
          <View style={{borderRadius: 30, backgroundColor: '#f7f8f9', paddingHorizontal: 10, paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}}>Open</Text>
          </View>
          </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity
      onPress={()=> {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHoroscopeBannerCardVisible(false);
      }} style={{position: 'absolute', top: 10, right: 5, }}>
    <View style={{paddingVertical: 2, paddingHorizontal: 9, borderRadius: 16, backgroundColor: '#f7f8f9', justifyContent: 'center', alignItems: 'center'}}>
      <TabBarIcon focused={true} size={25} name="ios-close" />
    </View>
    </TouchableOpacity>
    </>}
    </ThemeContext.Consumer> : null
  )
}

export const Card = ({ id, onPress, uri }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
      <ImageBackground style={{flex: 1, justifyContent: "center", alignItems: "center"}} imageStyle={{borderRadius: 25}} source={{ uri }}>
      </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export const UserThumbnail = ({ id, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={styles.userThumbnailWrapper}>
        <Image style={styles.userThumbnail} source={ { uri: 'https://placeimg.com/140/140/people' }} />
      </View>
      <View
          style={styles.userThumbnailSignBadge}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            a
          </Text>
        </View>
    <Text style={{marginTop: 10}}>User {id}</Text>
    </View>
    </TouchableOpacity>
  );
};

export const RecommendedMatchesSection = ({ navigation }) => {
  return (
  <View
    style={{
      width: screenWidth,
      borderRadius: 30,
      paddingVertical: cardMargin,
      backgroundColor: '#fff',
      marginBottom: cardMargin,
    }}
  >
    <Text
      style={{
        marginLeft: cardMargin,
        marginBottom: cardMargin,
        fontSize: 25,
        fontWeight: 'bold',
      }}
    >
      Recommended for You
    </Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {Array(4)
        .fill(null)
        .map((item, idx) => <UserThumbnail onPress={() => navigation.navigate('MatchProfile', { user: item})} key={idx} id={idx} />)}
    </View>
  </View>
);
}

export const JestsSection = ({ navigation }) => {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('too hot to handle');

    const questions = [
        {
            question: "What is the fifth planet from the sun?",
            answers: [
                { id: "1", text: "Mars" },
                { id: "2", text: "Jupiter", correct: true },
                { id: "3", text: "Saturn" },
                { id: "4", text: "Venus" }
            ]
        },
        {
            question: "How many planets are in the Solar System?",
            answers: [
                { id: "1", text: "6" },
                { id: "2", text: "7" },
                { id: "3", text: "8", correct: true },
                { id: "4", text: "9" }
            ]
        }
    ];

  useEffect(() => {
    // async function fetchGifs() {
    //   try {
    //     const API_KEY = 'YU4vbK70t55LvLAuC37NuJ9cdY6mFiLM';
    //     const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
    //     const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}&limit=10`);
    //     const res = await resJson.json();
    //     setGifs(res.data);
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // }
    //
    // fetchGifs();
    setGifs(Array(8).fill(null))
  }, [term])

  return (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) =>
        <>
  <View
    style={{
      width: screenWidth,
      borderRadius: 30,
      paddingVertical: cardMargin,
      backgroundColor: '#fff',
      marginBottom: cardMargin,
    }}
  >
    <Text
      style={{
        marginLeft: cardMargin,
        marginBottom: cardMargin,
        fontSize: 25,
        fontWeight: 'bold',
      }}
    >
      Jests
    </Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {
          // jests.map((jest, i) => <Card ... onPress={() => jest.type === 'quiz' ? navigation.navigate('JestQuiz') : navigation.navigate('JestGame') } />)
          gifs
        .map((item, idx) => <Card key={idx} id={idx} onPress={() => {
          setTheme(themes.dark);
          // navigation.navigate('JestQuiz', { color: 'dodgerblue', questions, uri: item ? item.images.original.url : 'https://placeimg.com/480/640/nature'});
          navigation.navigate('JestGame', { color: 'dodgerblue', uri: item ? item.images.original.url : 'https://placeimg.com/480/640/nature'})
        }} uri={item ? item.images.original.url : 'https://placeimg.com/480/640/nature'} />)}
    </View>
  </View>
  </>}</ThemeContext.Consumer>
)};

export default function HomeScreen({ navigation, route }) {
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor='#00bcd4' />
        }
        showsVerticalScrollIndicator={false}
      >
        <HoroscopeBannerCard navigation={navigation} />
        <RecommendedMatchesSection navigation={navigation} />
        <JestsSection navigation={navigation} />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  bannerCard: {
    flexDirection: 'column',
    width: screenWidth-cardMargin,
    borderRadius: 10,
    paddingVertical: cardMargin,
    backgroundColor: '#fff',
    marginBottom: cardMargin,
  },
  bannerCardThumbnail: {
    width: screenWidth / 7,
    height: screenWidth / 7,
    borderRadius: screenWidth / 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f8f9',
  },
  card: {
    backgroundColor: '#7dffb2',
    width: cardWidth,
    height: cardHeight,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 25,
    marginBottom: cardMargin,
  },
  contentContainer: {
    paddingTop: cardMargin,
    alignItems: 'center',
  },
  welcomeContainer: {
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  userThumbnail: {
    backgroundColor: 'dodgerblue',
    width: screenWidth / 7,
    height: screenWidth / 7,
    borderRadius: 50,
  },
  userThumbnailSignBadge: {
    position: 'absolute',
    width: screenWidth / 15,
    height: screenWidth / 15,
    borderRadius: screenWidth / 30,
    borderWidth: 3,
    borderColor: '#fff',
    top: 0,
    right: -screenWidth / 60,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userThumbnailWrapper: {
    backgroundColor: '#fff',
    width: screenWidth / 5.5,
    height: screenWidth / 5.5,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

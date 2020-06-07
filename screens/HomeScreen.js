import * as React from 'react';
import {
  Alert,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Layout from '../constants/Layout';

const screenWidth = Layout.window.width;
const cardWidthToHeightRatio = 1.6;
const cardWidth = screenWidth / 2.4;
const cardHeight = cardWidth * cardWidthToHeightRatio;
const cardMargin = (screenWidth - 2 * cardWidth) / 3;

export const Card = ({ id }) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert(`open card ${id}`)}>
      <View style={styles.card}>
        <Text style={{ color: 'red' }}>Card {id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const UserThumbnail = ({ id }) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert(`tapped user ${id} ;)`)}>
            <View style={styles.userThumbnail}>
            </View>
        </TouchableOpacity>
    );
};

export const RecommendedMatchesSection = () => (
    <View style={{width: screenWidth, borderRadius: 30, paddingVertical: cardMargin, backgroundColor: '#fff', marginBottom: cardMargin}}>
        <Text style={{marginLeft: cardMargin, marginBottom: cardMargin, fontSize: 25, fontWeight: 'bold'}}>Recommended for You</Text>
        <View style={{    flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'}}>
            {Array(4)
                .fill(null)
                .map((i, idx) => <UserThumbnail key={idx} id={idx} />)}
        </View>
    </View>
);

export const JestsSection = () => (
    <View style={{width: screenWidth, borderRadius: 30, paddingVertical: cardMargin, backgroundColor: '#fff', marginBottom: cardMargin}}>
      <Text style={{marginLeft: cardMargin, marginBottom: cardMargin,  fontSize: 25, fontWeight: 'bold'}}>Jests</Text>
      <View style={{    flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center'}}>
        {Array(9)
            .fill(null)
            .map((i, idx) => <Card key={idx} id={idx} />)}
      </View>
    </View>
);


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <RecommendedMatchesSection />
        <JestsSection/>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8f9',
  },
  card: {
    backgroundColor: '#7dffb2',
    width: cardWidth,
    height: cardHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: cardMargin,
  },
  contentContainer: {
    paddingTop: 30,
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  userThumbnail: {
    width: screenWidth / 5,
    height: screenWidth / 5,
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#945ce0'
  }
});

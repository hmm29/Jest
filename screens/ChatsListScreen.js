import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import Layout from '../constants/Layout';

const screenWidth = Layout.window.width;

export default function ChatsListScreen({ navigation, route }) {
  const names = ['Jennifer', 'Lauren', 'Brittany'];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {names.map((name, idx) =>
      <ChatListItem
        key={idx}
        icon="md-school"
        label={name}
        onPress={() => navigation.navigate('Chat', {name})}
      />)}
    </ScrollView>
  );
}

function ChatListItem({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Image style={{width: screenWidth / 6, height: screenWidth / 6, borderRadius: screenWidth / 6 }} source={{uri: 'https://placeimg.com/140/140/any'}} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8f9',
  },
  contentContainer: {
  },
  optionIconContainer: {
    marginRight: 12,
    alignItems: 'center'
  },
  optionTextContainer: {
    flex: 1,
    justifyContent: 'center',
      alignItems: 'flex-start',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import { ThemeContext, themes } from '../contexts/ThemeContext';

import { Button, ButtonContainer } from './components/Button';

export default function JestQuizScreen({ route, navigation }) {
  const [totalCount, setTotalCount] = useState(
    route.params.questions && route.params.questions.length,
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = route.params.questions;
  const question = questions[activeQuestionIndex];

  let nextQuestion = (resetThemeBgCb) => {
    let nextIndex = activeQuestionIndex + 1;
    if (nextIndex >= totalCount) {
      resetThemeBgCb();
      return navigation.goBack();
    }

    setActiveQuestionIndex(nextIndex);
    setAnswered(false);
  };

  let selectAnswer = (answer, resetThemeBgCb) => {
    setAnswered(true);
    setTimeout(() => {nextQuestion(resetThemeBgCb)}, 200);
  };

  return (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) =>
    <View
      style={styles.container}
    >
    <StatusBar barStyle="light-content" />
      <View style={[styles.card, { backgroundColor: route.params.color }]}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map(answer => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => selectAnswer(answer, () => setTheme(themes.default))}
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>{`${activeQuestionIndex + 1}/${totalCount}`}</Text>
      </View>
      </View>
    </View>}</ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.dark.background,
    padding: 10
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
    padding: 20
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  }
});

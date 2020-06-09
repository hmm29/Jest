import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';

import { Button, ButtonContainer } from './components/Button';

export default function JestQuizScreen({ route, navigation }) {
  const [totalCount, setTotalCount] = useState(
    route.params.questions && route.params.questions.length,
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = route.params.questions;
  const question = questions[activeQuestionIndex];

  let nextQuestion = () => {
    let nextIndex = activeQuestionIndex + 1;
    if (nextIndex >= totalCount) {
      return navigation.goBack();
    }

    setActiveQuestionIndex(nextIndex);
    setAnswered(false);
  };

  let selectAnswer = (answer) => {
    setAnswered(true);
    setTimeout(() => nextQuestion(), 500);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: route.params.color },
      ]}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map(answer => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => selectAnswer(answer)}
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>{`${activeQuestionIndex + 1}/${totalCount}`}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});

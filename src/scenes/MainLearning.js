import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

import HeaderExam from '../components/atoms/question/HeaderExam'
import PronuntciationQuestion from '../components/molecules/learning/PronunciationQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'
import { QUESTION_TYPE } from '../constants'
import { Mixins, Colors, Typography } from '../styles'

const questions = [
  {
    type: QUESTION_TYPE.MEANING_TO_VOCABULARY,
    word: 'human',
    data: {},
    answers: [
      {
        content: 'con người',
        isCorrect: true,
      },
      {
        content: 'công nhân',
        isCorrect: false,
      },
      {
        content: 'bác sĩ',
        isCorrect: false,
      },
      {
        content: 'học sinh',
        isCorrect: false,
      },
    ],
  },
  {
    type: QUESTION_TYPE.MEANING_TO_VOCABULARY,
    word: 'good',
    data: {},
    answers: [
      {
        content: 'xấu',
        isCorrect: false,
      },
      {
        content: 'tốt, giỏi',
        isCorrect: true,
      },
      {
        content: 'tệ',
        isCorrect: false,
      },
      {
        content: 'học sinh',
        isCorrect: false,
      },
    ],
  },
  {
    type: QUESTION_TYPE.PRONUNCIATION,
    word: 'good',
    data: {},
    answers: [],
  },
]

const MainLearning = ({ navigation }) => {
  const [lesson, setLesson] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [numCorrect, setNumCorrect] = useState(0)
  const [numQuestion, setNumQuestion] = useState(10)

  const toNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < 2) {
      setCurrentQuestionIndex(nextIndex)
      setLoading(true)
    }
  }

  const increaseNumCorrect = () => {
    setNumCorrect(numCorrect + 1)
  }

  return (
    <View style={styles.container}>
      <HeaderExam
        currentQuestionIndex={currentQuestionIndex}
        numQuestion={numQuestion}
        numCorrect={numCorrect}
      />
      {questions[currentQuestionIndex].type === QUESTION_TYPE.PRONUNCIATION ? (
        <PronuntciationQuestion
          question={questions[currentQuestionIndex]}
          setLoading={setLoading}
          loading={loading}
          increaseNumCorrect={increaseNumCorrect}
        />
      ) : questions[currentQuestionIndex].type === QUESTION_TYPE.MEANING_TO_VOCABULARY ? (
        <VocabularyQuestion
          question={questions[currentQuestionIndex]}
          setLoading={setLoading}
          loading={loading}
          increaseNumCorrect={increaseNumCorrect}
        />
      ) : questions[currentQuestionIndex].type === QUESTION_TYPE.VOCABULARY_TO_MEANING ? (
        <VocabularyQuestion
          question={questions[currentQuestionIndex]}
          setLoading={setLoading}
          loading={loading}
          increaseNumCorrect={increaseNumCorrect}
        />
      ) : (
        <WriteQuestion
          question={questions[currentQuestionIndex]}
          setLoading={setLoading}
          loading={loading}
          increaseNumCorrect={increaseNumCorrect}
        />
      )}
      <Button info style={styles.buttonLearn} onPress={toNextQuestion}>
        <Text style={styles.textButton}>TIẾP TỤC</Text>
        <Icon name="doubleright" type="AntDesign" style={styles.iconRight} />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Mixins.WINDOW_HEIGHT,
    backgroundColor: Colors.WHITE,
  },
  buttonLearn: {
    width: Mixins.WINDOW_WIDTH,
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_DARK,
    bottom: 0,
  },
  textButton: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
})
export default MainLearning

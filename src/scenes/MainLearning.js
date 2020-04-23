import React, { useState } from 'react'
import { Text, View } from 'react-native'
import PronuntciationQuestion from '../components/molecules/learning/PronunciationQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'
import { QUESTION_TYPE } from '../constants'
import { Button } from 'native-base'

const questions = [
  {
    type: QUESTION_TYPE.MEANING_TO_VOCABULARY,
    word: 'human',
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
]

const MainLearning = ({ navigation }) => {
  const [lesson, setLesson] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const toNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < 2) {
      setCurrentQuestionIndex(nextIndex)
    }
  }

  return (
    <View>
      <Button onPress={toNextQuestion}>
        <Text>Câu tiếp</Text>
      </Button>
      {questions[currentQuestionIndex].type === QUESTION_TYPE.PRONUNCIATION ? (
        <PronuntciationQuestion question={questions[currentQuestionIndex]} />
      ) : questions[currentQuestionIndex].type === QUESTION_TYPE.MEANING_TO_VOCABULARY ? (
        <VocabularyQuestion question={questions[currentQuestionIndex]} />
      ) : questions[currentQuestionIndex].type === QUESTION_TYPE.VOCABULARY_TO_MEANING ? (
        <VocabularyQuestion question={questions[currentQuestionIndex]} />
      ) : (
        <WriteQuestion question={questions[currentQuestionIndex]} />
      )}
    </View>
  )
}
export default MainLearning

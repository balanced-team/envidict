import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

import HeaderExam from '../components/atoms/question/HeaderExam'
import PronuntciationQuestion from '../components/molecules/learning/PronunciationQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'
import { QUESTION_TYPE } from '../constants'
import { Mixins, Colors, Typography } from '../styles'
import { generateQuestionFromWord } from '../utils'
import { dictStoreContext } from '../contexts'

const questions = [
  {
    type: QUESTION_TYPE.WRITING,
    word: 'human',
    pronouce: '/ˈ(h)yo͞omən/',
    description: 'noun: con người',
    answers: [],
  },
  {
    type: QUESTION_TYPE.VOCABULARY_TO_MEANING,
    word: 'human',
    pronouce: '/ˈ(h)yo͞omən/',
    description: 'noun: con người',
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
    description: 'adj: tốt, giỏi',
    answers: [
      {
        content: 'best',
        isCorrect: false,
      },
      {
        content: 'good',
        isCorrect: true,
      },
      {
        content: 'bad',
        isCorrect: false,
      },
      {
        content: 'terribled',
        isCorrect: false,
      },
    ],
  },
  {
    type: QUESTION_TYPE.PRONUNCIATION,
    word: 'good',
    pronounce: '/gu:d/',
    description: 'adj: tốt, giỏi',
    answers: [
      {
        content: 'best',
        isCorrect: false,
      },
      {
        content: 'good',
        isCorrect: true,
      },
      {
        content: 'bad',
        isCorrect: false,
      },
      {
        content: 'terribled',
        isCorrect: false,
      },
    ],
  },
]

const words = ['human', 'hello', 'morning', 'sunny', 'bye', 'my']

const MainLearning = ({ navigation }) => {
  const [lesson, setLesson] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [numCorrect, setNumCorrect] = useState(0)
  const [numQuestion, setNumQuestion] = useState(10)
  const [questionList, setQuestionList] = useState([])

  const dictStore = useContext(dictStoreContext)

  useEffect(() => {
    const getWordList = async () => {
      const wordList = []
      for (let i = 0; i < words.length; i++) {
        wordList.push(await dictStore.findWord(words[i]))
      }
      return wordList
    }

    const setUp = async () => {
      const wordList = await getWordList()
      let data = []
      for (let i = 0; i < wordList.length; i++) {
        const question = await generateQuestionFromWord(wordList[i], wordList)
        data.push(question)
      }
      console.log(data)
      setQuestionList(data)
    }
    setUp()
  }, [])

  const toNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < 3) {
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

import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Icon, Spinner } from 'native-base'

import HeaderExam from '../components/atoms/question/HeaderExam'
import PronuntciationQuestion from '../components/molecules/learning/PronunciationQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'
import { QUESTION_TYPE } from '../constants'
import { Mixins, Colors, Typography } from '../styles'
import { generateQuestionFromWord } from '../utils'
import { dictStoreContext, topicStoreContext } from '../contexts'
import { useNavigation } from '@react-navigation/native'
import Dialog from 'react-native-dialog'
import { RoutesConstants } from '../navigations/route-constants'

// const words = ['human', 'hello', 'morning', 'sunny', 'bye', 'my']

const MainLearning = (props) => {
  const { id, courseId } = props.route.params

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [numCorrect, setNumCorrect] = useState(0)
  const [questions, setQuestions] = useState([])
  const [isSetUp, setIsSetUp] = useState(true)
  const [isStop, setIsStop] = useState(false)
  const [isDoneTest, setIsDoneTest] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const dictStore = useContext(dictStoreContext)
  const topicStore = useContext(topicStoreContext)

  const navigator = useNavigation()

  useEffect(() => {
    const getWordList = async () => {
      const currentCourse = await topicStore.topics.find((topic) => topic.id === courseId)
      const currentLesson = await currentCourse.lessons.find((lesson) => lesson.id === id)
      await currentLesson.fetch()
      const words = currentLesson.wordIds
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

      setQuestions(data)
      setIsSetUp(false)
    }
    setIsSetUp(true)
    setUp()
    setIsDoneTest(false)
    setRefresh(false)
    setIsStop(false)
    setNumCorrect(0)
    setCurrentQuestionIndex(0)
  }, [refresh, props.route.params])

  const toNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex)
      setLoading(true)
    }
  }

  const increaseNumCorrect = () => {
    setNumCorrect(numCorrect + 1)
  }

  return (
    <View style={styles.container}>
      {!isSetUp && (
        <Fragment>
          <HeaderExam
            currentQuestionIndex={currentQuestionIndex}
            numQuestion={questions.length}
            numCorrect={numCorrect}
          />
          {questions[currentQuestionIndex].type === QUESTION_TYPE.PRONUNCIATION ? (
            <PronuntciationQuestion
              question={questions[currentQuestionIndex]}
              setLoading={setLoading}
              loading={loading}
              increaseNumCorrect={increaseNumCorrect}
              setIsStop={setIsStop}
              setIsDoneTest={setIsDoneTest}
              currentQuestionIndex={currentQuestionIndex}
              numQuestion={questions.length}
            />
          ) : questions[currentQuestionIndex].type ===
            QUESTION_TYPE.MEANING_TO_VOCABULARY ? (
            <VocabularyQuestion
              question={questions[currentQuestionIndex]}
              setLoading={setLoading}
              loading={loading}
              increaseNumCorrect={increaseNumCorrect}
              setIsStop={setIsStop}
              setIsDoneTest={setIsDoneTest}
              currentQuestionIndex={currentQuestionIndex}
              numQuestion={questions.length}
            />
          ) : questions[currentQuestionIndex].type ===
            QUESTION_TYPE.VOCABULARY_TO_MEANING ? (
            <VocabularyQuestion
              question={questions[currentQuestionIndex]}
              setLoading={setLoading}
              loading={loading}
              increaseNumCorrect={increaseNumCorrect}
              setIsStop={setIsStop}
              setIsDoneTest={setIsDoneTest}
              currentQuestionIndex={currentQuestionIndex}
              numQuestion={questions.length}
            />
          ) : (
            <WriteQuestion
              question={questions[currentQuestionIndex]}
              setLoading={setLoading}
              loading={loading}
              increaseNumCorrect={increaseNumCorrect}
              setIsStop={setIsStop}
              setIsDoneTest={setIsDoneTest}
              currentQuestionIndex={currentQuestionIndex}
              numQuestion={questions.length}
            />
          )}
          {isStop && (
            <Button info style={styles.buttonLearn} onPress={toNextQuestion}>
              <Text style={styles.textButton}>HỌC TIẾP</Text>
              <Icon name="doubleright" type="AntDesign" style={styles.iconRight} />
            </Button>
          )}
        </Fragment>
      )}
      {isSetUp && (
        <View style={styles.container}>
          <Spinner color={Colors.BLUE_DARK} />
          <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
        </View>
      )}
      <View>
        <Dialog.Container visible={isDoneTest}>
          <Dialog.Title bold>Kết quả</Dialog.Title>
          <Dialog.Description>
            Bạn trả lời đúng{' '}
            {numCorrect +
              '/' +
              questions.length +
              '\n\n' +
              (numCorrect === questions.length
                ? 'Xuất sắc! Bạn đã hoàn thành bài học'
                : numCorrect / questions.length > 0.7
                ? 'Cố gắng một chút nữa thôi!'
                : numCorrect / questions.length > 0.3
                ? 'Cố lên nào!'
                : 'Không tốt rồi! Học cẩn thận để đạt kết quả cao nhé!')}
          </Dialog.Description>
          <Dialog.Button
            label="Học tiếp"
            onPress={() => {
              setIsDoneTest(false)
              setRefresh(true)
              navigator.navigate(RoutesConstants.LessonList)
            }}
            color={Colors.PRIMARY}
          />
          {numCorrect < questions.length && (
            <Dialog.Button
              label="Làm lại"
              onPress={() => {
                setIsDoneTest(false)
                setRefresh(true)
              }}
            />
          )}
        </Dialog.Container>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Mixins.WINDOW_HEIGHT,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  buttonLearn: {
    width: Mixins.WINDOW_WIDTH,
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_DARK,
    position: 'absolute',
    bottom: 0,
  },
  textButton: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE_TEXT,
    textAlign: 'center',
  },
})
export default MainLearning

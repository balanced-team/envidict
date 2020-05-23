import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Card, Button } from 'native-base'

import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'
import WordInformation from './WordInformation'
import { voiceStoreContext } from '../../../contexts'

const PronunticationQuestion = (props) => {
  const {
    question,
    loading,
    setLoading,
    increaseNumCorrect,
    setIsStop,
    setIsDoneTest,
    numQuestion,
    currentQuestionIndex,
  } = props

  const [isDone, setIsDone] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)

  const voiceStore = useContext(voiceStoreContext)

  useEffect(() => {
    setIsStop(false)
    setIsCorrect(null)
    setIsDone(false)
    setLoading(false)
  }, [question])

  const onSubmitAnswer = async (content) => {
    const trueAnswer = await question.answers.find((answer) => answer.content === content)
    setIsDone(true)
    setIsStop(true)
    if (trueAnswer.isCorrect) {
      setIsCorrect(true)
      increaseNumCorrect()
    } else {
      setIsCorrect(false)
    }
    if (currentQuestionIndex === numQuestion - 1) {
      setIsDoneTest(true)
    }
  }

  return (
    <View style={styles.container}>
      {!isDone && (
        <View style={styles.block}>
          <TouchableOpacity onPress={() => voiceStore.speak(question.word)}>
            <Icon name="volume-high" style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
      {isDone && isCorrect && <WordInformation isCorrect={true} question={question} />}
      {isDone && !isCorrect && <WordInformation isCorrect={false} question={question} />}

      <Text style={styles.text}>Nghe và chọn câu trả lời</Text>
      <Card style={styles.card}>
        {!loading &&
          question.answers.map((answer, i) => (
            <AnswerLine
              key={i}
              content={answer.content}
              isCorrect={answer.isCorrect}
              onSubmitAnswer={onSubmitAnswer}
              isDone={isDone}
            />
          ))}
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: Mixins.WINDOW_HEIGHT,
    backgroundColor: Colors.WHITE,
  },
  block: {
    width: Mixins.WINDOW_WIDTH - 20,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  icon: {
    color: Colors.BLUE_DARK,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    paddingLeft: 12,
    color: Colors.BLUE_DARK,
    marginTop: 10,
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 200,
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  iconRight: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 5,
  },
})
export default PronunticationQuestion

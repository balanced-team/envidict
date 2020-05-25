import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Card, Grid, Col } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'
import { QUESTION_TYPE } from '../../../constants'
import WordInformation from './WordInformation'
import { voiceStoreContext } from '../../../contexts'

const VocabularyQuestion = (props) => {
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
    <View>
      {!isDone && (
        <View
          style={[
            styles.block,
            ...[
              isCorrect === true
                ? styles.correct
                : isCorrect === false
                ? styles.wrong
                : [],
            ],
          ]}
        >
          <Grid>
            <Col size={14}>
              <Text style={[styles.text]}>
                {question.type === QUESTION_TYPE.MEANING_TO_VOCABULARY
                  ? question.description
                  : question.word}
              </Text>
              {question.type === QUESTION_TYPE.VOCABULARY_TO_MEANING && (
                <Text
                  style={[
                    styles.text,
                    { fontSize: Typography.FONT_SIZE_16, color: Colors.BLUE_LIGHT },
                  ]}
                >
                  {question.pronouce}
                </Text>
              )}
            </Col>

            <Col size={2} style={styles.columnRight}>
              <TouchableOpacity onPress={() => voiceStore.speak(question.word)}>
                <Icon name="volume-high" style={styles.icon} />
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      )}

      {isDone && isCorrect && <WordInformation isCorrect={true} question={question} />}
      {isDone && !isCorrect && <WordInformation isCorrect={false} question={question} />}
      <Text style={styles.text}>Chọn nghĩa của từ đã cho</Text>
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
  block: {
    width: Mixins.WINDOW_WIDTH - 20,
    minHeight: 100,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center',
  },
  columnRight: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.BLUE_DARK,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    paddingLeft: 12,
    color: Colors.BLUE_DARK,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    paddingLeft: 12,
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
    justifyContent: 'center',
    alignContent: 'center',
  },
  correct: {
    backgroundColor: Colors.BACKGROUND_SUCCESS,
    color: Colors.TEXT_SUCCESS,
    borderColor: Colors.TEXT_SUCCESS,
  },
  wrong: {
    backgroundColor: Colors.BACKGROUND_FAILED,
    color: Colors.TEXT_FAILED,
    borderColor: Colors.TEXT_FAILED,
  },
})
export default VocabularyQuestion

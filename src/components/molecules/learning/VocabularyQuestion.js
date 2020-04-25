import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Button, Card } from 'native-base'

import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const VocabularyQuestion = (props) => {
  const { question, loading, setLoading, increaseNumCorrect } = props
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setIsDone(false)
    setLoading(false)
  }, [question])

  const onSubmitAnswer = async (content) => {
    const trueAnswer = await question.answers.find((answer) => answer.content === content)
    setIsDone(true)
    if (trueAnswer.isCorrect) {
      increaseNumCorrect()
    }
  }

  return (
    <View>
      <View style={[styles.block, styles.inLine]}>
        <View>
          <Text style={styles.text}>outdated</Text>
          <Text
            style={[
              styles.text,
              { fontSize: Typography.FONT_SIZE_16, color: Colors.BLUE_LIGHT },
            ]}
          >
            /out`date/
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="volume-high" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Chọn nghĩa của từ đã cho</Text>
      <Card style={styles.card}>
        {!loading &&
          question.answers.map((answer, i) => (
            <AnswerLine
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
  inLine: {
    flexDirection: 'row',
  },
  block: {
    width: Mixins.WINDOW_WIDTH - 20,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  icon: {
    color: Colors.BLUE_DARK,
    justifyContent: 'flex-end',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    paddingLeft: 12,
    paddingTop: 10,
    color: Colors.BLUE_DARK,
    fontWeight: 'bold',
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
export default VocabularyQuestion

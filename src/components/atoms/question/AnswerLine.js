import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Radio, Right } from 'native-base'

import { Colors, Typography } from '../../../styles'

const AnswerLine = (props) => {
  const [selected, setSelected] = useState(false)
  const { content, onSubmitAnswer, isCorrect, isDone } = props

  useEffect(() => {
    setSelected(false)
  }, [content])

  const onPressRadio = () => {
    if (!isDone) {
      setSelected(true)
      onSubmitAnswer(content)
    }
  }

  return (
    <View
      style={
        selected && isCorrect
          ? [styles.inLine, styles.correctAnswer]
          : selected && !isCorrect
          ? [styles.inLine]
          : [styles.inLine]
      }
    >
      <Radio
        selectedColor={
          isCorrect
            ? Colors.TEXT_SUCCESS
            : selected && !isCorrect
            ? Colors.TEXT_FAILED
            : Colors.BLUE_EXPLAIN
        }
        selected={selected || (isDone && isCorrect)}
        onPress={onPressRadio}
        disabled={isDone}
      />
      <Text
        style={
          selected && isCorrect
            ? [styles.text, styles.correctAnswer]
            : selected && !isCorrect
            ? [styles.text]
            : [styles.text]
        }
      >
        {content}
      </Text>
      {isDone && isCorrect && (
        <Right>
          <Icon name="md-checkmark" style={styles.iconSuccess} />
        </Right>
      )}
      {selected && !isCorrect && (
        <Right>
          <Icon name="md-close" style={styles.iconFailed} />
        </Right>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inLine: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    paddingLeft: 10,
  },
  correctAnswer: {
    color: Colors.TEXT_SUCCESS,
    fontWeight: 'bold',
  },
  iconSuccess: {
    color: Colors.TEXT_SUCCESS,
  },
  iconFailed: {
    color: Colors.TEXT_FAILED,
  },
})
export default AnswerLine

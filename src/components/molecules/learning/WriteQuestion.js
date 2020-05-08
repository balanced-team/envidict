import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Button } from 'native-base'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import { Colors, Typography, Mixins } from '../../../styles'
import { InstanceSpeaker } from '../../../utils'
import WordInformation from './WordInformation'

const WriteQuestion = (props) => {
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

  useEffect(() => {
    setIsStop(false)
    setIsDone(false)
    setIsCorrect(null)
    setLoading(false)
    setAnswer('')
  }, [question])

  const [answer, setAnswer] = useState('')

  const onChangeAnswer = (text) => {
    setAnswer(text)
    if (text.toLowerCase() === question.word.toLowerCase()) {
      setIsDone(true)
      setIsStop(true)
      setIsCorrect(true)
      increaseNumCorrect()
      if (currentQuestionIndex === numQuestion - 1) {
        setIsDoneTest(true)
      }
    }
  }

  const onSubmit = () => {
    if (!isDone) {
      if (answer.toLowerCase() === question.word.toLowerCase()) {
        setIsCorrect(true)
        increaseNumCorrect()
      } else {
        setIsCorrect(false)
      }
    }
    setIsDone(true)
    setIsStop(true)
    if (currentQuestionIndex === numQuestion - 1) {
      setIsDoneTest(true)
    }
  }

  return (
    <View style={styles.container}>
      {!isDone && (
        <View style={styles.block}>
          <TouchableOpacity onPress={() => InstanceSpeaker.speak(question.word)}>
            <Icon name="volume-high" style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
      {isDone && isCorrect && <WordInformation isCorrect={true} question={question} />}
      {isDone && !isCorrect && <WordInformation isCorrect={false} question={question} />}
      <SmoothPinCodeInput
        containerStyle={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        cellStyle={{
          borderBottomWidth: 2,
          borderColor: Colors.BLUE_MEDIUM,
        }}
        cellStyleFocused={{
          borderColor: Colors.BLUE_TEXT,
        }}
        textStyle={{
          textTransform: 'uppercase',
        }}
        value={answer}
        onTextChange={onChangeAnswer}
        keyboardType="email-address"
        codeLength={question.word.length}
      />

      <Button style={styles.buttonCheck} onPress={onSubmit}>
        <Text style={styles.textButton}>KIỂM TRA</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    width: Mixins.WINDOW_WIDTH - 20,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
    justifyContent: 'space-around',
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
  buttonCheck: {
    width: 180,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.BLUE_LIGHT,
    borderRadius: 10,
    marginTop: 30,
  },
  textButton: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
  iconRight: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 5,
  },
})
export default WriteQuestion

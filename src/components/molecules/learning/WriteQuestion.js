import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Button } from 'native-base'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import HeaderTest from '../../atoms/question/HeaderTest'
import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'

const WriteQuestion = () => {
  const [answer, setAnswer] = useState('')
  return (
    <View style={styles.container}>
      <HeaderTest />
      <View style={styles.block}>
        <Icon name="volume-high" style={styles.icon} />
      </View>
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
        onTextChange={(code) => setAnswer(code)}
        keyboardType="email-address"
        codeLength={6}
      />

      <Button style={styles.buttonCheck}>
        <Text style={styles.textButton}>KIỂM TRA</Text>
      </Button>
      <Button info style={styles.buttonLearn}>
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
  block: {
    width: Mixins.WINDOW_WIDTH - 20,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 20,
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
  buttonLearn: {
    width: Mixins.WINDOW_WIDTH,
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_DARK,
    position: 'absolute',
    bottom: 0,
    marginBottom: 66,
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

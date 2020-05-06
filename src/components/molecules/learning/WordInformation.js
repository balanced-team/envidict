import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Colors, Typography, Mixins } from '../../../styles'

const WordInformation = (props) => {
  const { isCorrect, question } = props
  return (
    <View
      style={[
        styles.block,
        styles.inLine,
        ...[
          isCorrect === true ? styles.correct : isCorrect === false ? styles.wrong : [],
        ],
      ]}
    >
      <View>
        <Text
          style={[
            styles.text,
            ...[
              isCorrect === true
                ? styles.correctText
                : isCorrect === false
                ? styles.wrongText
                : [],
            ],
          ]}
        >
          {question.word}
        </Text>
        <Text
          style={[
            styles.text,
            { fontSize: Typography.FONT_SIZE_16, color: Colors.BLUE_LIGHT },
          ]}
        >
          {question.pronouce}
        </Text>
        <Text style={[styles.description]}>{question.description}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="volume-high" style={styles.icon} />
      </TouchableOpacity>
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
    marginVertical: 20,
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
    color: Colors.BLUE_DARK,
    fontWeight: 'bold',
  },
  iconRight: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 5,
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    paddingLeft: 12,
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
  correctText: {
    color: Colors.TEXT_SUCCESS,
  },
  wrongText: {
    color: Colors.TEXT_FAILED,
  },
})

export default WordInformation

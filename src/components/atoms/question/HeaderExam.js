import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { Colors, Typography, Mixins } from '../../../styles'

const HeaderExam = (props) => {
  const { numCorrect, currentQuestionIndex, numQuestion } = props
  return (
    <View style={styles.container}>
      <View style={styles.inLine}>
        <View style={[styles.block, styles.inLine]}>
          <Icon name="question" type="AntDesign" style={styles.icon} />
          <View>
            <Text style={styles.text}>Câu</Text>
            <Text style={styles.text}>
              {currentQuestionIndex + 1 + '/' + numQuestion}
            </Text>
          </View>
        </View>
        <View style={[styles.block, styles.inLine]}>
          <Icon
            name="check"
            type="AntDesign"
            style={[styles.icon, { color: Colors.TEXT_SUCCESS }]}
          />
          <View>
            <Text style={styles.textCorrect}>Chính xác</Text>
            <Text style={styles.textCorrect}>{numCorrect}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  block: {
    width: (Mixins.WINDOW_WIDTH - 50) / 2,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
  },
  text: {
    color: Colors.BLUE_TEXT,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textCorrect: {
    color: Colors.TEXT_SUCCESS,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.BLUE_DARK,
  },
})
export default HeaderExam

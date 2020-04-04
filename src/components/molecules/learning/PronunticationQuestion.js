import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Separator, Card, Button } from 'native-base'

import HeaderExam from '../../atoms/question/HeaderExam'
import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'

const PronunticationQuestion = () => {
  return (
    <View style={styles.container}>
      <HeaderExam />

      <View style={styles.block}>
        <Icon name="volume-high" style={styles.icon} />
      </View>

      <Text style={styles.text}>Nghe và chọn câu trả lời</Text>
      <Card style={styles.card}>
        <AnswerLine answer="disapear" />
        <AnswerLine answer="casually" />
        <AnswerLine answer="verbally" />
        <AnswerLine answer="outdated" />
      </Card>
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
    justifyContent: 'center',
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
  card: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 200,
    marginTop: 10,
    justifyContent: 'space-evenly',
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
  iconRight: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 5,
  },
})
export default PronunticationQuestion

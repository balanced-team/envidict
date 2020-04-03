import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Button, Card } from 'native-base'

import HeaderTest from '../../atoms/question/HeaderTest'
import AnswerLine from '../../atoms/question/AnswerLine'
import { Colors, Typography, Mixins } from '../../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const VocabularyQuestion = () => {
  return (
    <View style={styles.container}>
      <HeaderTest />

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
        <AnswerLine answer="Biến mất" />
        <AnswerLine answer="Xuất hiện" />
        <AnswerLine answer="Quá hạn" />
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
  inLine: {
    flexDirection: 'row',
  },
  block: {
    width: 340,
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
  buttonLearn: {
    width: Mixins.WINDOW_WIDTH,
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_DARK,
    position: 'absolute',
    bottom: 0,
    marginBottom: 130,
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
export default VocabularyQuestion

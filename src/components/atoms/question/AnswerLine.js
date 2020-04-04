import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

import { Colors, Typography } from '../../../styles'

const AnswerLine = (props) => {
  const { answer } = props
  return (
    <View style={styles.inLine}>
      <Icon name="circle" type="Entypo" style={styles.icon} />
      <Text style={styles.text}>{answer}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  inLine: {
    flexDirection: 'row',
    paddingLeft: 30,
  },
  icon: {
    fontSize: 20,
    color: Colors.BLUE_LIGHT,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    paddingLeft: 10,
  },
})
export default AnswerLine

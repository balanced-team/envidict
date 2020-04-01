import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Icon } from 'native-base'

import LessonContent from '../components/atoms/lesson/LessonContent'
import { Colors, Mixins, Typography } from '../styles'

const LessonDetail = ({ navigation }) => {
  const onClickLearnNow = () => {
    navigation.navigate('LearnNow')
  }
  return (
    <View>
      <LessonContent />
      <Button info style={styles.buttonLearn} onPress={onClickLearnNow}>
        <Text style={styles.textButton}>HỌC NGAY</Text>
        <Icon name="doubleright" type="AntDesign" style={styles.icon} />
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonLearn: {
    position: 'absolute',
    bottom: 0,
    width: Mixins.WINDOW_WIDTH,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
  icon: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 5,
  },
})
export default LessonDetail

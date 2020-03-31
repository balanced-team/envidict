import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Content, Left, Body } from 'native-base'
import { Typography, Colors } from '../../../styles'

const ListItemCourses = (props) => {
  const { image, title, subTitle, onGoToLessonDetail } = props

  return (
    <TouchableOpacity onPress={onGoToLessonDetail}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.subView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.SECONDARY_LIGHT,
    borderWidth: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  subView: {
    paddingLeft: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: 'bold',
    color: Colors.BLUE_TITLE,
  },
  subTitle: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE_TRANSLATE,
  },
})
export default ListItemCourses

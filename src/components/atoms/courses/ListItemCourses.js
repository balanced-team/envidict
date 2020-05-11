import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Typography, Colors } from '../../../styles'

const ListItemCourses = (props) => {
  const { image, title, subTitle, onGoToLessonDetail } = props

  return (
    <TouchableOpacity onPress={() => onGoToLessonDetail(props.id, props.image)}>
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
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  subView: {
    paddingLeft: 10,
    marginRight: 100,
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

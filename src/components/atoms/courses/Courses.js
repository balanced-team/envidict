import React, { useState, useEffect, useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { View, List, ListItem } from 'native-base'
import * as Animatable from 'react-native-animatable'

import { Typography, Colors } from '../../../styles'
import ListItemCourses from './ListItemCourses'
import { topicStoreContext } from '../../../contexts'

const coursesImages = [
  {
    image: 'https://cdn.iconicjob.vn/prod/wp-content/uploads/2018/01/%E1%BA%A3nh-1.jpg',
    title: 'Từ vựng phỏng vấn, xin việc',
    subTitle: 'Số bài học: 20',
  },
  {
    image: 'https://i.imgur.com/VqZQVGK.jpg',
    title: 'Từ vựng chuyên ngành kế toán',
    subTitle: 'Số bài học: 30',
  },
  {
    image: 'https://cie.iiit.ac.in/wp-content/uploads/2020/03/tech-bytes-cie.jpg',
    title: 'Từ vựng chuyên ngành Công nghệ thông tin',
    subTitle: 'Số bài học: 24',
  },
  {
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkurtbadenhausen%2Ffiles%2F2018%2F01%2Fbank.jpg',
    title: 'Từ vựng chuyên ngành Ngân hàng',
    subTitle: 'Số bài học: 35',
  },
  {
    image: 'https://comendadormarcioborlenghifasano.files.wordpress.com/2019/03/lei.jpg',
    title: 'Từ vựng chuyên ngành Luật',
    subTitle: 'Số bài học: 40',
  },
  {
    image:
      'https://lh3.googleusercontent.com/proxy/FzMWix8P_whTkg5OyjXVs4a4LNhPxARQcu4jCQXcckJz22kOigkzsZwz7vfYtQzmqOwbfGrN1BWqXK66r4brTIpnoXcVISJMEUQjr12Rx4s0t05IbapkNi9b0_-tQERsmOmlmggyoAoNCP0',
    title: 'Từ vựng Văn phòng',
    subTitle: 'Số bài học: 20',
  },
]

const Courses = (props) => {
  const { coursesName, onGoToLessonDetail } = props

  const topicStore = useContext(topicStoreContext)

  return (
    <View>
      <Text style={styles.coursesName}>{coursesName}</Text>
      <List>
        {topicStore.topics.map((course, i) => (
          <Animatable.View key={i} animation="flipInX" duration={500 + i * 200}>
            <ListItem noIndent>
              <ListItemCourses
                key={course.id}
                id={course.id}
                image={coursesImages[i].image}
                title={course.name}
                subTitle={'Số bài học: ' + course.lessonIds.length}
                onGoToLessonDetail={onGoToLessonDetail}
              />
            </ListItem>
          </Animatable.View>
        ))}
      </List>
    </View>
  )
}
const styles = StyleSheet.create({
  coursesName: {
    fontSize: Typography.FONT_SIZE_18,
    paddingLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.SECONDARY_LIGHTEST,
    borderBottomColor: Colors.SECONDARY_LIGHT,
    borderBottomWidth: 0.7,
  },
})
export default Courses

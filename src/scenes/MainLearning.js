import React, { useState, useEffect } from 'react'
import { Alert, BackHandler, Text } from 'react-native'
import { List, Separator } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import ListItemCourses from '../components/atoms/courses/ListItemCourses'
import CurrentVocabularies from '../components/molecules/home/CurrentVocabularies'
import Lesson from '../components/atoms/lesson/Lesson'

const MainLearning = ({ navigation }) => {
  return (
    <MainLayout>
      <ListItemCourses
        image="https://reactjs.org/logo-og.png"
        title="600 Từ vựng TOEIC43"
        subTitle="Số bài học: 50"
      />
      <CurrentVocabularies
        onPress={() => {
          navigation.navigate('LessonDeatail')
        }}
      />
      <Separator>
        <Text>Danh sách bài đã học</Text>
      </Separator>
      <Lesson />
      <Lesson />
    </MainLayout>
  )
}
export default MainLearning

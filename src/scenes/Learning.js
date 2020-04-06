import React, { useEffect } from 'react'
import { ScrollView, Button, Text, Alert, BackHandler } from 'react-native'

import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import Courses from '../components/atoms/courses/Courses'

const Learning = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  const handleNavigate = () => {
    navigation.navigate('LessonList')
  }

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <Courses
        key={1}
        coursesName="Ôn luyện giao tiếp cơ bản"
        onGoToLessonDetail={handleNavigate}
      />
      <Courses key={2} coursesName="Ôn luyện TOEIC" onGoToLessonDetail={handleNavigate} />
    </MainLayout>
  )
}

export default Learning

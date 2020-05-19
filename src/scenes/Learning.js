import React, { useEffect } from 'react'
import { ScrollView, Button, Text, Alert, BackHandler } from 'react-native'

import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import Courses from '../components/atoms/courses/Courses'
import { RoutesConstants } from '../navigations/route-constants'

const Learning = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  const handleNavigate = (courseId, image) => {
    navigation.navigate(RoutesConstants.LessonList, { courseId: courseId, image: image })
  }

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={true}>
      <Courses
        key={'course 1'}
        coursesName="Ôn luyện giao tiếp cơ bản"
        onGoToLessonDetail={handleNavigate}
      />
      <Courses
        key={'course 2'}
        coursesName="Ôn luyện TOEIC"
        onGoToLessonDetail={handleNavigate}
      />
    </MainLayout>
  )
}

export default Learning

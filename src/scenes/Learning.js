import React, { useEffect } from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import Courses from '../components/atoms/courses/Courses'

const Learning = () => {

  return (
    <View>
      <Courses />
    </View>
  )
}

export default Learning

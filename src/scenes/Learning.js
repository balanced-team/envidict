import React from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import { useBackHandleToExitApp } from '../hooks'

const Learning = () => {
  useBackHandleToExitApp();

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <Text>Home</Text>
    </MainLayout>
  )
}

export default Learning

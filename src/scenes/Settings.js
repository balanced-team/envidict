import React, { useEffect } from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'

const Settings = () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout>
      <Text>This is Learning</Text>
    </MainLayout>
  )
}

export default Settings

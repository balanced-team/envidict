import React, { useEffect } from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'

const Home = () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout>
      <Text>This is Home</Text>
    </MainLayout>
  )
}

export default Home

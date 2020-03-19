import React, { useEffect } from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'

const Favorite = () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout>
      <Text>This is Favorite</Text>
    </MainLayout>
  )
}

export default Favorite

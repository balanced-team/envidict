import React, { useEffect } from 'react'
import { Text, Alert, BackHandler } from 'react-native'
import { View } from 'native-base'

import { backHandleToExitApp } from '../utils'

const Home = () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

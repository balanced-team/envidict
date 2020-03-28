import React, { useEffect } from 'react'
import { Text, Alert, BackHandler, Button } from 'react-native'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'

const Favorite = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <Text>This is Favorite</Text>
      <Button title="Click Me" onPress={() => navigation.navigate('WordView')} />
      <Button title="Go Favorite Again" onPress={() => navigation.push('Favorite')} />
      <Button title="Go Home" onPress={() => navigation.push('Home')} />
    </MainLayout>
  )
}

export default Favorite

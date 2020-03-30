import React, { useEffect } from 'react'
import { Text, Button, Alert, BackHandler } from 'react-native'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'

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

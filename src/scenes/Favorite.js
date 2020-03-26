import React from 'react'
import { Text, Button } from 'react-native'
import { useBackHandleToExitApp } from '../hooks'
import MainLayout from '../components/templates/MainLayout'

const Favorite = ({ navigation }) => {
  useBackHandleToExitApp()

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

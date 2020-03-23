import React, { useEffect } from 'react'
import { Text, Alert, BackHandler, Button, StyleSheet } from 'react-native'
import { View, Container } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'

const Favorite = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout>
      <Text>This is Favorite</Text>
      <Button title="Click Me" onPress={() => navigation.navigate('WordView')} />
      <Button title="Go Favorite Again" onPress={() => navigation.push('Favorite')} />
      <Button title="Go Home" onPress={() => navigation.push('Home')} />
    </MainLayout>
  )
}

export default Favorite

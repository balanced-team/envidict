import React, { useEffect } from 'react'
import { Text, Alert, BackHandler, Button } from 'react-native'
import { View, Container } from 'native-base'


import { backHandleToExitApp } from '../utils'

const Favorite = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <Container>
      <Text>Favorite</Text>
      <Button title="ClickMe" onPress={() => navigation.navigate('WordView')} />
      <Button title="Go again" onPress={() => navigation.push('Favorite')} />
    </Container>
  )
}

export default Favorite

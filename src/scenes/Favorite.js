import React, { useEffect } from 'react'
import { Text, Button, Alert, BackHandler, List } from 'react-native'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'
import ListItemWord from '../components/molecules/favorite/ListItemWord'

const Favorite = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <Button
        title="Click Me"
        onPress={() => {
          navigation.navigate('WordView')
        }}
      />
    </MainLayout>
  )
}

export default Favorite

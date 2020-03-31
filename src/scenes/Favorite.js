import React, { useEffect } from 'react'
import { Text, Button, Alert, BackHandler, List } from 'react-native'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'
import ListItemWord from '../components/molecules/favorite/ListItemWord'

const Favorite = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])
  const onGoToWordView = () => {
    navigation.navigate('WordView')
  }
  return (
    <MainLayout voiceButtonIsVisible={true}>
      <ListItemWord
        word="representatives"
        type="adjective"
        onGoToWordView={onGoToWordView}
      />
      <ListItemWord word="compacity" type="adjective" onGoToWordView={onGoToWordView} />
      <ListItemWord word="reduction" type="noun" onGoToWordView={onGoToWordView} />
      <ListItemWord word="capacity" type="noun" onGoToWordView={onGoToWordView} />
      <ListItemWord word="initiavtive" type="noun" onGoToWordView={onGoToWordView} />
    </MainLayout>
  )
}

export default Favorite

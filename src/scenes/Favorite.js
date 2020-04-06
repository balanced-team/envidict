import React, { useEffect, useContext, useState } from 'react'
import { Text, Button, Alert, BackHandler, ScrollView, ListView } from 'react-native'
import { View, List } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'
import ListItemWord from '../components/molecules/favorite/ListItemWord'
import { dictStoreContext } from '../contexts'
import { RoutesConstants } from '../navigations/route-constants'

const words = ['representative', 'presentation', 'reduction', 'capacity']

const Favorite = ({ navigation }) => {
  const dicStore = useContext(dictStoreContext)
  const [wordDetailsList, setWordDetailsList] = useState([])

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
    let data = []
    words.forEach((word) => {
      const result = dicStore.findWord(word)
      data.push(result)
    })
    setWordDetailsList(data)
  }, [])

  const onGoToWordView = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout voiceButtonIsVisible={true}>
      {wordDetailsList.map((word, i) => (
        <ListItemWord key={i} word={word} onGoToWordView={onGoToWordView} />
      ))}
    </MainLayout>
  )
}

export default Favorite

import React, { useEffect, useContext, useState } from 'react'
import { Text, Alert, BackHandler, Button } from 'react-native'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import { dictStoreContext } from '../contexts'
import { observer } from 'mobx-react'

const Favorite = observer(({ navigation }) => {
  const dicStore = useContext(dictStoreContext)
  const [word, setWord] = useState({})

  useEffect(() => {
    const fetchWord = async () => {
      const word = await dicStore.findWord('hello')
      console.log(word)
      return word
    }
    backHandleToExitApp(Alert, BackHandler)
    setWord(fetchWord())
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
    <Text>{word.word}</Text>
      <Button
        title="Click Me"
        onPress={() => {
          navigation.navigate('WordView')
        }}
      />
      <Button title="Go Favorite Again" onPress={() => navigation.push('Favorite')} />
      <Button title="Go Home" onPress={() => navigation.push('Home')} />
      <Text></Text>
    </MainLayout>
  )
})

export default Favorite

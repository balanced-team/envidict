import React, { useState, useContext, useEffect } from 'react'
import { List } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import WordItem from '../components/atoms/ListItemVocabulary/WordItem'
import { RoutesConstants } from '../navigations/route-constants'
import { dictStoreContext } from '../contexts'

const wordList = [
  'good',
  'allocate',
  'compatible',
  'delete',
  'delete',
  'duplicate',
  'failure',
  'ignore',
  'figure',
  'search',
]

const ListWord = ({ navigation }) => {
  const [words, setWords] = useState([])

  const dicStore = useContext(dictStoreContext)

  useEffect(() => {
    let data = []
    wordList.forEach((word) => {
      const result = dicStore.findWord(word)
      data.push(result)
    })
    setWords(data)
  }, [])

  const onPressListItem = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout voiceButtonIsVisible={false}>
      <List>
        {words.map((word, i) => (
          <WordItem key={'word' + i} word={word} onPressListItem={onPressListItem} />
        ))}
      </List>
    </MainLayout>
  )
}

export default ListWord

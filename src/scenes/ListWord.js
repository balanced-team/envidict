import { List } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import WordItem from '../components/atoms/ListItemVocabulary/WordItem'
import MainLayout from '../components/templates/MainLayout'
import { dictStoreContext } from '../contexts'
import { RoutesConstants } from '../navigations/route-constants'

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

  const dictStore = useContext(dictStoreContext)

  useEffect(() => {
    let data = []
    wordList.forEach(async (word) => {
      const result = await dictStore.findWord(word)
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

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
    const setUp = async () => {
      for (let i = 0; i < wordList.length; i++) {
        const result = await dictStore.findWord(wordList[i])
        if (result !== undefined) {
          data.push(result)
        }
      }

      setWords(data)
    }
    setUp()
  }, [])

  const onPressListItem = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={false}>
      <List>
        {words.length > 0 &&
          words.map((word, i) => {
            return (
              <WordItem key={'word' + i} word={word} onPressListItem={onPressListItem} />
            )
          })}
      </List>
    </MainLayout>
  )
}

export default ListWord

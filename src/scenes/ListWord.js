import React, { useState } from 'react'
import { List } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import ListItemVocabulary from '../components/atoms/ListItemVocabulary/ListItemVocabulary'

const ArrWord = [
  {
    id: 1,
    word: 'representatives',
  },
  {
    id: 2,
    word: 'learn',
  },
  {
    id: 3,
    word: 'schedule',
  },
  {
    id: 4,
    word: 'relinquish',
  },
]

const ListWord = ({ navigation }) => {
  const [arrWord, setArrWord] = useState(ArrWord)

  return (
    <MainLayout voiceButtonIsVisible={false}>
      <List>
        {arrWord.map((item) => (
          <ListItemVocabulary
            key={item.id}
            nameVocabulary={item.word}
            onPress={() => {
              navigation.navigate('WordView')
            }}
          />
        ))}
      </List>
    </MainLayout>
  )
}

export default ListWord

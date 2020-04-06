import React, { useState, useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { List } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import ListItemVocabulary from '../components/atoms/ListItemVocabulary/ListItemVocabulary'

const ArrVocabulary = [
  {
    id: 1,
    name: 'Luyện thi TOEIC',
  },
  {
    id: 2,
    name: 'Tiếng Anh cơ bản',
  },
  {
    id: 3,
    name: 'Tiếng Anh cho người mất gốc',
  },
  {
    id: 4,
    name: '600 từ vựng TOEIC thường gặp',
  },
  {
    id: 5,
    name: 'Tiếng Anh chuyên ngành Luật',
  },
  {
    id: 6,
    name: 'Tiếng anh chuyên ngành Tài chính',
  },
]

const Vocabulary = ({ navigation }) => {
  const [arrVocabulary, setArrVocabulary] = useState(ArrVocabulary)

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <List>
        {arrVocabulary.map((item) => (
          <ListItemVocabulary
            key={item.id}
            nameVocabulary={item.name}
            onPressListItem={() => navigation.navigate('ListWord')}
          />
        ))}
      </List>
    </MainLayout>
  )
}

export default Vocabulary

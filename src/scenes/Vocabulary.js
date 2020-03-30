import React, { useState, useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { List } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import ListItemVocabulary from '../components/atoms/ListItemVocabulary/ListItemVocabulary'

const ArrVocabulary = [
  {
    id: 1,
    name: 'Luyện thi toeic',
  },
  {
    id: 2,
    name: 'Tiếng anh cơ bản',
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
            onPress={() => navigation.navigate('ListWord')}
          />
        ))}
      </List>
    </MainLayout>
  )
}

export default Vocabulary

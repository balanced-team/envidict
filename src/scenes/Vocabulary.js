import React, { useState, useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { List } from 'native-base'
import * as Animatable from 'react-native-animatable'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import ListItemVocabulary from '../components/atoms/ListItemVocabulary/ListItemVocabulary'
import { RoutesConstants } from '../navigations/route-constants'

const ArrVocabulary = [
  {
    id: 1,
    name: 'Tiếng Anh cơ bản',
  },
  {
    id: 2,
    name: 'Tiếng Anh cho người mới bắt đầu',
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
  {
    id: 7,
    name: 'Tiếng anh chuyên ngành Viễn thông',
  },
  {
    id: 8,
    name: 'Tiếng anh giao tiếp',
  },
  {
    id: 9,
    name: 'Luyện thi TOEFL cơ bản',
  },
  {
    id: 10,
    name: 'Luyện thi TOEFL nâng cao ',
  },
  {
    id: 11,
    name: 'Luyện thi IELTS cơ bản',
  },
]

const Vocabulary = ({ navigation }) => {
  const [arrVocabulary, setArrVocabulary] = useState(ArrVocabulary)

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={true}>
      <List>
        {arrVocabulary.map((item, i) => (
          <Animatable.View
            animation="lightSpeedIn"
            duration={300 + i * 200}
            key={'vocabulary-' + item.id}
          >
            <ListItemVocabulary
              nameVocabulary={item.name}
              onPressListItem={() => navigation.navigate(RoutesConstants.ListWord)}
            />
          </Animatable.View>
        ))}
      </List>
    </MainLayout>
  )
}

export default Vocabulary

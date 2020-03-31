import React from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { View, List, ListItem } from 'native-base'

import { Colors } from '../../../styles'
import FlashCard from '../../molecules/word/FlashCard'

const recentWords = [
  {
    id: 1,
    word: 'beautiful',
    pronounce: '/biutiful/',
    type: 'tính từ',
    explain: 'xinh xắn, đáng yêu',
  },
  {
    id: 2,
    word: 'beautiful',
    pronounce: '/biutiful/',
    type: 'tính từ',
    explain: 'xinh xắn, đáng yêu',
  },
  { id: 3, word: 'forbidden', pronounce: '/ferbiden/', type: 'động từ', explain: 'cấm' },
  {
    id: 4,
    word: 'beautiful',
    pronounce: '/biutiful/',
    type: 'tính từ',
    explain: 'xinh đẹp',
  },
  { id: 5, word: 'run', pronounce: '/biutiful/', type: 'tính từ', explain: 'chạy' },
  { id: 6, word: 'card', pronounce: '/biutiful/', type: 'tính từ', explain: 'thẻ' },
  { id: 7, word: 'nice', pronounce: '/biutiful/', type: 'tính từ', explain: 'tốt' },
  { id: 8, word: 'love', pronounce: '/biutiful/', type: 'tính từ', explain: 'yêu' },
]

const LessonContent = () => {
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        data={recentWords}
        renderItem={({ item }) => (
          <FlashCard
            word={item.word}
            pronounce={item.pronounce}
            type={item.type}
            explain={item.explain}
          />
        )}
        keyExtractor={(item) => {
          item.id
        }}
      ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default LessonContent

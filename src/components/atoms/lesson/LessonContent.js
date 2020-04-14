import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

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
  { id: 3, word: 'forbidden', pronounce: '/ferbiden/', type: 'động từ', explain: 'cấm' },
  { id: 5, word: 'run', pronounce: '/biutiful/', type: 'tính từ', explain: 'chạy' },
  { id: 6, word: 'card', pronounce: '/biutiful/', type: 'tính từ', explain: 'thẻ' },
  { id: 7, word: 'nice', pronounce: '/biutiful/', type: 'tính từ', explain: 'tốt' },
  { id: 8, word: 'love', pronounce: '/biutiful/', type: 'tính từ', explain: 'yêu' },
]

const LessonContent = () => {
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={styles.row}
      data={recentWords}
      _renderItem={({ item }) => (
        <FlashCard
          key={'word-${item.id}'}
          word={item.word}
          pronounce={item.pronounce}
          type={item.type}
          explain={item.explain}
        />
      )}
      keyExtractor={(item) => {
        item.id.toString()
      }}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default LessonContent

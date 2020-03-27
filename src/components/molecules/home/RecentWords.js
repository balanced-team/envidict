import React from 'react'
import { Text, View, List, ListItem } from 'native-base'
import { StyleSheet } from 'react-native'
import MiniCard from '../word/MiniCard'
import { Colors } from '../../../styles'

const recentWords = [
  { word: 'beautiful', type: 'tính từ' },
  { word: 'run', type: 'động từ' },
  { word: 'card', type: 'danh từ' },
  { word: 'nice', type: 'tính từ' },
  { word: 'love', type: 'động từ' }
]

const RecentWords = () => {
  return (
    <View>
      <Text style={styles.tittle}>Tìm kiếm gần đây</Text>
      <List
        horizontal={true}
        dataArray={recentWords}
        renderRow={(word) => (
          <ListItem>
            <MiniCard data={word} />
          </ListItem>
        )}
        s
      ></List>
    </View>
  )
}

const styles = StyleSheet.create({
  tittle: {
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.BLUE_TITLE
  }
})
export default RecentWords

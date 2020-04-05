import React, { useEffect, useContext } from 'react'
import { Text, View, List, ListItem } from 'native-base'
import { StyleSheet } from 'react-native'

import MiniCard from '../word/MiniCard'
import { Colors } from '../../../styles'
import { dictStoreContext } from '../../../contexts'

let recentWords = []

const words = ['beautiful', 'run', 'card', 'nice', 'love']

const RecentWords = (props) => {
  const { onGoToWordView } = props
  const dictStore = useContext(dictStoreContext)

  useEffect(() => {
    words.forEach(async (word) => {
      const result = dictStore.findWord(word)
      recentWords.push(result)
    })
  }, [])

  return (
    <View>
      <Text style={styles.tittle}>Tìm kiếm gần đây</Text>
      <List
        horizontal
        dataArray={recentWords}
        renderRow={(word, i) => (
          <ListItem noBorder key={i} onPress={() => onGoToWordView(word)}>
            <MiniCard data={word} />
          </ListItem>
        )}
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
    color: Colors.BLUE_TITLE,
  },
})
export default RecentWords

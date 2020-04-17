import { List, ListItem, Text, View } from 'native-base'
import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { dictStoreContext } from '../../../contexts'
import { Colors } from '../../../styles'
import MiniCard from '../word/MiniCard'

let recentWords = []

const words = ['beautiful', 'run', 'card', 'nice', 'love']

const RecentWords = (props) => {
  const { onGoToWordView } = props
  const dictStore = useContext(dictStoreContext)

  useEffect(() => {
    words.forEach(async (word) => {
      const result = await dictStore.findWord(word)
      recentWords.push(result)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Tìm kiếm gần đây</Text>
      <List
        horizontal
        dataArray={recentWords}
        renderRow={(word, i) => (
          <ListItem
            noBorder
            key={'word' + i.toString()}
            onPress={() => onGoToWordView(word)}
          >
            <MiniCard data={word} />
          </ListItem>
        )}
      ></List>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tittle: {
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.BLUE_TITLE,
  },
})
export default RecentWords

import { List, ListItem, Text, View } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { dictStoreContext } from '../../../contexts'
import { Colors } from '../../../styles'
import MiniCard from '../word/MiniCard'

const RecentWords = (props) => {
  const { onGoToWordView } = props
  const dictStore = useContext(dictStoreContext)

  const [recentWords, setRecentsWord] = useState([])

  useEffect(() => {
    let recentWordList = []
    const setupRecentWord = async () => {
      const words = JSON.parse(await AsyncStorage.getItem('recentWords'))
      for (let i = words.length - 1; i >= 0; i--) {
        const result = await dictStore.findWord(words[i])
        if (result) {
          recentWordList.push(result)
        }
      }
      setRecentsWord(recentWordList)
    }
    setupRecentWord()
  }, [AsyncStorage.getItem('recentWords')])

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Tìm kiếm gần đây</Text>

      <List
        horizontal
        dataArray={recentWords}
        renderRow={(word, i) => (
          <ListItem noBorder onPress={() => onGoToWordView(word)}>
            <Animatable.View animation="fadeInRight" delay={i * 1000} duration={300}>
              <MiniCard data={word} />
            </Animatable.View>
          </ListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
      ></List>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

import { List, Spinner, View, Text } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import WordItem from '../components/atoms/ListItemVocabulary/WordItem'
import MainLayout from '../components/templates/MainLayout'
import { dictStoreContext } from '../contexts'
import { RoutesConstants } from '../navigations/route-constants'
import { StyleSheet } from 'react-native'
import { Mixins, Colors, Typography } from '../styles'

const wordList = [
  'good',
  'allocate',
  'compatible',
  'delete',
  'delete',
  'duplicate',
  'failure',
  'ignore',
  'figure',
  'search',
]

const ListWord = ({ navigation }) => {
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(true)

  const dictStore = useContext(dictStoreContext)

  useEffect(() => {
    let data = []
    setLoading(true)
    const setUp = async () => {
      for (let i = 0; i < wordList.length; i++) {
        const result = await dictStore.findWord(wordList[i])
        if (result !== undefined) {
          data.push(result)
        }
      }

      setWords(data)
      setLoading(false)
    }
    setUp()
  }, [])

  const onPressListItem = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={false}>
      {loading ? (
        <View style={styles.container}>
          <Spinner color={Colors.BLUE_DARK} />
          <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
        </View>
      ) : (
        <List>
          {words.length > 0 &&
            words.map((word, i) => {
              return (
                <WordItem
                  key={'word' + i}
                  word={word}
                  onPressListItem={onPressListItem}
                />
              )
            })}
        </List>
      )}
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Mixins.WINDOW_HEIGHT,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE_TEXT,
    textAlign: 'center',
  },
})

export default ListWord

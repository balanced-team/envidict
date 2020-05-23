import { Icon, Left, Right, Row, Text, View } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import randomWorder from 'random-words'

import { dictStoreContext, voiceStoreContext } from '../../../contexts'
import { Colors } from '../../../styles'
import { FONT_SIZE_12, FONT_SIZE_14 } from '../../../styles/typography'

const WordOfTheDay = (props) => {
  const { onGoToWordView } = props
  const dictStore = useContext(dictStoreContext)
  const voiceStore = useContext(voiceStoreContext)

  const [word, setWord] = useState({})
  useEffect(() => {
    const run = async () => {
      const random = randomWorder()
      setWord(await dictStore.findWord(random))
    }
    run()
  }, [])

  const getRandomWord = async () => {
    const random = randomWorder()
    setWord(await dictStore.findWord(random))
  }

  return (
    <Animatable.View animation="bounceInDown">
      <TouchableOpacity onPress={() => onGoToWordView(word)}>
        <View style={styles.card}>
          <Row>
            <Left>
              <View style={styles.row}>
                <Icon name="md-calendar" style={[styles.icon, styles.blueDarkColor]} />
                <Text style={styles.title}>TỪ CỦA HÔM NAY</Text>
              </View>
            </Left>
            <Right>
              <View style={styles.row}>
                <TouchableOpacity onPress={getRandomWord}>
                  <Icon name="md-sync" style={[styles.icon, styles.blueDarkColor]} />
                </TouchableOpacity>
              </View>
            </Right>
          </Row>
          <View style={styles.row}>
            <Text style={styles.word}>{word ? word.word : ''}</Text>
            <TouchableOpacity onPress={() => voiceStore.speak(word.word)}>
              <Icon name="volume-high" style={[styles.icon, styles.blueDarkColor]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.meaning}>{word ? word.description : ''}</Text>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 2,
    backgroundColor: Colors.WHITE,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  word: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.BLUE_TEXT,
    marginVertical: 10,
  },
  type: {
    color: Colors.BLUE_TRANSLATE,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_14,
  },
  meaning: {
    color: Colors.BLUE_EXPLAIN,
    fontSize: FONT_SIZE_14,
    marginTop: 5,
  },
  icon: {
    marginHorizontal: 5,
    fontSize: 26,
  },
  blueDarkColor: {
    color: Colors.BLUE_MEDIUM,
  },
  title: {
    color: Colors.SECONDARY,
    fontSize: FONT_SIZE_12,
  },
})

export default WordOfTheDay

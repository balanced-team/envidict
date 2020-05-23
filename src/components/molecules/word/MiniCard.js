import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, Icon } from 'native-base'

import { Colors } from '../../../styles'
import { FONT_SIZE_14 } from '../../../styles/typography'
import { voiceStoreContext } from '../../../contexts'

const MiniCard = (props) => {
  const { word, description } = props.data

  const voiceStore = useContext(voiceStoreContext)

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.word}>{word}</Text>
        <TouchableOpacity onPress={() => voiceStore.speak(word)}>
          <Icon name="volume-high" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.type}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 2,
    backgroundColor: Colors.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    width: 150,
  },
  word: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.BLUE_EXPLAIN,
  },
  type: {
    color: Colors.BLUE_TYPE,
    fontSize: FONT_SIZE_14,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: Colors.BLUE_EXPLAIN,
  },
})

export default MiniCard

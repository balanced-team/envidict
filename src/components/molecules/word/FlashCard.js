import React, { useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, Icon } from 'native-base'
import * as Animatable from 'react-native-animatable'

import { Colors, Typography } from '../../../styles'
import { FONT_SIZE_14 } from '../../../styles/typography'
import { RoutesConstants } from '../../../navigations/route-constants'
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import { voiceStoreContext } from '../../../contexts'

const FlashCard = (props) => {
  const { word, pronounce, type, explain, data } = props
  let viewRef

  const handleViewRef = (ref) => (viewRef = ref)

  const voiceStore = useContext(voiceStoreContext)

  const navigator = useNavigation()
  const goToWordView = (word) => {
    viewRef.flipOutX(1000)
    navigator.navigate(RoutesConstants.WordView, { word })
    viewRef.fadeIn(500)
  }

  return (
    <Animatable.View ref={handleViewRef}>
      <TouchableWithoutFeedback onPress={() => goToWordView(data)}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.word}>{word}</Text>
            <Icon name="heart" style={styles.icon} />
          </View>
          <View style={styles.row}>
            <Text style={styles.pronounce}>{pronounce}</Text>
            <TouchableOpacity onPress={() => voiceStore.speak(word)}>
              <Icon name="volume-high" style={styles.pronounceIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.explain}>{explain}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderColor: Colors.BLUE_DARK,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    width: 170,
    height: 185,
    marginTop: 10,
  },
  word: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: 'bold',
    color: Colors.BLUE_EXPLAIN,
    paddingTop: 10,
  },
  pronounce: {
    color: Colors.BLUE_LIGHT,
    fontSize: 13,
    fontStyle: 'italic',
  },
  pronounceIcon: {
    color: Colors.BLUE_LIGHT,
    fontSize: 20,
  },
  type: {
    color: Colors.BLUE_TRANSLATE,
    fontSize: FONT_SIZE_14,
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  explain: {
    fontSize: Typography.FONT_SIZE_16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
  },
  icon: {
    fontSize: 18,
    color: Colors.BLUE_EXPLAIN,
    paddingTop: 10,
  },
})

export default FlashCard

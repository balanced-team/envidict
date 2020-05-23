import React, { useContext } from 'react'
import * as Animatable from 'react-native-animatable'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Body, Right, Icon } from 'native-base'

import { Colors, Typography } from '../../../styles'
import { voiceStoreContext } from '../../../contexts'

const ListItemWord = (props) => {
  let wordRef
  const { word, onGoToWordView, onRemoveFavoriteWord } = props

  const voiceStore = useContext(voiceStoreContext)

  const handleRemoveFavoriteWord = () => {
    onRemoveFavoriteWord(word.word)
  }
  const handleWordRef = (ref) => (wordRef = ref)

  return (
    <Animatable.View ref={handleWordRef}>
      <ListItem noIndent onPress={() => onGoToWordView(word)}>
        <Body>
          <Text style={styles.vocabulary}>{word.word}</Text>
          <Text style={styles.type}>{word.description}</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => voiceStore.speak(word.word)}>
            <Icon style={styles.customIconVolume} name="volume-high" />
          </TouchableOpacity>
        </Right>
        <Right>
          <TouchableOpacity onPress={handleRemoveFavoriteWord}>
            <Icon style={styles.customIconHeart} name="md-heart" />
          </TouchableOpacity>
        </Right>
      </ListItem>
    </Animatable.View>
  )
}
const styles = StyleSheet.create({
  vocabulary: {
    color: Colors.BLUE_TITLE,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: Typography.FONT_SIZE_1,
    color: Colors.BLUE_TRANSLATE,
  },
  customIconVolume: {
    fontSize: 22,
    color: Colors.BLUE_DARK,
  },
  customIconHeart: {
    fontSize: 22,
    color: Colors.WARNING,
  },
})
export default ListItemWord

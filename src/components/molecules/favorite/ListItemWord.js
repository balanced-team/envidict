import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, View, Body, Button, Right, Icon } from 'native-base'

import { Colors, Typography } from '../../../styles'
import { InstanceSpeaker } from '../../../utils'
const ListItemWord = (props) => {
  const { word, type, onGoToWordView } = props
  return (
    <ListItem noIndent onPress={onGoToWordView}>
      <Body>
        <Text style={styles.vocabulary}>{word}</Text>
        <Text style={styles.type}>{type}</Text>
      </Body>
      <Right>
        <TouchableOpacity onPress={() => InstanceSpeaker.speak(word)}>
          <Icon style={styles.customIconVolume} name="volume-high" />
        </TouchableOpacity>
      </Right>
      <Right>
        <Icon style={styles.customIconHeart} name="md-heart" />
      </Right>
    </ListItem>
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

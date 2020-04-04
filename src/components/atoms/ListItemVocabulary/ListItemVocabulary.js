import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ListItem, View } from 'native-base'

import { Colors, Typography } from '../../../styles'

const ListItemVocabulary = (props, { navigation }) => {
  const { nameVocabulary, onPressListItem } = props
  return (
    <ListItem noIndent onPress={onPressListItem}>
      <Text style={styles.vocabulary}>{nameVocabulary}</Text>
    </ListItem>
  )
}
const styles = StyleSheet.create({
  vocabulary: {
    color: Colors.BLUE_TITLE,
    fontSize: Typography.LINE_HEIGHT_20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  },
})
export default ListItemVocabulary

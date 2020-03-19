import React from 'react'
import { Item, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../styles'

const SearchInput = () => {
  return (
    <Item rounded style={styles.searchInput}>
      <Icon name="ios-search" />
      <Input placeholder="Gõ từ để tra từ điển" />
    </Item>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    marginVertical: 8
  }
})

export default SearchInput

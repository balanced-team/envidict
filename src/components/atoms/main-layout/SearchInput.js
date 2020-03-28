import React from 'react'
import { Item, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../styles'

const SearchInput = () => {
  return (
    <Item rounded style={styles.searchInput}>
      <Icon name="search" />
      <Input placeholder="Gõ từ để tra từ điển" />
      <Icon name="close" />
    </Item>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    marginVertical: 10
  }
})

export default SearchInput

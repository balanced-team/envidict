import React, { useState } from 'react'
import { Item, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchInput = (props) => {
  const [text, setText] = useState('')

  const { onGoToSearchView, searchByKey, autoFocus, setWordList, setKey } = props
  return (
    <Item rounded style={styles.searchInput}>
      <Icon name="search" />
      <Input
        placeholder="Gõ từ để tra từ điển"
        autoFocus={autoFocus}
        onFocus={onGoToSearchView}
        onChangeText={(text) => {
          setText(text)
          searchByKey(text)
          setKey(text)
        }}
        value={text}
        autoCapitalize={'none'}
      />
      <TouchableOpacity
        onPress={() => {
          setText('')
          setKey('')
          setWordList([])
        }}
      >
        <Icon name="close" />
      </TouchableOpacity>
    </Item>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    marginVertical: 10,
  },
})

export default SearchInput

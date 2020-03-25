import React from 'react'
import { Header } from 'native-base'
import { StyleSheet } from 'react-native'

import SearchInput from '../../atoms/main-layout/SearchInput'
import VoiceButton from '../../atoms/main-layout/VoiceButton'
import { Colors } from '../../../styles'

const SearchHeader = (props) => {
  return (
    <Header style={styles.header}>
      <SearchInput />
      {props.voiceButtonIsVisible === true && <VoiceButton />}
    </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.BLUE_DARK
  }
})

export default SearchHeader

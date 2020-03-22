import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Textarea from 'react-native-textarea'
import { View } from 'native-base'

const NoteView = () => {
  return (
    <View style={styles.container}>
      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        // maxLength={120}
        placeholder={'Ghi chú'}
      />
    </View>
  )
}
export default NoteView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },

  textareaContainer: {
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4297d3'
  },
  textarea: {
    textAlignVertical: 'top',
    padding: 10,
    height: 180,
    fontSize: 14,
    color: '#044470'
  }
})

import React, { useEffect, useState } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import Constants from 'expo-constants'
import Textarea from 'react-native-textarea'
import { View, Button, Text, Icon, Toast } from 'native-base'

import { Colors } from '../../../styles/index'

const NoteView = (props) => {
  const { word } = props

  const [note, setNote] = useState('')

  useEffect(() => {
    const setUp = async () => {
      const notes = JSON.parse(await AsyncStorage.getItem('envidictNotes'))
      let savedNote
      if (notes === null) {
        await AsyncStorage.setItem('envidictNotes', JSON.stringify({}))
      } else {
        savedNote = notes[word.word]
        if (savedNote) {
          setNote(savedNote)
        }
      }
    }

    setUp()
  }, [word])

  const onSaveNote = async () => {
    let notes = JSON.parse(await AsyncStorage.getItem('envidictNotes'))
    notes[word.word] = note
    try {
      await AsyncStorage.setItem('envidictNotes', JSON.stringify(notes))
      Toast.show({ text: 'Lưu thành công!', type: 'success' })
    } catch (error) {
      Toast.show({ text: 'Lưu thất bại! Vui lòng thử lại', type: 'danger' })
    }
  }

  return (
    <View style={styles.container}>
      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        maxLength={120}
        placeholder={'Hãy lưu ghi chú của bạn về từ này'}
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Button style={styles.saveButton} onPress={onSaveNote}>
        <Icon name="md-save"></Icon>
        <Text>Lưu</Text>
      </Button>
    </View>
  )
}
export default NoteView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  textareaContainer: {
    height: 150,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.BLUE_LIGHT,
  },
  textarea: {
    textAlignVertical: 'top',
    padding: 10,
    height: 180,
    fontSize: 14,
    color: Colors.BLUE_TEXT,
  },
  saveButton: {
    width: 140,
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
})

import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Tabs, Tab } from 'native-base'
import NoteView from '../components/organisms/word-view/NoteView'
import DetailsView from '../components/organisms/word-view/DetailsView'

const WordView = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading="Translate">
          <DetailsView />
        </Tab>
        <Tab heading="Note">
          <NoteView />
        </Tab>
      </Tabs>
    </Container>
  )
}
export default WordView
styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#003a68'
  }
})

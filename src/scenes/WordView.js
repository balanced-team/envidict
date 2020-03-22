import React from 'react'
import { Text, StyleSheet, Row } from 'react-native'
import {
  Container,
  View,
  Button,
  Tabs,
  Tab,
  Icon,
  StyleProvider,
  Footer
} from 'native-base'

import NoteView from '../components/organisms/word-view/NoteView'
import DetailsView from '../components/organisms/word-view/DetailsView'

const WordView = () => {
  return (
    <Container>
      <Tabs>
        <Tab
          heading="Translate"
          tabStyle={{ backgroundColor: '#4297d3' }}
          activeTabStyle={{ backgroundColor: '#1c74bb' }}
        >
          <DetailsView />
        </Tab>
        <Tab
          heading="Note"
          tabStyle={{ backgroundColor: '#4297d3' }}
          activeTabStyle={{ backgroundColor: '#1c74bb' }}
        >
          <NoteView />
        </Tab>
      </Tabs>
      <View style={styles.remindView}>
        <Button bordered style={styles.customButonIconHeart}>
          <Icon style={styles.customIconHeart} name="md-heart-empty" />
        </Button>
        <Button bordered style={styles.customButonIconSearch}>
          <Icon style={styles.customIconSearch} name="search" />
        </Button>
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  remindView: {
    flex: 1,
    right: 5,
    margin: 5,
    bottom: 5,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  customButonIconHeart: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#ffff',
    borderRadius: 40,
    borderColor: '#ffff',
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 12
  },
  customButonIconSearch: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#1c74bb',
    borderRadius: 40,
    borderColor: '#1c74bb',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12
  },
  customIconHeart: {
    width: 20,
    height: 23,
    color: '#1c74bb'
  },
  customIconSearch: {
    width: 17,
    height: 23,
    color: '#fff'
  }
})
export default WordView

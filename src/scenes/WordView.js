import React from 'react'
import { Text, StyleSheet, Row } from 'react-native'
import { Container, View, Button, Tabs, Tab, Icon } from 'native-base'

import NoteView from '../components/organisms/word-view/NoteView'
import DetailsView from '../components/organisms/word-view/DetailsView'
import { Colors } from '../styles/index'

const WordView = () => {
  return (
    <Container>
      <Tabs>
        <Tab
          heading="Translate"
          tabStyle={{ backgroundColor: Colors.BLUE_LIGHT }}
          activeTabStyle={{ backgroundColor: Colors.BLUE_DARK }}
        >
          <DetailsView />
        </Tab>
        <Tab
          heading="Note"
          tabStyle={{ backgroundColor: Colors.BLUE_LIGHT }}
          activeTabStyle={{ backgroundColor: Colors.BLUE_DARK }}
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
    backgroundColor: Colors.WHITE,
    borderRadius: 40,
    borderColor: Colors.WHITE,
    marginRight: 5,
    shadowColor: Colors.BLACK,
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
    backgroundColor: Colors.BLUE_DARK,
    borderRadius: 40,
    borderColor: Colors.BLUE_DARK,
    shadowColor: Colors.BLACK,
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
    color: Colors.BLUE_DARK
  },
  customIconSearch: {
    width: 17,
    height: 23,
    color: Colors.WHITE
  }
})
export default WordView

import React, { useState, useEffect } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import { Container, View, Button, Tabs, Tab, Icon } from 'native-base'

import NoteView from '../components/organisms/word-view/NoteView'
import DetailsView from '../components/organisms/word-view/DetailsView'
import { Colors } from '../styles/index'
import { useNavigation } from '@react-navigation/native'
import { RoutesConstants } from '../navigations/route-constants'

const WordView = ({ route, navigation }) => {
  const { word } = route.params

  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = async () => {
    try {
      let favoriteWords = JSON.parse(await AsyncStorage.getItem('favoriteWords'))
      if (isFavorite) {
        const index = favoriteWords.indexOf(word.word)
        if (index !== -1) {
          favoriteWords.splice(index, 1)
        }
      } else {
        if (favoriteWords === null) {
          favoriteWords = []
        }
        favoriteWords.push(word.word)
      }
      await AsyncStorage.setItem('favoriteWords', JSON.stringify(favoriteWords))
    } catch (error) {
      console.error(error)
    }
    setIsFavorite((previousState) => !previousState)
  }

  useEffect(() => {
    const setUp = async () => {
      try {
        let favoriteWords = JSON.parse(await AsyncStorage.getItem('favoriteWords'))
        const index = favoriteWords.indexOf(word.word)
        if (index !== -1) {
          setIsFavorite(true)
        } else {
          setIsFavorite(false)
        }
      } catch (error) {
        console.error(error)
      }
    }
    setUp()
  }, [word])

  return (
    <Container>
      <Tabs>
        <Tab
          heading="Chi tiết"
          tabStyle={{ backgroundColor: Colors.BLUE_LIGHT }}
          activeTabStyle={{ backgroundColor: Colors.BLUE_DARK }}
        >
          <DetailsView isShowTranslate={true} word={word} />
        </Tab>
        <Tab
          heading="Ghi chú"
          tabStyle={{ backgroundColor: Colors.BLUE_LIGHT }}
          activeTabStyle={{ backgroundColor: Colors.BLUE_DARK }}
        >
          <NoteView word={word} />
        </Tab>
      </Tabs>
      <View style={styles.remindView}>
        <Button bordered style={styles.customButonIconHeart} onPress={toggleFavorite}>
          <Icon
            style={isFavorite ? styles.customIconFavorite : styles.customIconHeart}
            name={isFavorite ? 'md-heart' : 'md-heart-empty'}
          />
        </Button>
        <Button
          bordered
          style={styles.customButonIconSearch}
          onPress={() => navigation.navigate(RoutesConstants.SearchWord)}
        >
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
    justifyContent: 'space-between',
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
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 12,
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
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  customIconHeart: {
    width: 20,
    height: 23,
    color: Colors.BLUE_DARK,
  },
  customIconFavorite: {
    width: 20,
    height: 23,
    color: Colors.WARNING,
  },
  customIconSearch: {
    width: 17,
    height: 23,
    color: Colors.WHITE,
  },
})
export default WordView

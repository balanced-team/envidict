import React, { useContext, useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { Alert, BackHandler, AsyncStorage } from 'react-native'
import ListItemWord from '../components/molecules/favorite/ListItemWord'
import MainLayout from '../components/templates/MainLayout'
import { dictStoreContext } from '../contexts'
import { RoutesConstants } from '../navigations/route-constants'
import { backHandleToExitApp } from '../utils'

const Favorite = ({ navigation }) => {
  const dictStore = useContext(dictStoreContext)
  const [wordDetailsList, setWordDetailsList] = useState([])

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
    let data = []
    const setUp = async () => {
      const words = JSON.parse(await AsyncStorage.getItem('favoriteWords'))
      for (let i = words.length - 1; i >= 0; i--) {
        const result = await dictStore.findWord(words[i])
        data.push(result)
      }
      setWordDetailsList(data)
    }
    setUp()
  }, [AsyncStorage.getItem('favoriteWords')])

  const onRemoveFavoriteWord = async (word) => {
    let favoriteWords = JSON.parse(await AsyncStorage.getItem('favoriteWords'))
    if (!favoriteWords) {
      favoriteWords = []
    }
    const index = favoriteWords.indexOf(word)
    if (index !== -1) {
      favoriteWords.splice(index, 1)
      const wordDetailsIndex = wordDetailsList.findIndex((item) => item.word === word)
      let currenList = wordDetailsList
      currenList = currenList.splice(wordDetailsIndex, 1)
      setWordDetailsList(currenList)
    }
    await AsyncStorage.setItem('favoriteWords', JSON.stringify(favoriteWords))
  }

  const onGoToWordView = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={true}>
      {wordDetailsList.map((word, i) => (
        <Animatable.View
          key={'word' + i.toString()}
          animation="fadeInRight"
          duration={500 + i * 300}
        >
          <ListItemWord
            word={word}
            onGoToWordView={onGoToWordView}
            onRemoveFavoriteWord={onRemoveFavoriteWord}
          />
        </Animatable.View>
      ))}
    </MainLayout>
  )
}

export default Favorite

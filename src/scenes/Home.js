import React, { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { Text, View, Button, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import * as Amimatable from 'react-native-animatable'

import MainLayout from '../components/templates/MainLayout'
import WordOfTheDay from '../components/molecules/word/WordOfTheDay'
import { backHandleToExitApp } from '../utils'
import RecentWords from '../components/molecules/home/RecentWords'
import { Colors } from '../styles'
import CurrentVocabularies from '../components/molecules/home/CurrentVocabularies'
import { RoutesConstants } from '../navigations/route-constants'

const Home = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  const onGoToWordView = (data) => {
    navigation.navigate(RoutesConstants.WordView, { word: data })
  }

  const onClickPreView = () => {
    navigation.navigate(RoutesConstants.LessonDetail)
  }

  const onClickPractise = (id, courseId) => {
    navigation.navigate(RoutesConstants.MainLearning, { id: id, courseId: courseId })
  }

  const onClickOnlineTranslationButton = () => {
    navigation.navigate('Dịch online', '')
  }

  const onClickLearnNow = () => {
    navigation.navigate(RoutesConstants.LearnNow)
  }

  const onGoToSearchView = () => {
    navigation.navigate(RoutesConstants.SearchWord)
  }
  return (
    <MainLayout
      autoFocusSearchInput={false}
      voiceButtonIsVisible={true}
      onGoToSearchView={onGoToSearchView}
    >
      <WordOfTheDay onGoToWordView={onGoToWordView} />
      <RecentWords onGoToWordView={onGoToWordView} />
      <View style={styles.buttonWrapper}>
        <Button
          style={buttonStyle}
          onPress={onClickOnlineTranslationButton}
          iconLeft
          block
          rounded
        >
          <Icon name="translate" type="MaterialCommunityIcons" />
          <Text style={styles.buttonText} uppercase={false}>
            Dịch online
          </Text>
        </Button>
      </View>
      <CurrentVocabularies
        onClickPreView={onClickPreView}
        onClickPractise={onClickPractise}
        onClickLearnNow={onClickLearnNow}
        id={'abc'}
        index={0}
        courseId={'mnq'}
        wordIds={['1', '2', '3', '4', '5', '6', '7', '3', '4', '5']}
      />
    </MainLayout>
  )
}

const buttonStyle = {
  backgroundColor: Colors.BLUE_DARK,
  width: 200,
  marginBottom: 25,
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderTopColor: Colors.WHITE,
  },
  buttonText: {
    fontSize: 16,
  },
})

export default Home

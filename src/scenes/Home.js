import React, { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { Text, View, Button, Icon } from 'native-base'
import { StyleSheet } from 'react-native'

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
    navigation.navigate('LessonDetail')
  }

  const onClickPractise = () => {
    navigation.navigate('MainLearning')
  }

  const onClickOnlineTranslationButton = () => {
    navigation.navigate('Dịch online', '')
  }

  const onClickLearnNow = () => {
    navigation.navigate('LearnNow')
  }

  const onGoToSearchView = () => {
    navigation.navigate('Tìm kiếm')
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

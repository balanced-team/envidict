import { Ionicons } from '@expo/vector-icons'
import { decode, encode } from 'base-64'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Root } from 'native-base'
import React, { useState, useContext } from 'react'
import { StatusBar, StyleSheet, View, AsyncStorage } from 'react-native'
import Routes from './src/navigations/Routes'
import { topicStoreContext, voiceStoreContext } from './src/contexts'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const topicStore = useContext(topicStoreContext)
  const voiceStore = useContext(voiceStoreContext)

  topicStore.fetch()

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={async () => await loadResourcesAsync(voiceStore)}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <Root>
        <View style={styles.container}>
          <StatusBar backgroundColor="red" hidden={false} barStyle="light-content" />
          <Routes />
        </View>
      </Root>
    )
  }
}

const loadResourcesAsync = async (voiceStore) => {
  await Font.loadAsync({
    ...Ionicons.font,
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  })
  const voiceSettings = JSON.parse(await AsyncStorage.getItem('envidictVoiceSettings'))
  if (voiceSettings === null) {
    await AsyncStorage.setItem(
      'envidictVoiceSettings',
      JSON.stringify({ rate: 1, pitch: 1, volume: 1 })
    )
  }
  voiceStore.setRate(voiceSettings.rate)
  voiceStore.setPitch(voiceSettings.pitch)
  voiceStore.setVolume(voiceSettings.volume)
}

const handleLoadingError = (error) => {
  console.warn(error)
}

const handleFinishLoading = (setLoadingComplete) => {
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
})

export default App

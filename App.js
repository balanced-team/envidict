import { Ionicons } from '@expo/vector-icons'
import { decode, encode } from 'base-64'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Root } from 'native-base'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Routes from './src/navigations/Routes'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
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

const loadResourcesAsync = async () => {
  await Font.loadAsync({
    ...Ionicons.font,
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  })

  firebase.initializeApp({
    apiKey: 'AIzaSyDuVs4fMylajYaD400oHVKGtXZW3FT9Xss',
    authDomain: 'envidict-4c249.firebaseapp.com',
    databaseURL: 'https://envidict-4c249.firebaseio.com',
    projectId: 'envidict-4c249',
    storageBucket: 'envidict-4c249.appspot.com',
    messagingSenderId: '17743148956',
    appId: '1:17743148956:web:967ea767205aee123a3a59',
    measurementId: 'G-X1497GR21T',
  })
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
